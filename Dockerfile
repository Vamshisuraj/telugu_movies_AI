FROM apache-tomcat-9.0.108
LABEL This is first automated jenikins with tomcat
EXPOSE 8080
COPY tomcat-users.xml /usr/local/tomcat/conf
COPY tatget/*.war /usr/local/tomcat/webapp

