<!-- usedin: [ _includes/_inlines/AddOns/common/haproxy/haproxy_specify-an-haproxy-test-interval.md] -->

```
server web&#123;&#123; forloop.index &#125;&#125; &#123;&#123; server.ext_ipv4 &#125;&#125;:80 cookie "LSW_WEB&#123;&#123; forloop.index &#125;&#125;" check inter 30000
```
