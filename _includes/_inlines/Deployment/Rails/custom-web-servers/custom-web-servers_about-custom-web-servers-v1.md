<!-- usedin: [ _legacy_docker/AddIns/custom-web-servers-v1.md, _maestro/AddIns/custom-web-servers-v1.md, _node/addins/custom-web-servers-v1.md, _rails/AddIns/custom-web-servers-v1.md] -->


## About custom web servers

By default, stacks deployed by Cloud 66 run on [Phusion Passenger](https://www.phusionpassenger.com/) behind [Nginx](http://wiki.nginx.org/Main). You can also choose to use one of several servers:

- [Passenger Enterprise](https://help.cloud66.works/{{ include.product }}/deployment/rack-webservers/passenger-enterprise.html)
- [Puma](https://help.cloud66.works/{{ include.product }}/deployment/rack-webservers/puma-rack-server.html)
- [Unicorn](https://help.cloud66.works/{{ include.product }}/deployment/rack-webservers/unicorn-rack-server.html)
- [Thin](https://help.cloud66.works/{{ include.product }}/deployment/rack-webservers/thin-rack-server.html)
