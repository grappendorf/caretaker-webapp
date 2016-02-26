var fs = require('fs');
var path = require('path');

module.exports = function(grunt) {

  grunt.registerTask('html-inline', 'Inline linked CSS/JS files into HTML files',
      function() {
        var styleSheetImportRegExp = new RegExp('<link rel="import" type="css" href="(.+)">');
        var scriptImportRegExp = new RegExp('<script src="(.+)">');
        var templateTagRegExp = new RegExp('<template>');
        var htmlFiles = grunt.file.expand('build/**/*.html');
        var numFilesUpdated = 0;

        htmlFiles.forEach(function(srcFile) {
          var srcFileTime = fs.statSync(srcFile).mtime;
          var dstFile = srcFile.replace('build/', 'public/');
          var dstFileTime = grunt.file.exists(dstFile) ? fs.statSync(dstFile).mtime : new Date(0);
          var needUpdate = srcFileTime > dstFileTime;
          var html = grunt.file.read(srcFile);
          var match = null;

          html.split('\n').forEach(function(line) {
            if (match = line.match(styleSheetImportRegExp)) {
              var cssFile = path.join(path.dirname(srcFile), match[1]);
              if (grunt.file.exists(cssFile) && cssFile.startsWith('build/')) {
                needUpdate = needUpdate || fs.statSync(cssFile).mtime > dstFileTime;
              }
            } else if (match = line.match(scriptImportRegExp)) {
              var scriptFile = path.join(path.dirname(srcFile), match[1]);
              if (grunt.file.exists(scriptFile) && scriptFile.startsWith('build/')) {
                needUpdate = needUpdate || fs.statSync(scriptFile).mtime > dstFileTime;
              }
            }
          });

          if (needUpdate) {
            numFilesUpdated += 1;
            var newHtml = '';
            var cssContent = '';
            html.split('\n').forEach(function(line) {
              if (match = line.match(styleSheetImportRegExp)) {
                var cssFile = path.join(path.dirname(srcFile), match[1]);
                if (cssFile.startsWith('build/')) {
                  cssContent += grunt.file.read(cssFile) + '\n';
                } else {
                  newHtml += line + '\n';
                }
              } else if (line.match(templateTagRegExp) && cssContent.length) {
                newHtml += '<template>\n<style>\n' + cssContent + '</style>\n';
              } else if (match = line.match(scriptImportRegExp)) {
                var scriptFile = path.join(path.dirname(srcFile), match[1]);
                if (scriptFile.startsWith('build/')) {
                  newHtml += '<script>\n' + grunt.file.read(scriptFile) + '\n</script>\n';
                } else {
                  newHtml += line + '\n';
                }
              } else {
                newHtml += line + '\n';
              }
            });
            grunt.file.write(dstFile, newHtml);
          }
        });

        if (numFilesUpdated > 0) {
          grunt.log.ok(numFilesUpdated + ' html files inlined.');
        }
      }
  );
};
