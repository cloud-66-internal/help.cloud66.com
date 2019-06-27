---
layout: post
template: one-col
title: How to change the data directory for PostgreSQL
categories: Tutorials
lead: ""
legacy: true
sitemap: false

permalink: /:collection/:path:output_ext
---

## Notice
<div class="notice notice-warning"><p>This documentation set has been merged with the <a href="/maestro/">Maestro Version 2</a> documentation and is officially deprecated. These pages will be redirected to their equivalents in that doc set within the next few weeks.</p></div>


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
