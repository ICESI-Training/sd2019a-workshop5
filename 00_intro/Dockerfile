FROM alpine
LABEL author: Jonathan_Arias
LABEL email: jonathan.arias@correo.icesi.edu.co

RUN apk add --no-cache apache2 && \
    echo "ServerName 127.0.0.1" > /etc/apache2/conf.d/custom.conf && \
    mkdir -p /run/apache2

EXPOSE 80

ENTRYPOINT ["usr/sbin/httpd"]
CMD ["-D", "FOREGROUND"] 
