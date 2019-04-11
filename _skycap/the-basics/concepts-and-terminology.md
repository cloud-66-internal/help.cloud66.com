---
layout: post
template: one-col
title: Concepts and terminology
categories: the-basics
lead: "Understand the basic concepts and terms we use in this documentation"
order: 1
legacy: false
tags: ["the basics","concepts", "terminology","explanation"]
permalink: /:collection/:path:output_ext
---

## Containers and containerization

Containers, at their most basic, are pieces of software (or “code”) bundled together with the other components they require to function (such as system libraries and configuration files). This bundle (or “container”) is treated as a standalone executable file.

There are many benefits to treating software applications this way. Containers are:

* **Self-contained ---** Each container runs as an independent process or thread. This greatly reduces the chance of conflict with other applications using the same infrastructure. 
* **Less resource intensive ---** Because they only contain the minimum components required to function they do not consume unnecessary resources. This saves on infrastructure costs and can make applications faster for end users.
* **Highly portable ---**  Containers are not dependent on specific server or environmental variables, so they can be quickly and easily deployed or moved between different server environments. 
* **Easily scalable ---** Containers can be initialised in milliseconds, so adding, moving or removing them is close to instant. And because they are self-contained, the need for time-consuming configuration changes is greatly reduced.
* **Secure ---** Containers are highly abstracted and isolated from their environments as well as from other applications sharing those environments. This makes securing applications and implementing policies easier and cleaner.

Apart from these technical benefits, containers also make it easier for **development** and **operations** teams to work together more efficiently. Because the containers are abstracted from the underlying server environment, they allow developers to focus on writing good code, and operations engineers to focus on managing environments. This clean division of responsibility paradoxically allows for more flexibility and easier collaboration between teams.

These benefits have led many large technology firms to adopt containers as their default approach to shipping and deploying their software. Examples include Netflix, PayPal and Expedia. 

Many of these firms began by taking existing software and repackaging it into containers. This process is called **containerization**, and it affects the entire technology team from developers to devops and infrastructure teams. 

