<!-- post: -->


## About configuring your DNS

Cloud 66 provides [DNS hostnames](/network/server-ip-addresses-and-hostnames) for each server you deploy with us. This allows us to assign a new IP address to your application on your behalf if need be, while still maintaining the same hostname.

You will need to manage the DNS records of your domain name to ensure that it's pointing to Cloud 66. For maximum reliability, you should point it at a [failover group address](/network/failover-groups), which allows you to switch traffic between stacks quickly and easily.

Where possible, you should avoid using a DNS A-record (which points directly at an IP address). Instead, you should use CNAME records to point your domain at a hostname (either your server hostname or a failover group address). However, this may not be possible with your DNS provider - while CNAME records do not require hard-coded IP addresses, they are not available to root domains (eg. example.com). In other words, you would not be able to set a CNAME record pointing example.com to a Cloud 66 hostname.

To use wildcard subdomains with Cloud 66 hostnames, simply create a CNAME record pointing *.
.com to your Cloud 66 hostname. 

