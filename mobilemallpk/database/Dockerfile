FROM mysql:latest

#Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=root1234
ENV MYSQL_DATABASE=mobile_mall

#Copy the database.sql file to the container
COPY mobile_mall.sql /docker-entrypoint-initdb.d/

#Expose MySQL port (optional)
EXPOSE 3306

#Define the entry point script
ENTRYPOINT ["docker-entrypoint.sh"]

#Start the MySQL server
CMD ["mysqld"]
