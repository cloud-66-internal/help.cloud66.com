#This is used to expose your service to the outside world. Outside world includes any server/computer out of the stack. So if you even have two stacks and one needs a service from the other one you need to expose your service/container. 

Without exposing the service/container will be available to other servers of the same stack without being exposed. This is possible if you use their Weave IP addresses. 

Now if you need to expose your service. This is how it should be set:

1.   Under **Container Port** you need to specify the port that your container is listening on (like 3000 for rails apps)

You can define your exposed service ports on **Public Internet Port** box like bellow:

2.

*   If your service is a web service (HTTP) and you want it to be available outside of your stack you need to set it like this:

http:80,https:443

*
If you don't have HTTPS

http:80

*
For non-standard ports:

http:8080,https:8443

*
For other protocols (TCP and UDP):

tcp:5785,udp:478

This means that this container will be exposed on port 5785 for TCP connections and 478 for UDP connections
