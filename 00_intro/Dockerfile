FROM alpine
LABEL AUTHOR: Santiago Fajardo
LABEL EMAIL: santiago_fajardo96@hotmai.com

RUN apk add --no-cache apache2 && \
echo "ServerName 127.0.0.1" > /etc/apache2/conf.d/custom.conf && \
mkdir -p /run/apache2 && mkdir -p /var/www/html/index.html
RUN echo "<h1>Apache with Docker</h1>" > /var/www/html/index.html



EXPOSE 80
ENTRYPOINT apache2ctl -D FOREGROUND
#ENTRYPOINT ["/usr/sbin/httpd"]
CMD ["-D", "FOREGROUND"]
