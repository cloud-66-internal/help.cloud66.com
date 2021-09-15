---
layout: post
template: one-col
title: What is Prepress?
order: 1
categories: the-basics
lead: "Explaining the concepts and technologies behind Prepress"
legacy: false
permalink: /:collection/:path:output_ext
---


## Welcome to Prepress!

Prepress makes building, deploying and managing **prebuilt web applications** on your own infrastructure easy, reliable and fast. In just a few minutes you can have your static site up and running on your own hosting account. We support the major static site generators:

- Jekyll (Ruby)
- Hugo (Go)
- Gatsby (React JS)

Prepress allows you to benefit from the power of the [Jamstack](https://jamstack.org/) without being locked into a proprietary infrastructure solution. Your application is hosted on your own object storage via your own cloud account. 

Prepress gives you access to all of Cloud 66's best-in-class management and automation tools, allowing you to easily manage deployments, previews, team access and notifications. 

## What are prebuilt web apps?

Prebuilt applications are also known as "preprocessed", "pre-rendered" or "static sites". Instead of relying on the traditional web architecture of web servers, applications and databases, they process the application's front-end code before deployment and output a discrete collection of static files:

- HTML & CSS
- Javascript
- Images

These static files are faster to server and easier to scale. They can be hosted across multiple regions without any extra coding, putting them closer to your users without the hassle and expense of replicating data or managing multiple application stacks. They are generally hosted on object storage solutions (such as Amazon S3) which are relatively cheap and much easier to scale up.

They are also generally more secure because they have less "surface area" to attack and fewer moving parts that need to be secured (database servers, application code etc).

## Are prebuilt apps completely static?

Not necessarily, no. The Jamstack architecture uses Javascript to make prebuilt sites dynamic by calling backend APIs. This means that prebuilt sites can be used for a wide variety of purposes including:

- Publishing
- Documentation
- Online shopping / e-commerce
- Online learning

With a rich enough set of APIs and micro-services, there are no theoretical limits on the kind of application you build.

## What are the advantages of prebuilt apps?

Prebuilt web apps decouple the user front-end from backend operations. This means they are:

- (Much) faster to serve - static elements benefit disproportionately from caching and distributed hosting, and have no complex runtime processing to slow you down
- Highly portable - they can be hosted across multiple regions and even multiple cloud providers
- Easily scalable - adding capacity does not require replication or retooling - you simply scale up your object storage
- More secure - there are fewer components to attack, and most of them are (by definition) read-only

## Do I need to learn a new language?

If you are already building and running a web applications, then you already have the skills required to build a Jamstack application. The majority of the work is in languages and frameworks you already use:

- HTML 5
- CSS (including SASS etc)
- Javascript (and related frameworks)
- APIs (RESTful and other)

## How do I get started?

You can have your first Prepress application up and running in literally minutes. All you need is:

- An online git repository (public or private) containing your app's code
- An Amazon Web Services account
- A Cloud 66 account (we offer 14 day free trials with no credit card required)

Our Getting Started Guide will have you up and running in minutes.