FROM	alpine
LABEL	Author: Steven Montealegre
LABEL	email: james.montealegre@correo.icesi.edu.co
# basic flask environment
RUN apk add --no-cache bash python py2-pip \
	&& pip2 install --upgrade pip \
        && pip2 install flask

COPY app.py app.py

EXPOSE 8080
CMD ["/usr/bin/python", "app.py"]
