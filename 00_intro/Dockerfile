FROM alpine
LABEL author: Daniel Perez
LABEL email: danielperga97@outlook.com

RUN apk add --no-cache apache2 && \
    echo "NameVirtualHost *:80<VirtualHost *:80>ServerName A00018200ServerAlias A00018200DocumentRoot /var/www/html/student.html/</VirtualHost" > /etc/apache2/conf.d/student.conf && \
    mkdir -p /var/www/html && \
    echo "<html><head> A00018200 </head><body> <h1> A00018200 </h1> </body></html>"  > /var/www/html/student.html &&\
    mkdir -p /run/apache2

EXPOSE 80

ENTRYPOINT ["/usr/sbin/httpd"]

CMD ["-D", "FOREGROUND"]
