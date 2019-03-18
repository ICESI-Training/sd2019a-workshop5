FROM alpine
LABEL author: Steven Montealegre
LABEL email: jasmongu@gmail.com

RUN apk add --no-cache apache2 && \
    echo "ServerName 127.0.0.1" > /etc/apache2/conf.d/custom.conf && \
    mkdir -p /run/apache2 && \
    apk update && \
    apk add ca-certificates && \
    cd /var/www/localhost/htdocs && \
    wget -O icesi.html http://www.icesi.edu.co && \
    echo "<html><head><title>Clase Distribuidos></title></head><body><h1>Steven Montealegre</h1></body></html>" > /var/www/localhost/htdocs/student.html    

EXPOSE 80

ENTRYPOINT ["/usr/sbin/httpd"]
CMD ["-D", "FOREGROUND"]

