---
layout: post
template: one-col
title: Using Webflow rules to route traffic
categories: how-to-guides/deployment
order: 1
lead: "How write, set and manage Webflow rules to route traffic to your Prepress app"
legacy: false
tags: ["routing","redirects","rewrites"]
permalink: /:collection/:path:output_ext
---

## Overview

Webflow allows you to define arbitrarily complex rules to route and modify traffic to your Prepress application. This includes:

- Redirecting traffic from one set of URLs to another
- Rewriting URLs
- Blocking traffic
- Modifying headers

You set and manage Webflow rules via your Cloud 66 Dashboard. We provide templates to help you write rules, or you can write them from scratch. Webflow is built on top of [Google’s Common Expression Language](https://github.com/google/cel-spec#common-expression-language){:target="_blank"} (CEL). 

If you need more detailed info on rules we have an in-depth guide to [understanding rules](/prepress/references/understanding-webflow-rules.html) as well as a reference to [Webflow CEL functions](/prepress/references/webflow-cel-functions.html).

## How Webflow rules work

Webflow consist of one or more functions that run in a sequence. They run from top to bottom and affect the route that each web request to your application takes. They can also block traffic based on different conditions. If traffic is blocked, it will not run through the rest of the rules that come after the current one.

Each rule is a single function. There are 4 functions in Webflow: `Rewrite`, `Redirect`, `Header` and `Block`. Each function takes a number of parameters, some required and some optional. The values for each parameter is defined by a type. and you can learn more about these types in [CEL documentation](https://github.com/google/cel-spec/blob/master/doc/langdef.md). 

Now, let’s look at a practical example: we have changed the name of a page and we want the URL to reflect the new name without moving the underlying resource. For this we can use the `Rewrite` function:

```jsx
Rewrite {
	from: "/old_page/index.html",
	to: "/new_page/index.html"
}
```

Let’s break this function down: 

- The function is `Rewrite` (note the case sensitivity). This example has two parameters:
- `from` is a simple string that defines the URL that will be rewritten
- `to` is another string that defines the location of the underlying resource

Rewrites can also have an optional `when` parameter - a boolean test that determines whether the rule should be applied to the traffic that it matches. You can use any [boolean expression supported by CEL](https://github.com/google/cel-spec/blob/master/doc/langdef.md#syntax).

Let’s look at a more complex example: you have changed the name of a section of your website from “projects” to “subjects”, which you want to reflect in the public-facing URL, but without changing the underlying location of the files. For this we can use the `Rewrite` function:

```jsx
Rewrite {
	from: "^/subjects/(?P<projectname>[?].*)?$",
	to: "/projects/${projectname}"
}
```

Let’s break this function down: 

- The function is `Rewrite` (note the case sensitivity). This example has two parameters:
- `from` is a regular-expression-capable string against which incoming requests to the `/subjects` path are evaluated. Note that it preserves the sub-path (`projectname`) being requested as a variable to be used by the `to` parameter.
- `to` is also a regular-expression-capable string, but its purpose is to transform the URL evaluated by the `from` parameter so that it points at the correct underlying resource. You can see how it uses the variables from the `from` parameter to construct the URL that is passed to the rewrite engine.

Let’s look at a final example - this time of a `Redirect` with a `when` parameter. 

```jsx
Redirect {
	from: "^/main/(?P<splat>[^?]*)(?P<query>[?].*)?$",
  to: "/es/main/${splat}${query}",
  with: 301
	when: origin.country_code == "ES" || origin.country_code == "MX"
}
```

As we can see, this function will redirect traffic originating in Spain and Mexico to a Spanish version of the site, and preserve any query strings.  This redirect is set to *permanent* (`301`) by the `with` parameter because it should always apply to this traffic. You can also use `temporary` and `permanent` here - they are aliases of the underlying HTTP codes.


## Creating and managing rules

Rules are managed using your Cloud 66 Dashboard. To create a new rule:

1. Log into your Cloud 66 Dashboard 
2. Open your Prepress application
3. Click on *WebFlow Rules* in the right-hand column
4. Click the *+ Add Rule* button at the top right of the main rules panel
5. Choose a template appropriate to your needs
6. Define your rule using the code editor
7. Add a description for the rule (rules are version controlled)
8. Choose a status for the new rule - either *Live* or *Test*
9. Click *Save*
10. Click the green Apply button that will appear at the top of the Rules summary page

Rules are applied in the order in which they appear on this page. If rules conflict, we will default to the rule higher up in this list. You can drag rules to reorder them. 

## References for rule types

Our full reference guide has detailed explanations and examples of syntax for each type of rule. Click the name of a rule below for more details:

- Redirect rules
- Rewrite rules
- Block rules
- Header rules

## Testing Webflow with real payloads

Rules can be challenging to read and debug in the absence of real traffic data. We recommend testing your new rule before setting it live. To do this, choose the **Test status** when creating a rule and then apply the new rule. This will record the results of the rules in your Live Logs without actually routing the traffic. 

To see the logs for your test rule:

1. Click on *Live Logs* in the right-hand column
2. Check the box in the right-hand column next to the rule you wish to test 
3. Visit one of the URLs to which the rule should apply

The output of the logs will record the results of the rule (including any errors). Note that LiveLogs are streamed and are not persisted - they will reset if you close or refresh the page.

## Debugging and rule construction

Watching the LiveLogs for your Webflow rules is useful for a number of different reasons:

1. It allows you to see which traffic is being filtered (and which is being ignored)
2. It gives you detailed examples of traffic payloads, which you can use to construct new or more specific rules

For example, this is a sample payload from LiveLogs:

```json
{"origin":{"asn":"AS2089","city_name":"Chiswick","continent_code":"EU","country_code":"GB","ip":"88.11.41.153","latitude":51.2222,"longitude":-0.2222,"timezone":"Europe/London"},"request":{"host":"help.cloud66.com","method":"GET","path":"/css/legacy.css","url":"/css/legacy.css","user_agent":{"client":{"family":"Chrome","major":"99","minor":"0","patch":"4844"},"device":{"brand":"Apple","family":"Mac","model":"Mac"},"os":{"family":"Mac OS X","major":"10","minor":"15","patch":"7"}},"user_agent_raw":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.83 Safari/537.36"}}
```

This gives you practical examples for writing rules for everything from geographical filters to browser versions to device types. You could write a function that targets this traffic like so:

```jsx
origin.asn == "AS2089" && 
origin.city_name == "Chiswick" && 
device.brand == Apple
```

## Performance

Webflow rules are super fast but inevitably there is a linear performance cost associated with them: the more rules that run, the longer the processing takes. We’re talking milliseconds for hundreds of rules, but in production every millisecond counts.  

Note if any rule stops the traffic the rest of the rules won’t evaluated. As such we recommend putting `Block` rules higher up in the list.

## What’s next?

- Lean more about Webflow in our [reference guide](/prepress/references/understanding-webflow-rules.html)
- Set up a [custom domain](/prepress/tutorials/prepress-dns.html) for your Prepress site
- Learn about [Manifest files](/prepress/quickstarts/getting-started-with-manifest.html) - a powerful configuration tool