---
menuheaders: [ "Stack environments" ]
layout: post
template: one-col
title: Stack Environments
categories: Deployment
lead: ""
legacy: false

permalink: /:collection/:path
---








### Stack environments

To reflect the different stages of your software, you can deploy your stacks in different environments:

* **Development**: Use this when you're developing your application
* **Production**: For live applications
* **QA**: Used for quality assurance
* **Staging**: Mirrors the production environment but is only used for testing

In addition to these environments, you can define your own environments from the _Account_ page, in the _Setting_ -> _Custom environment_ menu. Once the new environment is added, you will be able to see it in the list of supported environments when creating a new stack. Custom environments don't influence anything on the stack. They will result in the relevant environment variables like `RAILS_ENV` and `RACK_ENV` (for Rack-based stacks) having the correct values. The usage of those custom values is up to your application.

Depending on your configuration, your application will act differently in each environment. For example, a Ruby on Rails application
has a directory in `config/environments` that contains settings for each environment.

There is no difference between these environments when it comes to features and supported tools apart from what you define in your code.


