## Installing Let's Encrypt

A Let's Encrypt Python script called _acme_tiny.py_  puts a file with random name under `/etc/cloud66/webroot/` on one of your web servers. Then tries to connect to your server and download that file via HTTP. It needs 
<span style="background-color: #FFFF00">a non-secure HTTP endpoint</span> (/.well-known/acme_challenge/*) to invoke and reissue certificates.


#### Note
<div class="notice notice-warning"><p>Let's encrypt needs to be updated every 3 months, so you'd need to keep the settings needed for issueing.</p></div>


## Troubleshooting

If, while installing, you see an error simmilar to this:

```
Wrote file to /etc/cloud66/webroot/FILENAME, but couldn't download http://DNS_NAME/.well-known/acme-challenge/FILENAME 
```

You need to go through the following steps:

1.  Delete the SSL certificate (vital)
2.  If your infrastructure uses [Cloudflare](https://www.cloudflare.com) and you have a global HTTPS redirect you need a [pagerule](https://support.cloudflare.com/hc/en-us/articles/200168306-Is-there-a-tutorial-for-Page-Rules-) to allow traffic from Let's Encrypt through HTTP, which requires a non-secure HTTP endpoint (/.well-known/acme_challenge/*) to invoke and reissue certificates.
3.  There could be some parts missing in your Nginx config, probably due to customization or config file not being up to date. The following parts take care of redirections - like HTTP to HTTPS redirection or adding/removing www to the link. Ensure these sections of your own Nginx config match up with the examples below.
    
{% raw %}
```
http {
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
    }
```
{% endraw %}
    
