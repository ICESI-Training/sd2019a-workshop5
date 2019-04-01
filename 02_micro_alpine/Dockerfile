FROM alpine
LABEL author: Joan sebastian Garcia Delgado
LABEL email: joan.garcia1@correo.icesi.edu.co


# basic flask environment
RUN apk add --no-cache bash python py2-pip \
	&& pip2 install --upgrade pip \
        && pip2 install flask
copy greedy.py greedy.py

CMD ["/usr/bin/python", "greedy.py"]
