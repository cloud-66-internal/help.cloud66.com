---
layout: post
title: Getting started with Skycap Formations
order: 2
categories: quickstarts
legacy: false
tags: ["getting started", "formations"]
lead: Using Skycap to deploy your applications to any Kubernetes cluster
permalink: /:collection/:path
---

Formations are used for create, manage and deploy Kubernetes configuration files to any Kubernetes cluster.

## What you’ll need

Before you start, please check you have the following:

* **An application set up with Skycap** &mdash; You can find out about [setting up an application](/skycap/quickstarts/getting_started.html) with Skycap.

>
In this guide we are using a [simple project](https://github.com/cloud66-samples/helloworld) that we've supplied on Github. It's important to use this project in your Skycap set up so that the steps below correspond to the application.

* **A Working Kubernetes Cluster** &mdash; You can use [Cloud 66 Maestro](/maestro/quickstarts/getting_started.html) to create a cluster or use a cloud provider service like [Google GKE](https://cloud.google.com/kubernetes-engine), [AWS Fargate](https://aws.amazon.com/fargate) or [Microsoft Azure AKS](https://azure.microsoft.com/en-us/services/container-service), or [set it up yourself](https://kubernetes.io/docs/getting-started-guides/scratch).
For this example we are going to use [Minikube](https://github.com/kubernetes/minikube)
        
* **A `kubectl` client** on your development machine or a server that is configured to communicate with your Kubernetes cluster.

* **Basic familiarity** with Kuberentes configuration files.
    
## The basics

Before getting started, let's get ourselves familiar with 3 main concepts of the Skycap CDP: **Formations**, **Stencils** and **Snapshots**:

### Formation

Formation is a "deployment destination" for your application. This could be a dedicated Kubernetes cluster or a shared one. A Formation allows you to manage the collection of Kubernetes configuration templates or **Stencils** that define an application and its environment.

> You can find a more detailed discussion on Formations [here](/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-formation).

### Stencils

A very good practice when configuring Kubernetes clusters is to put everything in configuration files rather than applying them directly via the command line. 

Stencils are essentially dynamic Kubernetes configuration templates. They can contain one or many Kubernetes configuration items like `Services`, `Deployments`, `ConfigMaps` or others.

Stencils can contain dynamic **placeholders** that are populated with the right values before they are applied to a Kubernetes cluster. This is called **Rendering** and it allows you to more easily re-use common templates.

> You can find a more detailed discussion on Stencils [here](/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-stencil).

### Snapshots

A Snapshot is the state of your application at a point in time. It includes all your application's images and their unique tags as well as its environment variables and configuration items as defined (by you) in Skycap. 

All of these components (including all configurations) are then stored in a private repository on your Cloud 66 account so that you can roll back to a particular application state easily at any time.

> You can find a more detailed discussion on Snapshots [here](/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-snapshot).


## Getting Started

### Create your first Formation

At the final step of [setting up an application](/skycap/quickstarts/getting_started.html) on Skycap, click the *Setup Deployment* button and select *Deploy with Formations*.

<img src="/assets/skycap/formation_step_1.gif"/>

Because your account doesn't have base template repository yet, you will need be prompted to add one now. We have supplied a set of [sample templates](https://github.com/cloud66/skycap-stencils/) on GitHub that you can use in this tutorial. 

<img alt="Template repo setup process" src="/assets/skycap/template_repo_ani.gif"/>

#### Private Beta Notice

>If you can't see the selection form, you can contact Cloud 66 Support as Skycap Formation is currently a private beta feature. We will enable this feature for you.

Once your the template repo has been added, click on the *New Formation* button. Enter a name for your Formation and add a few tags to it (these help to identify components later on). If you're using our sample project, calling your Formation "Hello World" is a good idea. 

Your Formation will automatically use the repo you connected in the previous step. (We will get back to this later.)

<img src="/assets/skycap/formation_step_2_UPDATE.gif"/>

### Adding your first Stencil

> This section assumes you are familiar with Kubernetes configuration files at a basic level.

Now that you have a Formation defined you can begin populating it with **Stencils**. 

To start, click on the *name* of the Formation you just created. 

A `namespace` is usually the first thing configured for a new Formation. To create yours, click on the **+** button to add your first Stencil.

<img src="/assets/skycap/formation_step_3_UPDATE.gif"/>

This creates a Stencil for a namespace configuration file for you. Let's look at it in a bit more detail:


<pre class="prettyprint">
# this sets up the cluster with namepsace etc
# should be the first yaml to run
apiVersion: v1
kind: Namespace
metadata:
  name: ${formation}
  annotations:
    cloud66.com/formation-uuid: ${formation["uuid"]}
    cloud66.com/stencil-uuid: ${stencil["uuid"]}
---
apiVersion: v1
kind: Secret
metadata:
  namespace: ${formation}
  name: cloud66-registry-pull-secret
  annotations:
    cloud66.com/formation-uuid: ${formation["uuid"]}
    cloud66.com/stencil-uuid: ${stencil["uuid"]}
data:
  .dockerconfigjson: ${registry_credentials()}
type: kubernetes.io/dockerconfigjson
</pre>


As you can see, the default `setup.yml` Stencil (from our sample repository) has two sections: the first sets up the namespace, and the second adds the credentials for a Docker repository to the namespace.

You've probably already noticed the dynamic stencil placeholders like `${formation}`. These offer a simple way to replace some values in your configuration files at the time it "renders". 

For example,`${formation}` gets replaced with a Kubernetes friendly version of your Formation's name. So if your Formation is called "My Sample Formation", the value of `${formation}` will be `my-sample-formation` when it renders (we will get to how to render the Stencils later).

Looking at the `setup.yml` Stencil again, you see that the `${function(arguments)}` syntax is used in several places. For example `${formation("uuid")}` will be replaced by the unique identifier of the Formation that contains this Stencil and `${registry_credentials()}` will be replaced with docker registry credentials.

> You can see a full list of all Stencil functions [here](/skycap/references/stencil_placeholders.html).

Now that we are a bit more familiar with the Stencils, let's save our `setup.yml` without making any changes. To do this, scroll down and add a "commit message". For now just use `initial`. Then click *Save changes*. (Commit messages are required every time you save any Stencil.)

### Adding a configuration file for your service

Let's assume your application has one service, called Hello World. Hello World is a web service which serves traffic on port 8080. Here we are going to generate the Kubernetes configuration files we need to deploy and run Hello World as a service on our cluster.

> Reminder: The source code for this example can be found on [Github](https://github.com/cloud66-samples/helloworld). 

This example uses Skycap's integrated [BuildGrid](/legacy_docker/references/build-grid.html) engine to build the container image from the source and store it on your app's own private Docker registry within Cloud 66.

A service running on Kubernetes consists of 2 parts: a `deployment` and a `service`. Our sample base template has a Stencil for each one. 

Click on the **+** button and choose **deployment.yml**. In the generated Stencil, you can see the are some placeholders called `${require(...)}`. You need to replace these with values that are specific to your application. Let's do that for our Hello World application now.

Set `containerPort` to `8080` (this is the port through which the Hello World container will serve traffic) and set `command` to `["/go/src/helloworld/helloworld"]` (Hellow World is written in Go and this command initialises that code).

<img src="/assets/skycap/formation_step_4_UPDATE.gif"/>

### Adding a Service

By now you should have a `setup.yml` and a `helloworld_deployment.yml` in your Formation Stencils. The last file is a `service.yml` which tells Kubernetes to redirect web traffic from the cluster to the Hello World pod we just defined in our `helloworld_deploy.yml`.

To add the service Stencil, first make sure you're on the Formations page for your application (click on *Formations* in the right-hand panel if you're not). 

Now click on the **+** button and choose the `service.yml` template. You will need to make a few changes to the template to make it work for you application. In our Hello World example, this is limited to the port numbers.

Make the following changes: change `port` to `8080` and `targetPort` to `5000`. This tells Kubernetes that our service container is serving on port `8080` and that we are going to expose this to the outside using port `5000`

<img src="/assets/skycap/formation_step_5_UPDATE.gif"/>

## Deploying it all to your cluster

We now have all the configuration files we need to deploy our sample application to our Kubernetes cluster. All that's left is to render the files and apply them to Kubernetes.

### Rendering

Rendering of Stencils happens automatically when you download them from Skycap. 

An easy way to start Rendering is to click on the *Render Formation* button below the stencils listed in your formation. 

>You can also find rendered formation files under *Snapshots*. Each time you build an application, the Formation files are Rendered as part of the process.

Now you should be able to see all your Stencils rendered and fully usable for a Kubernetes cluster.

<img src="/assets/skycap/formation_step_6_UPDATE.gif"/>

One way to apply your rendered Stencils to the cluster is by downloading them as a single file, untarring them and using `kubectl apply -f FILE` from your local machine. 

A simpler way is to use [Cloud 66 Toolbelt](/skycap/quickstarts/using-cloud66-toolbelt.html) (cx). Simply click on the cx command suggested on the top of the page and use it to pipe the Stencils directly to your cluster by appending `| kubectl apply -f -` to the end of the command.

The end result should look something like this:
<pre>cx snapshots render --stack 'Hello World' --snapshot 'sn-xizeh-zamic-zycic-vakoh-sufes-gyrah-vipoz-kovuf-boxex' --formation 'fm-220346840f481e7c5576ebb80384daee' | kubectl apply -f -</pre> 
(Don't use this exact example command - the IDs of your own app will be completely different)

The `cx snapshots render` command pulls the rendered versions of your Stencils from your Formation and concatenates them so they can be piped into your cluster using `kubectl`. 

>Note: if Minikube isn't running or has other issues, the cx command will fail. Make sure you have set it up properly using [this guide](https://kubernetes.io/docs/setup/minikube/).

Next, run `kubectl get ns` to check that your new namespace is up and running. You can also use the `get` command to check that the pod and service are up and running.

Then, invoke the service using `minikube service` command, and a browser window should open confirming that the app is up and running.

<img src="/assets/skycap/formation_step_7_UPDATE.gif"/>

Congratulations! You just deployed your first Formation to a Kubernetes cluster.


## What's next?

Formations are an extremely powerful tool to manage the flow of configuration files into Kubernetes. Here are some of their features:
	
* [Formations](/skycap/concepts/what-are-formations.html) as an infrastucture time machine
* Fine grained access control and permissions for each Formation and every Stencil for your team members
* Ability to setup private [Base Templates](/skycap/concepts/what-are-formations) for your team
* Powerful and very simple [Stencil placeholders syntax](/skycap/references/stencil_placeholders.html)
* Bulk import of your environment variables and secrets into Stencils
	

