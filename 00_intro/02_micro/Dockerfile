FROM alpine
LABEL author: Jonathan Arias
LABEL email: jonathan.arias@correo.icesi.edu.co

RUN apk add --no-cache bash python py2-pip \
	&& pip2 install --upgrade pip \
        && pip2 install flask

COPY app.py app.py

EXPOSE 8080
CMD ["/usr/bin/python", "app.py"]
