---
menuheaders: [ "Infrastructure security", "Credit Card Information", "Customer protection", "Reporting security issues" ]
layout: post
template: one-col
title: Security summary
categories: Introduction
lead: ""
legacy: false

permalink: /:collection/:path
---








## Infrastructure security
Our servers are protected with firewalls and intrusion protection systems to protect from malicious traffic. We have lock-out mechanisms in place to prevent automated attacks, as well as monitoring for any malicious activity, and logging.






## Credit Card Information

We do not store any payment information like credit card details on our servers. All credit card information is handled by a third party ([Stripe](http://stripe.com/)).






## Customer protection

All customer sensitive data including API keys, SSH keys and passwords are encrypted with a multi-network setup for the decryption mechanism.

We take a wide range of other measures to improve user's [stack security]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/network-configuration.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/network-configuration.html{% endif %}) and help them improve their security by [upgrading their stacks](/managing-your-stack/applying-upgrades). Cloud 66 connects to user's servers only from `54.84.166.97` address and all provisioned servers are configured to only allow connections from this IP.

Additionally, customer source code is only kept for a limited period of time.





## Reporting security issues

We take customer security very seriously. Please [contact us](mailto:hello@cloud66.com) if you would like to talk to us about security.

