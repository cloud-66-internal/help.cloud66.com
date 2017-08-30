<!-- usedin: [ _includes/_inlines/Tutorials/Rails/1900-01-20-passenger-5/1900-01-20-passenger-5_cloud-66-supports-deployments-with-t-v1.md] -->

```

{ % if passenger_supports_cgi_param == true %}
passenger_set_cgi_param     HTTP_X_FORWARDED_PROTO $scheme;"
{ % endif %}

```
