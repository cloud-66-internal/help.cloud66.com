

## ElasticDNS

ElasticDNS sits on top of ContainerNet to provide simple DNS-based service discovery without having to change your code. This service consists of two parts: a small client and a central service. The client has a DNS server and local cache, and runs in a container on your server(s). It serves DNS queries ending with `.cloud66.local` by making a query to the central service and caching the results for their [TTL duration](http://en.wikipedia.org/wiki/Time_to_live). This means that you can call `api.cloud66.local` to contact a container running your API service for example. ElasticDNS knows your infrastructure and your datasources are also added to the service discovery. For example your MySQL database can be discovered using the DNS name `mysql.cloud66.local`, MongoDB can be found using `mongodb.cloud66.local`.

As ElasticDNS is centrally backed, it also knows about the caller, which is important when you have multiple versions of your application running at any given moment (during deployment for example). Consider the following scenario: you have an app consisting of 2 services: a `web` service (accessible externally) and an `api` (used by the web service internally) service. Every time you deploy your application a new version of both services is rolled out to your servers.

When a deployment happens the load balancer for the externally available services (like `web` in this case) is instructed to switch new traffic to the new containers while still serving the existing traffic with the old containers. So if a visitor to your site is in the middle of a large file upload, it is not going to be interrupted. At this point you have 2 versions of your web and 2 versions of your api service up and running.

ElasticDNS is clever enough to know which version of the app is running in a container. So if an **old** web container asks for `api.cloud66.local` it will get the address to an **old** api container, but if a **new** web container asks for the same thing, it will get the address to a **new** api container.

