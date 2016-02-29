FROM nginx:1.9
MAINTAINER Dirk Grappendorf <dirk@grappendorf.net>

RUN apt-get -qq update
COPY docker/confd-0.11.0-linux-amd64 /bin/confd

COPY confd/confd.toml /etc/confd/confd.toml
COPY confd/index.html.toml /etc/confd/conf.d/index.html.toml
COPY app/index.html.tmpl /etc/confd/templates/index.html.tmpl
RUN rm -rf /usr/share/nginx/html
COPY public /usr/share/nginx/html
COPY docker/start.sh /bin/start.sh

CMD ["start.sh"]
