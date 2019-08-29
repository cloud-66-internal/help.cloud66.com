---
layout: post
template: one-col
title: Replacing SQLite
categories: how-to-guides/databases
lead: "How to replace your default SQLite database with MySQL or Postgres"
tags: ["postgresql","sqlite","mysql"]
legacy: false
permalink: /:collection/:path:output_ext
---


## Instructions
The following instructions show you how to switch from SQLite to MySQL or PostgreSQL in five steps.


## MySQL

1.  Replace `adapter: sqlite` with `adapter: mysql2` in your config/database.yml file.
2.  Replace `gem 'sqlite*'` with `gem 'mysql2'` in your Gemfile.
3.  Run `bundle install`.
4.  Commit and check changes in.
5.  Rebuild your application.


## PostgreSQL

1.  Replace `adapter: sqlite` with `adapter: postgresql` in your config/database.yml file.
2.  Replace `gem 'sqlite*'` with `gem 'pg'` in your Gemfile.
3.  Run `bundle install`.
4.  Commit and check changes in.
5.  Rebuild your application.

More information about [databases](/{{page.collection}}/how-to-guides/databases/database-management.html) supported by Cloud 66.

