FROM alpine
LABEL autor: Edisson guerrero
LABEL email: edixon_guerrero96@hotmail.com
RUN apk add --no-cache apache2 && \
    echo "ServerName 127.0.0.1" > /etc/apache2/conf.d/custom.conf && \
    mkdir -p /run/apache2
    
COPY home/inalambricas/Desktop/maquinas/index.html var/www/localhost/htdocs/index.html 

EXPOSE 80

ENTRYPOINT ["/usr/sbin/httpd"]
CMD ["-D","FOREGROUND"]
