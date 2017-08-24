
```
{% raw %}{% if allow_ssl == true %}

# main domain
server {
listen 443;
ssl on;
ssl_certificate_key /etc/ssl/localcerts/certificate_name_1.key;
ssl_certificate /etc/ssl/localcerts/certificate_name_1.crt;
server_name server_name_1.com;
client_max_body_size 50m;
...
}


# secondary domain
server {
listen 443;
ssl on;
ssl_certificate_key /etc/ssl/localcerts/certificate_name_2.key;
ssl_certificate /etc/ssl/localcerts/certificate_name_2.crt;
server_name server_name_2.com;
client_max_body_size 50m;
...
}{% endraw %}
```
