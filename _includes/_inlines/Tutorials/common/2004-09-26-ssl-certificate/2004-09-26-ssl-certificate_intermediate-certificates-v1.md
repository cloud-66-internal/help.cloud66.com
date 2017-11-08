


## Intermediate certificates

Some SSL certificate authorities (CA), like RapidSSL, issue certificates that are not fully compatible with all devices (specifically Android devices). This is because they are not the ultimate CAs and usually act as a reseller for other authorities (like VeriSign).

Cloud 66 supports these CAs fully by allowing you to add the intermediate certificate separately into the [SSL certificate add-in](https://help.cloud66.works/{{ include.product }}/addins/ssl/) form.

