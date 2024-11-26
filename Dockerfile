FROM openjdk:11-slim-buster

ENV JAVA_APP_JAR project-app-1.0.0-SNAPSHOT.jar
ADD project-app/target/$JAVA_APP_JAR app.jar

RUN date

VOLUME /tmp
RUN java -version
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar" ]

EXPOSE 8080
