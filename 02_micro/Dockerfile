FROM alpine
LABEL author: Miguel Isaza
LABEL email: miguel.isaza1@correo.icesi.edu.co

RUN apk add --no-cache bash python py2-pip && \
    pip2 install --upgrade pip && \
    pip2 install flask

COPY flask.py flask.py

EXPOSE 8080

CMD ["/usr/bin/python", "flask.py"]
