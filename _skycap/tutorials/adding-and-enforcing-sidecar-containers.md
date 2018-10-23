---
layout: post
template: one-col
title: Adding and enforcing sidecar containers
categories: tutorials
order: 6
lead: "How to set up sidecar containers in Skycap"
legacy: false
tags: ["sidecar,containers"]
permalink: /:collection/:path
---

## Overview 

A “sidecar” is a shared or common service that is deployed alongside your application’s main containers in its own separate container (i.e. in the same [Pod](/skycap/the-basics/concepts-and-terminology.html#pods-nodes-and-clusters)).

Sidecars are useful because they allow a common service (such as authentication) to be shared between application components or Pods without the need to bundle that code into each part of your application. Sidecars are a great example of [micro-service architecture](/skycap/the-basics/concepts-and-terminology.html#microservices).

#### Note
<div class="notice"><p>Not all containers that share a pods are sidecars. Sidecars are specifically shared services on which the main application depends (and vice versa)</p></div>

This guide walks you through adding a sidecar to an existing application, and then adding a policy that ensures all containers are deployed with that sidecar.

## What you’ll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one [sign up for a Cloud 66 account](https://app.cloud66.com/users/sign_up). There's a free community plan and you'll get full unlimited access to all products free for 14 days.

* **An existing application set up in Skycap** &mdash; You can learn how to do that with our [Getting started with Skycap](/skycap/quickstarts/getting_started.html) guide.

* **An existing Formation defined in Skycap** &mdash; You can learn how to do that with our [Getting started with Skycap Formations](/skycap/quickstarts/using_formations.html) guide.

<div class="notice"><p>In this example we’re using the same <a href="https://github.com/cloud66-samples/helloworld.git">simple "hello world" project</a> that we used in our Getting Started guides.</p></div>

## Adding a sidecar 

Let’s imagine that you’ve decided that your *Hello World* application needs some simple authentication to restrict access from unauthorised users. To do achieve this you need to: 

1. Add an authentication service to your Hello World application (and Snapshot the code)
2. Add a new *partial* Stencil to the Formation to allow the new service to be pulled into the existing deployment Stencil as an *include*
3. Edit the Stencils for the main Hello World service to *include* the new Stencil and route traffic through your new authentication service
4. Render and deploy the updated application to your local cluster
5. Test the newly updated app

### Adding the authentication service

We are going to add [this simple authentication service](https://github.com/cloud66-samples/auther) to our Hello World application. 

To do this we follow the same steps as in our [Adding a new component (service) to your application](/skycap/tutorials/adding-a-new-service.html#adding-a-new-component-service-to-your-application) guide, but instead of adding Redis, we add [Auther](https://github.com/cloud66-samples/auther). 

#### Reminder
<div class="notice"><p>Remember to Snapshot the application once you have added the new service, otherwise it will not be available in Formations.</p></div>

### Creating an inline Stencil

Next we need to add a Stencil to our Formation to configure our Auther container. 

If this were a standalone service, we would simply add `deployment` and `service` YAML files as usual, but because this is a sidecar, we need its container to be deployed in the same Pod as our Hello World service. 

To do this we need to create a special kind of Stencil called an *inline*. This is essentially a small chunk of YAML code that can be pulled into other Stencils as a reusable building block. 

The code we’re going to use to deploy our Auther service is:

```
- name: web-auther
  image: cloud66/auther:latest
  command: 
  - "/go/src/auther/auther" 
  - "--port"
  - "5000" 
  - "--backend-port"
  - "5001"
  ports:
  - containerPort: 5000
```

<div class="notice"><p>You’ll notice that we’re using port 5000 here, which our Hello World app normally uses. This is intentional. Our sidecar will essentially sit between our existing service and we requests and act as a kind of simple proxy. We will then remap our Hello World service to connect via 5001 - the <em>backend port</em> of Auther.</p></div>

To create the inline Stencil we:

1. Navigate to the Hello World Formation detail page
2. Click on the **+** to add a new Stencil
3. Choose `blank.yml`
4. Change the **Filename** to ‘_auther.yml` (note, the underscore is important here)
5. Copy and paste in the code block above
6. Add a commit message and *Save changes*

### Including our inline Stencil

Now that we have our inline ready, we need to pull it into our `helloworld_deployment.yml` using a handy [Stencil placeholder](/skycap/references/stencil_placeholders.html) called `inline` and then change our port settings to accommodate the Auther sidecar. 

To include `_Auther.yml` in the existing deployment Stencil we:

1. Click on the edit icon next to  `helloworld_deployment.yml`
2. Scroll down to the `containers` section of our Stencil and find the end of that block of YAML (it should be around line 23 or 24 of the code). If you’ve followed our other tutorials, this should be directly after the `command` directive.
3. Hit “enter” to create a new line and then backspace twice. There should now be 8 spaces between the left-hand margin of the YAML and your cursor.
4. Type or paste the following code into the new line: ` ${inline("_auther.yml", 8)}` 
(be very careful not to disturb the 8 spaces in front of this line - it should line up perfectly with the dash at the start of the `containers` section).
5. Add a commit message and then save.

You may be wondering about steps 3 & 4 above. The reason we need to be careful with the number of spaces is because YAML files depend on spaces for their hierarchical structure. So one extra or missing space will make all all the difference. 

Before we make any more changes we need to test that our inline is coming through correctly. To do this, we Render the formation and then click “show all” on our `helloworld_deployment.yml`. We should be able to see the contents of our new inline merged seamlessly into the flow of our existing YAML file. 

### Reconfiguring our ports

Now that we have included our sidecar alongside our main app, we need to change our ports so that the sidecar can do its job of authenticating users who are trying to access Hello World. 

To do this:
1. Edit `helloworld_deployment.yml` again
2. Overwrite the existing `command:` with the following:
`command: ["/go/src/helloworld/helloworld", "--binding", "127.0.0.1:5001"]`
3. Change `ContainerPort` to `5001`
4. Add a commit message and then save.

These changes force the Hello World service to use port 5001 instead of its default port (5000). This allows Auther to act as a gatekeeper because it “takes over” the default port 5000 and only allows authenticated users access to Hello World.

### Rendering and deploying

You can now render the final version of the Formation. If you need a quick reminder on how to do this, follow our [Getting Started](/skycap/quickstarts/using_formations.html#rendering) guide.

Next, take your rendered configuration files and apply them to your cluster. We recommend using Cloud 66 Toolbelt, as we did in our [previous tutorials](/skycap/quickstarts/using_formations.html#rendering). 

### Testing your sidecar 

If you’ve successfully deployed your updated application, you will be able to see the sidecar in action by running the `minikube service helloworld -n hello-world` command. 

If everything has been configured correctly, your default web browser will open a blank webpage that will ask you for a username and password. The correct values are “user” and “password” respectively. 

Once you authenticate yourself, the *success* web page we used in our [previous guide](/skycap/quickstarts/using_formations.html#deploying-it-all-to-your-cluster) should appear.

## Enforcing a sidecar

One of the challenges of sidecars is that, because they are designed to exist as separate entities, they could easily be left out of a deployment, thus either breaking the application as a whole, or compromising a shared service like authentication or storage management. 

Cloud 66 addresses this problem using validation policies - rules that Stencils must adhere to before they will be rendered. 

Validation policies rely on [Copper](https://copper.sh/) - an open-source validation engine for Kubernetes configuration files. If you’d like a more general overview on using validation policies, check out our [dedicated tutorial](/skycap/tutorials/using-validation-policies.html) on the subject. 

In this example we will add two policies to our Hello World app:

1. A rule to check that the Auther container is included in the Formation
2. A rule to check that Auther is bound to the correct port (in this cas `5000`)

To add these policies, we follow the same steps as in our [tutorial](/skycap/tutorials/using-validation-policies.html), but we use `kind: Deployment` as the selector. 

We add the following rules:
```
rule CheckAutherSidecar ensure {
    fetch("$.spec.template.spec.containers..image").contains("cloud66/auther:latest") == true
}
rule CheckAutherPort ensure {
    fetch("$.spec.template.spec.containers[?(@.image == 'cloud66/auther:latest')].ports..containerPort").count == 1 and
    fetch("$.spec.template.spec.containers[?(@.image == 'cloud66/auther:latest')].ports..containerPort").first == 5000
}
```

(You can add these rules as a single block of code)

Once these rules are in place, test them by rendering your Formation. If everything is set up correctly the Formation will render without complaint. If not, it will warn you about any errors.

## What’s next?

* Learn more about using [validation policies](/skycap/tutorials/using-validation-policies.html) to ensure your Stencils adhere to your standards and conventions. 
* Learn how to add [custom environment variables](/skycap/tutorials/setting-environment-variables.html) to your application.
* Learn how to set up [access control and permissions](/skycap/tutorials/setting-up-access-control.html) on your Formations and Stencils
