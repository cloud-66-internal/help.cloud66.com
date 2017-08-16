<!-- post: -->


### Process servers

When you first build your stack, your processes are run on your web server by default. To scale up a process server, click the link to your _Process server_ group on your stack detail page. Next, click _New process server_ in the top right corner, select the desired server size and quantity, and click _Scale up_.

Once the server is ready, you can move your processes from the web server to the process server by using the _+_ and _-_ buttons. The process server is very much like a web server, as it needs all the code and dependencies for your workers. By default however, it will not serve web content. If you would like the process server to serve web content, add a load balancer to your stack and access the load balancer page. This page allows you to toggle serving web content from a process server _On_ and _Off_.

