---
layout: post
template: one-col
title: Changing the PostgreSQL data directory
categories: how-to-guides/databases
lead: "How to change the data directory used by PostgreSQL"
legacy: false

permalink: /:collection/:path
---
{% assign product = "common" %}

We use the default data folder when installing PostgreSQL on your server, which is  `/usr/local/pgsql/data`.
To change this folder, follow the instructions below.

1.  Connect to your servers via [SSH](/{{page.collection}}/how-to-guides/deployment/shells/ssh.html).
2.  Stop the PostgreSQL service by issuing the following command:
		
		$ (sudo -u postgres pg_ctl stop -D /usr/local/pgsql/data -m i -t 5 || true) && sudo stop postgresql 
3.  Make sure that PostgreSQL is no longer running:

		$ ps aux | grep pgsql
	
	This command must not return any running PostgreSQL processes. 
4.  Make a new directory for your data:

		$ mkdir /new/path/folder

5.  Make sure that your new folder is only accessible by the PostgreSQL user:
			
		$ chown postgres /new/path/folder
		$ chmod 700 /new/path/folder

6.  Move your data from the old folder to new one:
			
		$ mv /usr/local/pgsql/data /new/path/folder

7.  Create a symlink to your new folder from the old one:

		$ ln -s /new/path/folder/data /usr/local/pgsql/data

8.  Start the PostgreSQL service again:

		$ sudo start postgresql

Your PostgreSQL service should now be working with new data folder.
