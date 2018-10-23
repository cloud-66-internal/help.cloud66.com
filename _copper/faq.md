---
layout: post
template: oss
externallink: https://github.com/cloud66-oss/copper
label: Copper
title: Copper FAQ
lead: Frequently Asked Questions
legacy: false
permalink: /:collection/:path
order : 4
---

## What is Copper?

Copper is the name of a command line tool (CLI) and a Domain Specific Language (DSL) for validating configuration files.

## Why do I need Copper?

We built Copper to make sure our infrastructure is stable and secure. More and more we use code to describe infrastructure: if you use tools like Kubernetes, you know how you can use configuration files to change your infrastructure settings as well as deploy your applications.

As infrastructure configuration becomes part of the code, we wanted to apply the same principles of quality we use for code to our configuration files. It sounded strange to be the champions of "Infrastructure as Code" and yet not use all of best practices of developing code for our infrastructure.

If you use rely heavily on configuration files then Copper is for you. Particularly if you use Kubernetes, Copper can help you a lot.

## How do I use Copper?

Copper comes with a command line tool. Simply head to the [Getting Started](/copper/getting-started.html) section and validate your first file!

## Why not use X instead?

Our aim for releasing Copper is to help everyone benefit from using Kubernetes without having to restrict access to configuration files (so mistakes can be avoided). We built Copper as a purpose built tool with a safe to execute and easy to pickup DSL to make this goal easier. However if you can achieve this using a different tool or product, we think we achieved our goal and would love to hear about your success.

## Why a new DSL instead of using X as a language?

That's a very good question. We looked at many different options, from tools that let you write Python to vanilla Javascript running as a Node.js function. Using a programming language has 2 main benefits:

1. You probably know it already.
2. It is super flexible. It's a programming language after all!

However, we decided to build Copper DSL because we wanted to make it very specific to the use cases related to validating Kubernetes configuration files without thinking about how to **write** validations instead of thinking about validations themselves.

We wanted Copper DSL to be as close as possible to languages you know (like Javascript or Python) without feeling alien. We also wanted it to be safe to run on a hosted or multi-tenanted environment so everyone can benefit from it without too much operational trouble.

We think Copper DSL satisfies all these goals and is going to get even better because of its focused goal.

## Why is Copper written in Ruby and not X?

You're probably thinking why Copper is not written in Go! As a matter of fact all of our other open source products ([Starter](http://www.startwithdocker.com/), [Habitus](http://www.habitus.io/) and [Gifnoc](http://gifnoc.com/)) are written in Go. Ruby however lends itself very well to writing a DSL and the Gem infrastructure is a good way to distribute libraries and binaries. Since all Copper users are familiar with Docker and it will most likely be running somewhere in your CI/CD pipeline, it is best wrapped in a Docker image.

## Can I help / contribute?

Yes please! Raise github issues, fork and modify, send PRs and make use of Kubernetes configurations better and safer for everyone.
