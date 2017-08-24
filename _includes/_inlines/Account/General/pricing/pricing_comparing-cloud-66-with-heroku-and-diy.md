
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

