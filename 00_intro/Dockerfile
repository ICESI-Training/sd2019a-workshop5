FROM alpine
LABEL author: Miguel Isaza
LABEL email: miguel.isaza1@correo.icesi.edu.co

RUN apk add --no-cache apache2 && \ 
    echo "ServerName 127.0.0.1" > /etc/apache2/conf.d/custom.conf && \ 
    mkdir -p /run/apache2
COPY student.html /var/www/localhost/index.html
EXPOSE 80

ENTRYPOINT ["/usr/sbin/httpd"]
CMD ["-D", "FOREGROUND"]
