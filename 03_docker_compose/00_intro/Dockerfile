FROM alpine
LABEL author: Miguel Isaza
LABEL email: miguel.isaza1@correo.icesi.edu.co


# basic flask environment
RUN apk add --no-cache bash python py2-pip \
	&& pip2 install --upgrade pip \
        && pip2 install flask

COPY greedy.py greedy.py

#EXPOSE 8080
CMD ["/usr/bin/python", "greedy.py"]

