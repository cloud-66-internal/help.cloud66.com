#We use the default data folder when installing PostgreSQL on your server, which is  `/usr/local/pgsql/data`.
To change this folder, follow the instructions below.

1.  Connect to your servers via [SSH](http://help.cloud66.com/managing-your-stack/ssh-to-your-server).
2.  Stop the PostgreSQL service by issuing the following command:
3.  Make sure that PostgreSQL is no longer running:
4.  Make a new directory for your data:
5.  Make sure that your new folder is only accessible by the PostgreSQL user:
6.  Move your data from the old folder to new one:
7.  Create a symlink to your new folder from the old one:
8.  Start the PostgreSQL service again:
