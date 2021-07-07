FROM alpine
LABEL author: Daniel Perez
LABEL email: danielperga97@outlook.com

RUN apk add --no-cache apache2 && \
    apk add ca-certificates && \
    echo "ServerName 127.0.0.1" > /etc/apache2/conf.d/custom.conf && \ 
#    touch /etc/apache2/conf.d/student.conf && \
#    echo "NameVirtualHost *:80" > /etc/apache2/conf.d/student.conf && \
#    echo "<VirtualHost *:80>" >> /etc/apache2/conf.d/student.conf && \
#    echo "ServerName A00018200" >> /etc/apache2/conf.d/student.conf && \
#    echo "ServerAlias A00018200" >> /etc/apache2/conf.d/student.conf && \
    echo "DocumentRoot /var/www/html" >> /etc/apache2/conf.d/custom.conf && \
#    echo "</VirtualHost>" >> /etc/apache2/conf.d/student.conf && \
    mkdir -p /var/www/html && \
    touch /var/www/html/student.html  && \
    echo "<html><head> A00018200 </head><body> <h1> A00018200 </h1> </body></html>"  > /var/www/html/student.html &&\
    mkdir -p /run/apache2 

EXPOSE 80

ENTRYPOINT ["/usr/sbin/httpd"]

CMD ["-D", "FOREGROUND"]
