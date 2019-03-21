FROM centos
LABEL name: Sebastian Garcia
LABEL email: joan.garcia1 at icesi.edu.co

RUN yum install -y epel-release wget &&\
    yum install -y python-pip &&\
    yum install -y python-devel &&\
    pip install flask &&\
    wget https://raw.githubusercontent.com/ICESI/ds-discovery-service/master/sources/microservice_a.py -P /tmp

ENTRYPOINT ["/usr/bin/python","/tmp/microservice_a.py"] 
#CMD ["-D", "FOREGROUND"]

