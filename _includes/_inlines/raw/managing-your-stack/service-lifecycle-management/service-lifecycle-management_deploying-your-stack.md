---
post: 
---

## Deploying your stack

The above can be summarized as the life-cycle management of your containers, which occurs with each new deployment of your application. For example, if you have a simple stack running `api` and `web` services, this is what happens when you redeploy your stack (as pertains to the life-cycle management of your containers):

1. Your latest code is pulled from Git and new images are built (on BuildGrid).
2. These images are rolled out to your Docker cluster.
3. Containers are initialized from these images, with all relevant environment variables and internal networking made available to them.
4. If and when your health checks are successful, your old containers are gracefully drained and traffic is switched to the new containers (on the specified port(s)).

