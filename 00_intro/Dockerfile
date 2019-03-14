FROM alpine
LABEL author: Juan Sanchez
LABEL email: juanma0012@gmail.com

RUN apk add --no-cache apache2 && \
    echo "ServerName 127.0.0.1" > /etc/apache2/conf.d/custom.conf && \
    mkdir -p /run/apache2 && \
    apk update && \
    apk add ca-certificates wget  && \
    update-ca-certificates  && \  
    cd /var/www/localhost/htdocs/  && \
    rm /var/www/localhost/htdocs/index.html && \
    wget http://www.icesi.edu.co/ && \
    echo "<h1> Juan Sanchez </h1>" > /var/www/localhost/htdocs/student.html

EXPOSE 80

ENTRYPOINT ["/usr/sbin/httpd"]
CMD ["-D", "FOREGROUND"]

