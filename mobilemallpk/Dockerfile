#Use an official PHP runtime as the base image
FROM php:8.0-apache
RUN docker-php-ext-install mysqli
#Set the working directory inside the container
WORKDIR /var/www/html

#Copy the website files into the container
COPY . /var/www/html

#Expose the port that the web server will listen on
EXPOSE 80

#Start the PHP web server
CMD ["php", "-S", "0.0.0.0:80"]