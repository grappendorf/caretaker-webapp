module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('bower.json');

  grunt.initConfig({
    pkg: pkg,

    copyrightSince: function(year) {
      now = new Date().getFullYear();
      return year + (now > year ? '-' + now : '');
    },

    bumpversion: {
      options: {
        files: ['bower.json', 'package.json'],
        updateConfigs: ['pkg'],
        commit: true,
        commitFiles: ['-a'],
        commitMessage: 'Bump version number to %VERSION%',
        createTag: true,
        tagName: '%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false
      }
    },

    conventionalChangelog: {
      options: {
        version: pkg.version
      }
    },

    clean: {
      build: ['build'],
      dist: ['build', 'public/*', '!public/test', '!public/components', 'node_modules', 'screenshots']
    },

    coffee: {
      dist: {
        cwd: 'app/elements',
        src: ['**/*.coffee'],
        dest: 'build',
        ext: '.js',
        expand: true
      }
    },

    coffeelint: {
      src: ['app/elements/**/*.coffee'],
      options: {
        configFile: '.coffeelint.json'
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'public'
        }
      },
      tests: {
        options: {
          port: '?',
          base: 'public',
          middleware: function(connect, options, middlewares) {
            middlewares.unshift(require('webapp-tester').ApiMocker);
            return middlewares;
          }
        }
      }
    },

    copy: {
      options: {
        processContent: function(content, srcpath) {
          return grunt.template.process(content);
        },
        processContentExclude: ['**/*.{png,gif,jpg,ico,psd}']
      },
      license: {
        src: 'tmpl/license.tmpl',
        dest: 'LICENSE.txt'
      },
      images: {
        cwd: 'app',
        src: 'images/**/*',
        dest: 'public',
        expand: true
      },
      javascripts: {
        cwd: 'app',
        src: 'javascripts/*',
        dest: 'public',
        expand: true
      },
      stylesheets: {
        cwd: 'app',
        src: 'stylesheets/*',
        dest: 'public',
        expand: true
      }
    },

    dock: {
      options: {
        docker: {
          socketPath: '/var/run/docker.sock'
        },
        images: {
          'caretaker-webapp': {
            dockerfile: '.',
            options: {
              start: {
                "Env": [
                  "WEBSOCKET_URL=ws://127.0.0.1:3000/websocket",
                  "API_URL=http://127.0.0.1:3000"
                ],
                "PortBindings": {"80/tcp": [{"HostPort": "8080"}]}
              }
            }
          }
        }
      }
    },

    htmlbuild: {
      dist: {
        cwd: 'app/elements',
        src: '**/*.html',
        dest: 'build',
        expand: true,
        options: {
          data: {
            copyright: grunt.file.read('tmpl/copyright.tmpl')
          }
        }
      }
    }
    ,

    less: {
      dist: {
        files: grunt.file.expandMapping(['app/elements/**/*.less'], 'build/', {
          rename: function(dest, src) {
            return dest + src.replace(/app\/elements\/(.+)\.less$/, '$1.css');
          }
        })
      }
    }
    ,

    replace: {
      indexHtmlForTest: {
        src: 'app/index.html.tmpl',
        dest: 'public/index.html',
        replacements: [{
          from: /Grapp.I18NJsBehavior.i18nSetDefaultLocale\(.+\)/,
          to: 'Grapp.I18NJsBehavior.i18nSetDefaultLocale("en")'
        }, {
          from: /Grapp.I18NJsBehavior.i18nSetLocale\(.+\)/,
          to: 'Grapp.I18NJsBehavior.i18nSetLocale("en")'
        }, {
          from: /{{getv "\/api\/url"}}/,
          to: 'http://localhost:' + process.env["GRUNT_CONNECT_PORT"] + '/api'
        }]
      }
      ,
      indexHtmlForConnect: {
        src: 'app/index.html.tmpl',
        dest: 'public/index.html',
        replacements: [{
          from: /{{getv "\/websocket\/url"}}/, to: 'ws://127.0.0.1:3000/websocket'
        }, {
          from: /{{getv "\/api\/url"}}/, to: 'http://127.0.0.1:3000'
        }]
      }
    }
    ,

    shell: {
      cucumber: {
        command: 'node node_modules/cucumber/bin/cucumber.js \
                  -r features/step_definitions -r features/support \
                  -f pretty -t ~@ignore --coffee'
      }
      ,
      test: {
        command: 'xvfb-run -a ./bin/grunt all-test'
      }
    }
    ,

    watch: {
      stylesheets_less: {
        files: ['app/**/*.less'],
        tasks: ['newer:less', 'newer:htmlbuild', 'html-inline']
      }
      ,
      scripts: {
        files: ['app/**/*.coffee'],
        tasks: ['newer:coffee', 'newer:htmlbuild', 'html-inline']
      }
      ,
      html: {
        files: 'app/**/*.html',
        tasks: ['newer:htmlbuild', 'html-inline']
      }
      ,
      tests: {
        files: 'test/*.html',
        tasks: []
      }
    }
  })
  ;

  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-conventional-changelog');
  grunt.loadNpmTasks('grunt-dock');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadTasks('tasks');

  grunt.registerTask('build', 'Compile all assets and create the distribution files',
      ['newer:less', 'newer:coffeelint', 'newer:coffee', 'newer:htmlbuild', 'html-inline',
        'newer:copy:images', 'newer:copy:javascripts', 'newer:copy:stylesheets']);

  grunt.registerTask('cucumber-test-run', 'Run the cucumber tests', function() {
    grunt.event.once('connect.tests.listening', function(host, port) {
      process.env['GRUNT_CONNECT_PORT'] = port;
      grunt.task.run('replace:indexHtmlForTest');
      grunt.task.run('shell:cucumber');
    });
    grunt.task.run('connect:tests');
  });
  grunt.registerTask('cucumber-test', ['build', 'cucumber-test-run']);

  grunt.registerTask('test', 'Test the web application', ['shell:test']);

  grunt.registerTask('wct-test-run', function() {
    var
        done = this.async(),
        wct = require('web-component-tester'),
        options = {
          remote: false,
          persistent: false,
          root: 'public',
          plugins: {
            local: {
              browsers: ['chrome']
            }
          }
        };
    wct.test(options, function(error) {
      done();
      if (error) {
        grunt.fail.warn(error);
      }
    });
  });
  grunt.registerTask('wct-test', ['build', 'wct-test-run']);

  grunt.registerTask('all-test', 'Test the web application', ['wct-test', 'cucumber-test']);

  grunt.task.renameTask('bump', 'bumpversion');

  grunt.registerTask('bump', '', function(versionType) {
    versionType = versionType ? versionType : 'patch';
    grunt.task.run(['bumpversion:' + versionType + ':bump-only',
      'build', 'copy:license', 'conventionalChangelog', 'bumpversion::commit-only']);
  });

  grunt.registerTask('default', 'Build the software and watch for changes',
      ['build', 'replace:indexHtmlForConnect', 'connect:server', 'watch']
  );
};
