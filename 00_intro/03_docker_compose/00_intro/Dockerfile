FROM alpine
LABEL author: Jonathan Arias
LABEL email: jonathan.arias@correo.icesi.edu.co

RUN apk add --no-cache bash python py2-pip \
	&& pip2 install --upgrade pip \
        && pip2 install flask

COPY greedy.py greedy.py

#EXPOSE 
CMD ["/usr/bin/python", "greedy.py"]
