

## What is a stack?

A web application stack is a set of hardware and software components needed for your application to run. Each level of the stack represents an abstraction layer that provides a high-level overview of your setup.

For example, your stack might be comprised of a load balancer, a number of web servers, process and database servers, your operating system and finally the hardware provided by your cloud vendor:

![image](http://assets.cloud66.com/help/images/rails_stack_workflow.png)

* * *


## Stack components

You have a great degree of freedom when choosing the different components of your stack.


### Load balancer (optional)

A load balancer is used to distribute traffic across your web servers, and offers benefits such as maximizing throughoutput, minimizing response times and avoiding overload on any single server. Ultimately, load balancing increases the reliability of your stack.

The type of  [load balancer deployed in your stack]({% if include.product == 'skycap' %}/maestro/tutorials/load-balancing.html{%else%}/{{page.collection}}/tutorials/load-balancing.html{%endif%})is dependent on your cloud provider.


### Web servers

By default, your applications are served with Nginx{% if include.product == 'rails' %}, and you are also free to customize this selection for Rack-based stacks{%endif%}. You can [scale your web server]({% if include.product == "skycap" %}/maestro/how-to-guides/databases/mongo-replica-sets.html{% else %}/{{page.collection}}/how-to-guides/databases/mongo-replica-sets.html{% endif %}) with the click of a button.


### Background workers (optional)

To relieve pressure from your application, we recommend that you use background workers to run memory-intensive processes. Cloud 66 makes it easy for you to control and monitor these processes, as well as [scale them]({% if include.product == "skycap" %}/maestro/how-to-guides/databases/mongo-replica-sets.html{% else %}/{{page.collection}}/how-to-guides/databases/mongo-replica-sets.html{% endif %})) at the click of a button.


### Database servers (optional)

You can choose between any of four supported databases:

- MySQL
- PostgreSQL
- MongoDB
- Redis

Cloud 66 makes it easy for you to [backup your database]({% if include.product == "skycap" %}/skycap/tutorials/database-backup.html{% else %}/{{page.collection}}/tutorials/database-backup.html{% endif %}), [verify the backup](/rails/databases/backup-verifiers.html) and [replicate your databases](/rails/tutorials/database-replication.html).


### Operating system

Your servers will be deployed with **Ubuntu 16.04 LTS**. On the operating system level, you can [monitor disk, CPU and memory](/{{page.collection}}/resources/technical-specifications.html) from the dashboard.


### Cloud vendor

You can either [deploy to your cloud](/{{page.collection}}/resources/technical-specifications.html#supported-cloud-providers) or [deploy to your own server](/{{page.collection}}/tutorials/registered-servers.html).

* * *


## Stack environments

To reflect the different stages of your software, you can deploy your stacks in different environments:

* **Development**: Use this when you're developing your application
* **Production**: For live applications
* **QA**: Used for quality assurance
* **Staging**: Mirrors the production environment but is only used for testing

In addition to these environments, you can define your own environments from the _Account_ page, in the _Setting_ -> _Custom environment_ menu. Once the new environment is added, you will be able to see it in the list of supported environments when creating a new stack. Custom environments don't influence anything on the stack. They will result in the relevant environment variables like `RAILS_ENV` and `RACK_ENV` (for Rack-based stacks) having the correct values. The usage of those custom values is up to your application.

Depending on your configuration, your application will act differently in each environment. For example, a Ruby on Rails application
has a directory in `config/environments` that contains settings for each environment.

There is no difference between these environments when it comes to features and supported tools apart from what you define in your code.

* * *


## What is StackScore?

StackScore&trade; is a score that provides an indication of how reliable, resilient and performant your application is when deployed on your servers. It consists of five key metrics that are graded from **A** to **F**, and the overall StackScore is the lowest of the scores across these five metrics.

- **Code:** Ensures your code does not have security issues by checking for known vulnerabilities.
- **Backups and data integrity:** This tracks whether or not you are backing up your databases (with managed and/or unmanaged backups), and whether or not you verify your backups.
- **Connectivity:** Checks whether or not you are sharing your frontend and backend on the same server. This is affected by how much memory you have on your servers, among other factors.
- **Performance:** Checks if you have a load balancer, as well as different server configuration metrics.
- **Security:** Tracks your firewall settings for potential security issues.



### Suggestion

Always try to keep your stacks at an **A** StackScore&trade; level to ensure stack health.


Cloud 66 constantly seeks to update and improve the StackScore algorithm to consider new data points as well as external conditions, which means that your StackScore will change over time.

* * *


## Build a stack

To build your first stack, see our [Introduction to Cloud 66](/{{page.collection}}/concepts/stack-definition.html). If you have existing stack(s), simply click _New Docker Stack_ from your Cloud 66 Dashboard.

* * *


## Edit stack properties

You can access your _Stack information_ page from the right sidebar of your stack page. This page shows you general information about your stack, the different servers it consists of and information about your application.

It also allows you to edit your stack name, and you can edit your Docker service configuration under the _Service configurations_ menu on the stack details page. For Rack-based stacks, you can edit your Git repository and branch by clicking the _Edit_ button next to each field on the _Stack information_ page. Editing your stack name has an important implication.

### Important

<div class="notice">

    <p>Internal c66 domain names (*.c66.me) are based on your stack name, and will change if you rename the stack.</p>

    <p>Unless you use Failover groups, you will have to update your DNS to point at the new address to keep your application accessible. By using Failover groups, this will be updated automatically for you.</p>

</div>

## Clone a stack

There are various reasons for cloning an existing stack - for example, you may want to deploy a production environment of an existing development stack, or migrate across regions or data centers.

To clone a stack, visit your stack page and click _Clone this stack_ from the right sidebar. This will allow you to choose a new stack name and environment. Cloning your stack will preserve any environment variables from the existing stack, and also allows you to define where to deploy to along with other settings.

* * *


## Delete a stack



### Important

Deleting a stack will not delete your cloud servers - remember to delete the servers from your cloud account.


To delete a stack, visit your stack page and click _Delete Stack_ from the right sidebar. You will have to confirm this action.

