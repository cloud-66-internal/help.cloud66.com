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

You set and manage Webflow rules via your Cloud 66 Dashboard. We provide templates to help you write rules, or you can write them from scratch. 

## Syntax for Webflow rules

Webflow rules use keywords to define specific functions. The common keywords are:

- `from` - defines the pattern of the incoming traffic (*source*) that must be routed using **regex**
- `to` - defines the pattern of the *destination* for this traffic using **regex with substitution**
- `when` - sets conditions under which the rule will be applied (**boolean** or **logical**) - see the Webflow grammar section below for more details
- `with` - defines modifiers that will be applied to the traffic when it is routed (these differ by context)

There are also keywords specific to modifying headers - see the header section below. 

Rules are formatted as colon-delimited keywords separated by line breaks and wrapped in curly brackets. See below for examples.

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

### Testing rules

We recommend testing your new rule before setting it live. To do this, choose the **Test status** when creating a rule and then apply the new rule. This will record the results of the rules in your Live Logs without actually routing the traffic. 

To see the logs for your test rule:

1. Click on *Live Logs* in the right-hand column
2. Check the box in the right-hand column next to the rule you wish to test 
3. Visit one of the URLs to which the URL should apply

The output of the logs will record the results of the rule (including any errors).

## Redirecting traffic with Webflow

Redirect rules support four keywords:

- `from` - defines the URL or set of URLs to be redirected
- `to` - defines the URL or set of URLs to which the traffic will be directed
- `with` (optional) - defines the method of redirection (permanent or temporary)
- `when` (optional) - defines the condition(s) when the entire rule will apply

### Redirect format and parameters

```jsx
Redirect {
    from: <regexp>,
    to: <regexp substitute>,
    with: <status code | temporary | permanent , optional>,
    when: <condition, optional>,
}
```

### Examples of redirect rules

#### Example 1: redirect a single page to a new path

This rule permanently redirects a path of an older version of a page to its new location (and/or filename). Query strings are preserved.

```jsx
Redirect {	
	from: "^/how-to-guides/nginx/nginx-auth.html(?P<query>[?].*)?$",
  to: "/how-to-guides/nginx/customizing-nginx.html${query}",
  with: 301
```

#### Example 2: convert query strings into directories

This rule temporarily redirects anyone hitting the `/main` directory of the site with a query string named `path` to a subdirectory with the same name as the the value of the query. This would redirect `/main/?path=foo` to `/main/foo/`.

```jsx
Redirect {	
	from: "^/main/[?]path=(?P<path>[^&]+)$",
  to: "/main/${path}/?path=${path}",
  with: temporary
}
```

## Rewriting URLs with Webflow

Rewrite rules have three keywords:

- `from` - defines the URL or set of URLs to be rewritten
- `to` - defines the URL or set of URLs to which the traffic will be directed
- `when` (optional) - defines the condition(s) when the rule will apply

### Rewrite format and parameters

```jsx
Rewrite {
    from: <regexp>,
    to: <regexp substitute>,
    when: <condition, optional>,
}
```

### Examples of rewrite rules

#### Example 1: Rewrite a single page to a new path

This will serve the file located at `/how-to-guides/nginx/nginx-auth.html` but display the url `/how-to-guides/nginx/customizing-nginx.html`

```jsx
Rewrite {	
	from: "^/how-to-guides/nginx/nginx-auth.html(?P<query>[?].*)?$",
  to: "/how-to-guides/nginx/customizing-nginx.html${query}",
}
```

#### Example 2: Rewrite query-stringed paths to friendly URLs

This will accept requests to the URL pattern `/main/foo/` and serve the underlying URL`/main/?path=foo`.

```jsx
Rewrite {	
  from: "/main/${path}/?path=${path}",
	to: "^/main/[?]path=(?P<path>[^&]+)$",
}
```

#### Example 3: Add "index.html" to all paths that don't have an extension

```jsx
Rewrite {
	from: "^(?P<path>[^?]*)/(?P<leaf>[^/?.]+)(?P<query>[?].*)?$",
  to: "${path}/${leaf}/index.html${query}"
}
```

## Blocking traffic with Webflow

- `when` - defines the condition(s) when the rule will apply
- `with` - defines the HTTP status code that will be returned to blocked requests (default is `404`)
- `message` (optional) - the message that will be returned to blocked users

### Block rule format and parameters

```jsx
Block {
    when: <condition>,
    with: <status code, optional>,
    message: <message,optional>,
}
```

### Examples of block rules

#### Example 1: Block by country code, IP range or browser

The following rule checks whether a user is *either* in the UK or in the IP range `10.0.0.0/8` *or* using the Chrome browser, and blocks any users that meet *any* of those conditions:

```jsx
Block {
    when: origin.country_code == "GB" || 
        inRange(origin.ip, "10.0.0.0/8") || 
        request.user_agent.client.family == "Chrome",
    message: "You are in the UK or running Chrome",
}
```

#### Example 2: Block all non-Apple devices in India

```jsx
Block {
    when: device.family.brand != "Apple" &&
					origin.country_code == "IN",
		with: 404
}
```

## Modifying headers with Webflow

- `add` - Add new key:value pair(s) to the HTTP header
- `remove` - Remove any key:value pairs where the key matches the conditions
- `set` - Modify an existing key:value pair in the HTTP header
- `when` - (optional) - defines the condition(s) when the rule will apply

### Header format and parameters

```jsx
Header {
  add: { "key": "value" },
  remove: [ "key" ],
  set: { "key": "value" },
  when: <condition> (optional)
}
```

### Examples of header rules

The following rule adds an `X-Country` header when the origin country is the UK, and sets the value of the key to (lowercase) `gb`.

```jsx
Header {
  add: { "X-Country": origin.country_code.lowerAscii() },
  when: origin.country_code.startsWith("GB")
}
```

## Webflow and Protocol Buffer grammar

Webflow is built on top of Google’s [Common Expression Language](https://github.com/google/cel-spec) (CEL) and as such can use the [grammar supported by CEL](https://github.com/google/cel-spec/blob/master/doc/langdef.md#syntax). The applies particularly to the `when` conditions in rules, since these use logical operators (such as `==` for “equals” and `!=` for “does not equal”). 

Webflow supports string functions such as `join` and `LowerAscii`. The [CEL Go library](https://github.com/google/cel-go/blob/master/ext/strings.go) has good examples in its comments.

Webflow also supports a subset of **protocol buffer types**. These allow rules to reference components of the web traffic that needs to be routed using dot notation. The buffer types supported are:

```jsx
message Client {    
    string family = 1;
    string major = 2;
    string minor = 3;
    string patch = 4;
}

message OS {
    string family = 1;
    string major = 2;
    string minor = 3;
    string patch = 4;
    string patch_minor = 5;
}

message Device {
    string family = 1;
    string brand = 2;
    string model = 3;
}

message UserAgent {
    Client client = 1;
    OS os = 2;
    Device device = 3;
}

message Request {
    string user_agent_raw = 1;
    UserAgent user_agent = 2;
    string url = 3;
    string path = 4;
    string method = 5;
    string host = 6;
}

message Origin {
    string ip = 1;
    string continent_code = 2;
    string country_code = 3;
    string city_name = 4;
    float latitude = 5;
    float longitude = 6;
    string timezone = 7;
    string asn = 8;
}
```