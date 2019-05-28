FROM alpine
LABEL author: Julián Niño
LABEL email: juliannino01@hotmail.com

RUN apk add --no-cache apache2 && \ 
    echo "ServerName 127.0.0.1" > /etc/apache2/conf.d/custom.conf && \ 
    mkdir -p /run/apache2 && \
    apk update && \
    apk add ca-certificates && \
    cd /var/www/localhost/htdocs && \
    wget -O icesi.html http://www.icesi.edu.co && \
    echo "<html><body><h1>YO SOY JULIÁN NIÑO</h1></body></html>" > /var/www/localhost/htdocs/student.html 


ENTRYPOINT ["/usr/sbin/httpd"]
CMD ["-D", "FOREGROUND"]