Containerization is made possible by **container engines** - systems that allow containers to be developed, packaged and run on your infrastructure. At Cloud 66 we support [Docker](https://www.docker.com/) which is the market leading container engine (or “runtime”).

### Containers vs virtual machines

While they share some of the same principles, containers are quite different to virtual machines or virtual servers. The most important differences are:

* Containers do not incorporate the entire operating systems. They rely on the kernel of the underlying operating system of their host.
* Virtual machines communicate with the underlying server via a hypervisor, while containers communicate with the underlying operating system via a container runtime (such as Docker).

It’s very common to mix these two technologies, with containers running on virtual machines.

## Service-oriented architecture (SOA)

Service-oriented architecture is a pattern for designing and writing software that treats each function in the software as an independent “service” - something that can be used without needing to “understand” the complexities within that function.

Services are:

* **Self-contained ---** They do not depend on other parts of the software to function
* **Modular ---** They are defined by a discrete business function (e.g. “generate an invoice”, “send a notification”)
* **Black boxes ---** They do not reveal their inner workings to the other parts of the system
* **Reusable ---** Because they are self-contained, services can be plugged into many different workflows and systems without needing to be changed. 

SOA is a quite old idea (it dates back to the late 1970s) but with the rise of [microservices](/skycap/the-basics/concepts-and-terminology.html#microservices) and [containerization](/skycap/the-basics/concepts-and-terminology.html#containers-and-containerization), it is becoming increasingly popular and widely adopted. In many ways these new technologies have finally made the ideals of SOA achievable and scalable. 


## Microservices

Microservices are an evolution of [service-oriented architecture (SOA)](/skycap/the-basics/concepts-and-terminology.html#service-oriented-architecture) in which services are designed to be as modular and granular as possible. These microservices are then loosely coupled together to form an application.

The main differences between classic SOA and microservices are:

* **Size & complexity** --- microservices tend to be smaller and simpler than traditional SOA modules
* **Independence** --- microservices can be independently deployed (whereas SOA is traditionally dependent on a monolithic underlying platform)
* **Communication method** --- microservices communicate with the rest of the application via language-agnostic APIs rather than the more traditional protocols used by SOA.

Microservices naturally share all of the benefits of SOA, but their independence and abstract communication methodology make them easier to deploy and manage at scale. Their small size also makes them easier to update or debug, and reduces the impact of any failures. 

As you have probably guessed microservices are an ideal fit for [containers](/skycap/the-basics/concepts-and-terminology.html#containers-and-containerization), and the two technologies have naturally evolved alongside each other.

## Orchestration

Software orchestration is a way to automate the routine management of your applications and the infrastructural environments on which those applications run.

One of the challenges of [containerization](/skycap/the-basics/concepts-and-terminology.html#containers-and-containerization) and [microservices](#microservices) is that, instead of deploying and managing a single, monolithic application, you need to deploy and manage dozens, hundreds or even thousands of containers. This quickly makes reliable manual management of many operational tasks, like scaling or migration, effectively impossible. 

Container orchestration platforms provide the framework to systematise and automate the entire lifecycle of a containerized and distributed application. In other words, these platforms allow you to define the way you want any management task to work - for example rolling back code - and from then onwards let the platform handle that task with little to no human intervention required.

At Cloud 66 we use [Kubernetes](https://kubernetes.io/) - the market leading solution - to orchestrate containers and applications in clustered environments.

## Pods, nodes and clusters

In Kubernetes a **pod** is the smallest and simplest object in the system. A typical pod takes a container, gives it access to storage and assigns it an IP address. It also applies various policies and settings to it. 

A pod is like a wrapper in which a single, complete instance of an application (such as a microservice) runs. Pods can, and often do, incorporate multiple containers. This is usually done when the containers need to access a shared resource.

A **node** is a server or “worker machine” in a Kubernetes **cluster**. It can be real or virtual. Each node includes the services required to host **pods**. Each node can host multiple pods. 

It’s important to understand that Kubernetes itself does not create or manage the underlying worker machines -- it merely manages the use of the resources of those machines. 

A **cluster** is a collection of **nodes** (and the **pods** running on those nodes) that is managed by the Kubernetes platform. Clusters are the largest and most complex object in Kubernetes. Clusters direct and manage the behaviour of the underlying pods, as well as shared resources like networking and storage.
Service Networking

In containerized applications, the different containers communicate with each other via an internal, privately routed network. By default Docker relies on host-private networking for this communications, so all containers must be hosted in the same environment (node). 

It is possible for containers to communicate across nodes, but this relies on configuring custom ports and IP routes. This is error and failure prone, particularly if nodes are frequently scaled up or down.

Kubernetes simplifies this process through a feature called a “Kubernetes Service” (or just “service” for short). A service manages the assignment of IP addresses and ports, based on whatever parameters you define. 

## Service Networking

It's likely that some services inside your application will need to respond to queries from the public internet.

For a service to be available to anyone outside the container, we need to bridge it from inside to outside of the container.

For example a container with a web application might be set to listen on port 3000 within the internal (Kubernetes) cluster network, and that port could then be exposed to port 80 on the public network attached to the cluster. 

This is not limited to HTTP or web traffic. The same concepts apply if a container serves non-HTTP traffic (like web sockets, DB containers or custom TCP / UDP traffic).

<div class="notice"><p>
In this context, <em>outside world</em> is used for any client of your service that's not inside the container. This includes any of your other services running on other environments.</p></div>

## Container Deployment Pipeline (CDP)

Modern software development --- particularly for SaaS and web applications --- requires more flexibility and agility than more traditional models. Software needs to change more frequently to accommodate changes in everything from underlying technologies to customer expectations. New features or fixes need to be shipped quickly. You can no longer set aside an entire day to handle a deployment.

In order to accommodate these requirements, many teams have adopted a continuous integration & continuous deployment strategy (CI/CD). This strategy automates most of the steps required by the testing and deployment process (such as unit testing and configuration updates), and involves humans only where absolutely necessary. 

**Skycap** is an end-to-end **Container Deployment Pipeline** (CDP) that seamlessly automates the deployment of software (including microservices) as **containerized** applications to **clustered** environments managed by Kubernetes.

## BuildGrid and Build Minutes

BuildGrid is Skycap’s integrated Docker image builder. Whenever you build images from source code (for example by taking a new Snapshot), or retag existing images, you make use of a metered resource called Build Minutes. All Skycap accounts have a number of “free” Build Minutes per month.

Learn more about Build Minutes, monthly allowances and overages in our [detailed guide](/skycap/references/build-minutes.html). 
