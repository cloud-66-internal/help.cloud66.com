<!-- layout:code post: 1900-01-20-passenger-5_cloud-66-supports-deployments-with-t -->

```

{ % if passenger_supports_cgi_param == true %}
passenger_set_cgi_param     HTTP_X_FORWARDED_PROTO $scheme;"
{ % endif %}

```
