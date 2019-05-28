FROM alpine
LABEL author : Julián Niño
LABEL email : juliannino01@hotmail.com


# basic flask environment
RUN apk add --no-cache bash python py2-pip \
	&& pip2 install --upgrade pip \
        && pip2 install flask

COPY a.py a.py

EXPOSE 8080
CMD ["/usr/bin/python", "a.py"]
