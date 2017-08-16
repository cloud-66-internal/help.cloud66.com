<!-- post: -->


### Important

This method will not work if you are serving content with SSL, and only works for HTTP traffic (eg. not TCP/UDP).




This method creates a 301 permanent redirect to a specified subdomain for all root domain traffic.

1. Create a DNS forward of example.com to www.example.com.
2. Create a CNAME record with value www to the Cloud 66 hostname.
