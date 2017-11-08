---
menuheaders: [ "Introduction", "Comparing Cloud 66 with Heroku and DIY", "*Drops to $56/month for the second stack as only the first server of the account is $19.", "Assumptions" ]
layout: post
template: one-col
title: Comparing Pricing
categories: Account
lead: ""
legacy: false

permalink: /:collection/:path
---



## Introduction

Our pricing is simple - you only pay for what you use, and there are no setup fees or fixed term contracts.

The billing cycle for your account is every 30 days, and your account charges are calculated on an hourly basis.
Your account will be charged for the accumulated amount you've accrued during the last 30 days at the end of each cycle.

The first server in your account is charged at $19 per month, with additional servers up to 50 costing $12 per month.

To learn more about feature-based pricing, please see our feature pages:

*   [Database backups](https://help.cloud66.works/{{ include.product }}/addins/database-backups.html)
*   [Backup verifiers](https://help.cloud66.works/rails/databases/backup-verifiers.html)
*   [Teams](https://help.cloud66.works/general/ccount-management/team-accounts#pricing)
*   [Support](https://help.cloud66.works/general/account/support.html)

## Comparing Cloud 66 with Heroku and DIY

For this example, we will use a simple Rails application with common requirements - scalable, backed by a single database and protected by SSL.

* Framework: Rails 3
* Database: PostgreSQL
* Environment: Production
* Other requirements: SSL, Memcache
|               | Cloud 66 & cloud vendor    | Heroku  |  DIY  |
| ------------- |:--------------------------:| :------:|------:|
| App server x 1	     |  $24 ($19 + $5)	 |   $36   |  $10  |
| Load balancer x 1	     | $17 ($12 + $5)    |     -   |   $5  |
| Database server x 1	 | $22 ($12 + $10)   |   $50   |  $10  |
| SSL certificate	 |  -  |   $20 |  -  |
| Memcache		 |  -  |   $15 |  -  |
| Maintenance and updates	 |  -  |   - |  $60  |
| Monitoring service	 |  -  |   - |  $45  |
| Setup fee	 |  -  |   - |  $300  |
| **Total cost**	 |  __$63*__  |   __$121__ |  __$430__  |

##### *Drops to $56/month for the second stack as only the first server of the account is $19.

### Assumptions

*   Cloud 66 is used together with [DigitalOcean](http://digitalocean.com).
*   The DIY solution is based on a developer salary of $60,000 per year.
*   Business overhead (tax, insurance, benefits etc.) of 50% per year
*   Setup fee is based on 5 hours of DevOp work ($60/h to business)
*   This DevOp uses Chef, Puppet, Capistrano or similar solutions
*   Maintenance fee includes 1 hour per stack per month
*   [Server Density](http://www.serverdensity.com/) is used as a monitoring prodiver

Feel free to contact us on [hello@cloud66.com](mailto:hello@cloud66.com) if you'd like us to provide you with a price estimate for your setup.

