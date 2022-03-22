---
layout: post
template: one-col
title:  "Support for Frameworks"
categories: references
order: 20
lead: Detailed info on which static frameworks supported by Prepress
tags: ['tags']
legacy: false
permalink: /:collection/:path:output_ext
---

## Frameworks currently supported

At the moment Prepress supports the following static site framworks: 

- [Jekyll](https://jekyllrb.com/) (Ruby)
- [Hugo](https://gohugo.io/) (Go)
- [Gatsby](https://www.gatsbyjs.com/) (React JS)

If your application uses another framework, please use the feedback button below to share your preferred framework so that we can consider supporting it in future. 

<button data-tf-popup="Q7Q2kDSk" data-tf-size="70" style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#57BD5C;color:#000000;font-size:16px;border-radius:10px;padding:0 26px;font-weight:bold;height:40px;cursor:pointer;line-height:40px;text-align:center;margin:0;text-decoration:none;">Request a framework</button><script src="//embed.typeform.com/next/embed.js"></script>


If your application *does* use one of our supported frameworks, you may need to explicitly configure your application using a Manifest file. Our [getting started guide](/prepress/quickstarts/getting-started-with-manifest.html) will get you up and running in a few minutes. 

## Determining components versions

In general Prepress will automatically detect and use the optimal versions of all your application's components, but if your app relies on unusual versions, then you may need to specify them explicitly. 

You can set versions at multiple levels in an application, but we will prioritise the version we use by scanning the files listed below, in descending order of preference. In other words we will use the "first" version we find.

## Ruby version

We automatically detect your Ruby version in the following order:

`manifest`

`Gemfile.lock`

`.ruby-version`

`.rvmrc`

If we find no version, we will use our default. 

## NodeJS version

We automatically detect your Node version in the following order:

`manifest`

`package-lock.json`

`.node-version`

`.nvmrc`