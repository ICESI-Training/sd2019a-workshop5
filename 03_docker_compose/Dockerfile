FROM alpine
LABEL author: Juan Sanchez
LABEL email: juanma0012@gmail.com


# basic flask environment
RUN apk add --no-cache bash python py2-pip \
	&& pip2 install --upgrade pip \
        && pip2 install flask

COPY app.py app.py

EXPOSE 8080
CMD ["/usr/bin/python", "app.py"]
