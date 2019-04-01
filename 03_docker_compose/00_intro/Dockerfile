FROM alpine 
LABEL author: Daniel Perez
LABEL email: danielperga97@outlook.com

RUN apk add --no-cache bash python py2-pip &&\
    pip2 install --upgrade pip &&\
    pip2 install flask 

COPY app.py app.py
EXPOSE 8080
CMD ["/usr/bin/python","app.py"]


