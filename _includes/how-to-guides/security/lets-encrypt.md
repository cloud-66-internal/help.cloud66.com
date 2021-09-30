## Installing Let's Encrypt

A Let's Encrypt Python script called _acme_tiny.py_  puts a file with random name under `/etc/cloud66/webroot/` on one of your web servers. Then tries to connect to your server and download that file via HTTP. It needs <span style="background-color: #FFFF00">a non-secure HTTP endpoint</span> (<your-application-domain>/.well-known/acme_challenge/*) to invoke and reissue certificates.


#### Note
<div class="notice notice-warning"><p>Let's Encrypt needs to be updated every 3 months, so you should keep this configuration in place to allow for automatic renewal.</p></div>

## Configuring Let's Encrypt with Cloudflare

If you route your application traffic through Cloudflare, you will need to add a [Page Rule](https://support.cloudflare.com/hc/en-us/articles/218411427-Understanding-and-Configuring-Cloudflare-Page-Rules-Page-Rules-Tutorial-) to your Cloudflare configuration in order for the challenge process (see above) to work.

The URL for the page rule should be the challenge URL for your server: http://YOURSITE.com/.well-known/acme-challenge/

To set up your application:

1. Ensure the challenge file is in the folder
2. Log into your Cloudflare dashboard and create a new Page Rule
3. Set the challenge URL as an exact match for the Page
4. Set *SSL* to "off"
5. Set *Automatic HTTPS Rewrites* to "off"
6. Save and deploy the rule (after testing)

The challenge should now succeed. If it does not, please read our troubleshooting guide below.


## Troubleshooting

If, while installing, you see an error similar to this:

```shell
Wrote file to /etc/cloud66/webroot/FILENAME, but couldn't download http://DNS_NAME/.well-known/acme-challenge/FILENAME 
```
You need to go through the following steps:

1. Delete the SSL certificate (vital)
2. If you use Cloudflare, ensure you have have Page Rule in place ([see above](#configuring-lets-encrypt-with-cloudflare))
3. There could be some sections missing (or misconfigured) in your Nginx config, probably due to customization or config file not being up to date. The following blocks take care of redirections. Ensure these sections of your own Nginx config match up with the examples below.
    
{% raw %}
```shell
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

        ## From here is for taking care of redirections settings for your application
        
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
    
