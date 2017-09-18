<!-- usedin: [ _includes/_inlines/AddOns/common/Lets-encrypt/lets-encrypt_troubleshoot-v1.md] -->

```
{% raw %}http {
    .
    .
    .
    server {
        .
        .
        .
        ## This block gives HTTP access to LetsEncrypts to validate the certificate issuance

        location /.well-known/acme-challenge/ {
            {% if letsencrypt_primary_address == empty %}
            # serve letsencrypt requests from here
            alias /etc/cloud66/webroot/;
            try_files $uri =404;
            {% else %}
            # serve letsencrypt request from another host
            proxy_pass  http://{{ letsencrypt_primary_address }};
            {% endif %}
        }

        ## From here is for taking care of redirections settings for your stack
        
        {% if red_http_to_https == true %}
        {% if has_load_balancer %}
        set $http_rewrite 0;
        if ($http_x_forwarded_proto = "http") {
            set $http_rewrite 1;
        }
        if ($http_x_forwarded_proto = "") {
            set $http_rewrite 1;
        }
        if ($request_uri ~ ^/.well-known/acme-challenge/.*$) {
            set $http_rewrite 0;
        }
        if ($http_rewrite = 1) {
            rewrite ^(.*) https://$host$1 permanent;
        }
        {% else %}
        if ($request_uri !~ ^/.well-known/acme-challenge/.*$) {
            rewrite ^(.*) https://$host$1 permanent;
        }
        {% endif %}
        {% endif %}

        {% if red_www == 0 %}
        server_name             _;
        {% endif %}
        {% if red_www == 2 %}
        set $www_rewrite 0;
        if ($http_host ~ ^(?!www\.)(.*)) {
            set $www_rewrite 1;
            set $www_host $1;
        }
        if ($request_uri ~ ^/.well-known/acme-challenge/.*$) {
            set $www_rewrite 0;
        }
        if ($www_rewrite = 1) {
            return 301 $scheme://www.$www_host$request_uri;
        }
        {% endif %}
        {% if red_www == 1 %}
        set $www_rewrite 0;
        if ($http_host ~ ^www\.(.*)$) {
            set $www_rewrite 1;
            set $www_host $1;
        }
        if ($request_uri ~ ^/.well-known/acme-challenge/.*$) {
            set $www_rewrite 0;
        }
        if ($www_rewrite = 1) {
            return 301 $scheme://$www_host$request_uri;
        }
        {% endif %}

        .
        .
        .
        }
    }{% endraw %}
```