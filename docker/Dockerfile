FROM nginx:1.8
MAINTAINER Dirk Grappendorf <dirk@grappendorf.net>

# Install additional software
RUN apt-get update -qq
RUN apt-get install -qq curl git
RUN curl -sL https://deb.nodesource.com/setup_5.x | bash -
RUN apt-get install -qq nodejs
COPY docker/confd-0.11.0-linux-amd64 /bin/confd
COPY docker/run.sh /bin/
COPY docker/nginx.conf /etc/nginx/

# Link nginx html dir to /app/public
RUN rm -rf /usr/share/nginx/html
RUN ln -s /app/public /usr/share/nginx/html

# Install and build web app
COPY confd/confd.toml /etc/confd/
COPY confd/index.html.toml /etc/confd/conf.d/
COPY app/index.html.tmpl /etc/confd/templates/
COPY . /app/
WORKDIR /app
RUN npm install --silent --production
RUN node_modules/.bin/bower install --allow-root --silent --production

ENTRYPOINT ["run.sh"]
