FROM	alpine
LABEL	Author: Steven Montealegre
LABEL	email: james.montealegre@correo.icesi.edu.co
# basic flask environment
RUN apk add --no-cache bash python py2-pip \
	&& pip2 install --upgrade pip \
        && pip2 install flask

COPY greedy.py greedy.py

CMD ["/usr/bin/python", "greedy.py"]
