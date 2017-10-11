<!-- usedin: [ _legacy_docker/getting-started/stack-definition-v1.md, _maestro/getting-started/stack-definition-v1.md, _node/getting-started/stack-definition-v1.md, _rails/getting-started/stack-definition-v1.md] -->


### Load balancer (optional)

A load balancer is used to distribute traffic across your web servers, and offers benefits such as maximizing throughoutput, minimizing response times and avoiding overload on any single server. Ultimately, load balancing increases the reliability of your stack.

The type of {% if include.product == "rails" %} [load balancer deployed in your stack](https://help.cloud66.works/{{ include.product }}/addins/load-balancer.html){% else %}[load balancer deployed in your stack](https://help.cloud66.works/{{ include.product }}/addins/load-balancing.html){%endif%} is dependent on your cloud provider.

