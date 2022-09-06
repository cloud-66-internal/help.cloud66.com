---
layout: post
template: one-col
title: Writing a custom Dockerfile for PHP
categories: how-to-guides/dockerfiles
order: 4
lead: "Writing a custom Dockerfile for a PHP application"
legacy: false
tags: ["operations"]
permalink: /:collection/:path:output_ext
---

## Overview

If we detect that your application uses PHP we will suggest a default [Dockerfile](/maestro/how-to-guides/dockerfiles/writing-a-dockerfile.html) for you to use (see below). This file should work for most PHP applications, but if your app has some special cases you may need to modify it or write your own from scratch. This doc will walk you through the basics of doing so.

Before following this guide, we recommend getting acquainted with [the basics of the Docker platform](https://docs.docker.com/get-started/overview/). Because you're using Maestro, most of the Docker tasks and processes described will be completely automated, but it is useful to understand why a Dockerfile is necessary and what it does.

## Adding a Dockerfile to your repo

A `Dockerfile` is essentially a plaintext file with no file extension that you add to the root of your repository. If for some reason you can’t have it in the root, you can specify this in your Cloud 66 [service config](/maestro/how-to-guides/dockerfiles/writing-a-dockerfile.html#putting-a-dockerfile-in-a-sub-directory).

## Default PHP Dockerfile

This is the Dockerfile we will suggest for PHP apps that do not already have one:

```docker
FROM php:latest-apache
#install all the dependencies
RUN apt-get update && apt-get install -y \
      libicu-dev \
      libpq-dev \
      libmcrypt-dev \
      git \
      zip \
      unzip \
    && rm -r /var/lib/apt/lists/* \
    && docker-php-ext-configure pdo_mysql --with-pdo-mysql=mysqlnd \
    && docker-php-ext-install \
      intl \
      mbstring \
      mcrypt \
      pcntl \
      pdo_mysql \
      pdo_pgsql \
      pgsql \
      zip \
      opcache
#install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer
#create project folder
ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME
#change uid and gid of apache to docker user uid/gid
RUN usermod -u 1000 www-data && groupmod -g 1000 www-data
#change apache setting
RUN sed -i -e "s/var\/www/app/g" /etc/apache2/apache2.conf && sed -i -e "s/html/public/g" /etc/apache2/apache2.conf
RUN a2enmod rewrite
#copy source files and run composer
COPY . $APP_HOME
RUN composer install --no-interaction
#change ownership
RUN chown -R www-data:www-data $APP_HOME
```

A few notable things that this Dockerfile does:

- It creates a home directory in the image for your app and sets it as an environment variable (`$APP_HOME`)
- It installs a range of database drivers (`pdo_mysql`, `pdo_pgsql` etc)
- It installs a range of commonly needed packages (`zip`, `mcrypt` etc)

The file is obviously customisable as needed. For example, you can choose to install an alternative database driver in the `apt-get install` block.

## Writing your own Dockerfile

We generally recommend against writing your own Dockerfile from scratch, but the basics are not difficult to master. Before starting you should have a firm understanding of basic [Docker commands](https://docs.docker.com/engine/reference/builder/) (`RUN`, `ENV`, `ADD`, `WORKDIR` etc).

The order of the commands is extremely important. If you try to run a component before one of its dependencies, the build will fail.

The simplest possible Dockerfile for a PHP application looks something like this:

```docker
# Tells the image to use the latest version of PHP
FROM php:latest-apache  

# Creates a directory called "app"
RUN mkdir /app  

# Sets that directory as your working directory
WORKDIR /app  

# Changes uid and gid of apache to docker user uid/gid
RUN usermod -u 1000 www-data && groupmod -g 1000 www-data

# Sets Apache to run via the app directory
RUN sed -i -e "s/var\/www/app/g" /etc/apache2/apache2.conf && sed -i -e "s/html/public/g" /etc/apache2/apache2.conf

# Copies your code to the image
COPY . /app  

# Sets permissions for the web user
RUN chown -R www-data:www-data
```

This image is obviously missing a lot components that you might need - it has no database drivers for example - but you can add these as needed. 

You'll notice that we do not set up any virtual hosts - this is because traffic to Cloud 66 apps is handled by Nginx. Apache is only required to serve traffic to the [internal container (service) network](/maestro/how-to-guides/build-and-config/service-networking.html).