<!-- usedin: [ _rails/deployment/unicorn-rack-server.md] -->


### Kill the web server

- kill -QUIT \<pid>: Stop the process
- kill -USR2 \<pid>: Spin off another master process.
- kill -s TTIN \<pid>: Add a new worker to the master process

