FROM ubuntu

LABEL author: santiago Fajardo
LABEL email: santiago.fajardo@correo.icesi.edu.co

RUN apt-get update && \
    apt-get install -y python python-pip && \
    pip install flask -y && \
    rm -rf /var/lib/apt/lists/* && \
    wget https://raw.githubusercontent.com/ICESI/ds-discovery-service/master/sources/microservice_a.py

EXPOSE 80
ENTRYPOINT ["python microservice_a.py"]

CMD ["-D","FOREGROUND"]



