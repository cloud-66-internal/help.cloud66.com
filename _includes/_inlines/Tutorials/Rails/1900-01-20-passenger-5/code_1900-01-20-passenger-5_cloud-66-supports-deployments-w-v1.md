

```

{ % if passenger_supports_cgi_param == true %}
passenger_set_cgi_param     HTTP_X_FORWARDED_PROTO $scheme;"
{ % endif %}

```
