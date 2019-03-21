FROM alpine
LABEL author: Sebastian Garcia
LABEL email: joan.garcia1@correo.icesi.edu.co

RUN apk add --no-cache apache2 && \
    echo "Servername 127.0.0.1 JSGD" > /etc/apache2/conf.d/custom.conf && \
    mkdir -p /run/apache2

EXPOSE 80

ENTRYPOINT ["/usr/sbin/httpd"] 
CMD "-D", "FOREGROUND"

