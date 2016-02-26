FROM nginx:1.9
MAINTAINER Dirk Grappendorf <dirk@grappendorf.net>

ENV DOCKERFILE_APT_UPDATE_AT 2016-02-23
RUN apt-get -qq update
RUN apt-get install -qq wget
RUN wget -O /bin/confd https://github.com/kelseyhightower/confd/releases/download/v0.11.0/confd-0.11.0-linux-amd64
RUN chmod +x /bin/confd
RUN apt-get purge -qq wget

ADD confd/confd.toml /etc/confd/confd.toml
ADD confd/index.html.toml /etc/confd/conf.d/index.html.toml
ADD app/index.html.tmpl /etc/confd/templates/index.html.tmpl
RUN rm -rf /usr/share/nginx/html
ADD public /usr/share/nginx/html
ADD docker/start.sh /bin/start.sh

CMD ["start.sh"]
