FROM alpine
LABEL author: Joan sebastian Garcia Delgado
LABEL email: joan.garcia1@correo.icesi.edu.co


# basic flask environment
RUN apk add --no-cache bash python py2-pip \
	&& pip2 install --upgrade pip \
        && pip2 install flask

COPY app.py app.py

EXPOSE 8080
CMD ["/usr/bin/python", "app.py"]
