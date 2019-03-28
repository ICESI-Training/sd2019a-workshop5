FROM alpine
LABEL author: edisson guerrerp
LABEL email: edixicesi@gmail.com


# basic flask environment
RUN apk add --no-cache bash python py2-pip \
	&& pip2 install --upgrade pip \
        && pip2 install flask

COPY greedy.py greedy.py

EXPOSE 8080
CMD ["/usr/bin/python", "greedy.py"]
