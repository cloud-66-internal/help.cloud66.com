<!--  usedin: [ _legacy_docker/AddOns/haproxy-v1.md, _maestro/AddOns/haproxy-v1.md, _node/addons/haproxy-v1.md, _rails/AddOns/haproxy-v1.md] -->


## Specify an HAProxy test interval

You can also specify your own test interval if you like - this is done in the _server_ section of your HAProxy configruation. This section is on line 53 of the default configuration.

To change the test interval to every 30 seconds (instead of the default 2 seconds), the template should look like this:



{%include _inlines/AddOns/common/haproxy/code_haproxy_specify-an-haproxy-test-interval-verweb-v1.md  product = include.product %}




Please note the `inter 3000` at the end - this defines the test interval as 3000 milliseconds. Once this template is applied, it looks like this:



{%include _inlines/AddOns/common/haproxy/code_haproxy_specify-an-haproxy-test-interval-verweb-2-v1.md  product = include.product %}




