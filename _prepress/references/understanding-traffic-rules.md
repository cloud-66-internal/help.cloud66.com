---
layout: post
template: one-col
title: Understanding Traffic rules 
categories: references
lead: "A reference guide to Traffic rules and parameters"
legacy: false
order: 1
tags: ["traffic"]
permalink: /:collection/:path:output_ext
---

## Overview 

Traffic allows you to define arbitrarily complex rules to route and modify traffic to your Prepress application. If you need help writing, testing or implementing Traffic rules, please read our [how-to guide](/prepress/how-to-guides/deployment/using-traffic-rules-to-route-traffic.html). This reference guide describes rule functions and their parameters in more detail for those who need to write more complex rules.


## Redirect rules

Redirect rules force any matching URLs to redirect to a new set of URLs based on the pattern supplied. If a redirect rule is triggered by a request, the rest of the rules below it will not be evaluated for that request.

Redirect rules have four parameters:

- `from` - defines the URL or set of URLs to be redirected
- `to` - defines the URL or set of URLs to which the traffic will be directed
- `with` (optional) - defines the method of redirection (permanent or temporary)
- `when` (optional) - defines the condition(s) when the entire rule will apply

### Redirect rule format and parameters

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
}
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

## Rewrite rules

Rewrite rules have three parameters:

- `from` - defines the URL or set of URLs to be rewritten
- `to` - defines the URL or set of URLs to which the traffic will be directed
- `when` (optional) - defines condition(s) when the rule will apply

### Rewrite rule format and parameters

```jsx
Rewrite {
    from: <regexp>,
    to: <regexp substitute>,
    when: <condition, optional>,
}
```

### Examples of rewrite rules

#### Example 1: Rewrite a single page to a new path

This will serve the file located at `/how-to-guides/nginx/customizing-nginx.html` but display the url `/how-to-guides/nginx/nginx-auth.html`

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
	from: "^/main/[?]path=(?P<path>[^&]+)$",
	to: "/main/${path}/?path=${path}",
}
```

#### Example 3: Add "index.html" to all paths that don't have an extension

```jsx
Rewrite {
	from: "^(?P<path>[^?]*)/(?P<leaf>[^/?.]+)(?P<query>[?].*)?$",
	to: "${path}/${leaf}/index.html${query}"
}
```

## Block rules

Block rules will deny access to your site for any requests that meet its `when` conditions, and will return a (customizable) HTTP code instead. If a block rule is triggered by a request, the rest of the rules below it will not be evaluated for that request.

Block rules have three parameters:

- `when` - defines the condition(s) when the rule will apply
- `with` (optional) - defines the HTTP status code that will be returned to blocked requests (default is `404`)
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
    when:	origin.country_code == "GB" || 
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

## Header rules

Header rules will modify the header of any requests that meet its evaluation criteria. Unlike other rules, a header rule will not stop the rules below it from being evaluated for a request.

- `add` - Add new key:value pair(s) to the HTTP header
- `remove` - Remove any key:value pairs where the key matches the conditions
- `set` - Modify an existing key:value pair in the HTTP header
- `when` - (optional) - defines the condition(s) when the rule will apply

### Header rule format and parameters

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

## Traffic and CEL grammar

Traffic is built on top of Google’s [Common Expression Language](https://github.com/google/cel-spec#readme) (CEL) and as such can use any [grammar supported by CEL](https://github.com/google/cel-spec/blob/master/doc/langdef.md#syntax). The applies particularly to the `when` conditions in rules, since these use logical operators (such as `==` for “equals” and `!=` for “does not equal”). 

Traffic supports string functions such as `replace`, `join` and `LowerAscii`.  We have a [separate reference doc](/prepress/references/traffic-cel-functions.html) that lists all of them.

Traffic supports a set of types specific to web traffic. These allow rules to reference components of the web traffic that needs to be routed using dot notation. The buffer types supported are:

```jsx
Client {    
    string family;
    string major;
    string minor;
    string patch;
}

OS {
    string family;
    string major;
    string minor;
    string patch;
    string patch_minor;
}

Device {
    string family;
    string brand;
    string model;
}

UserAgent {
    Client client;
    OS os;
    Device device;
}

Request {
    string user_agent_raw;
    UserAgent user_agent;
    string url;
    string path;
    string method;
    string host;
}

Origin {
    string ip;
    string continent_code;
    string country_code;
    string city_name;
    float latitude;
    float longitude;
    string timezone;
    string asn;
}
```

## Examples of Traffic types

A good way to get practical examples of the types supported by Traffic is to watch your app’s LiveLogs for Web Traffic. These are JSON formatted so they can be easily grabbed and reformatted for easier reading.

For example:

```json
{
   "caller_info":{
      "origin":{
         "asn":"AS37053",
         "city_name":"Cape Town",
         "continent_code":"AF",
         "country_code":"ZA",
         "ip":"165.0.126.12",
         "latitude":-33.0386,
         "longitude":17.1711,
         "timezone":"Africa/Johannesburg"
      },
      "request":{
         "host":"af-linodetest.C66.com",
         "method":"GET",
         "path":"/about-me/",
         "url":"/about-me/",
         "user_agent":{
            "client":{
               "family":"Chrome",
               "major":"99",
               "minor":"0",
               "patch":"4844"
            },
            "device":{
               "brand":"Apple",
               "family":"Mac",
               "model":"Mac"
            },
            "os":{
               "family":"Mac OS X",
               "major":"10",
               "minor":"15",
               "patch":"7"
            }
         },
         "user_agent_raw":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.83 Safari/537.36"
      }
   },
   "message":"traffic",
   "method":"GET",
   "path":"/af-linodetest-prd-ed5b21/main/1648448133/about/index.html",
   "size":21524,
   "status":200
}
```

This log entry gives us a whole range of useful information about the request that we can use in our rules. It tells us:

- The country and city from which the request originated (`Africa` and `Cape Town` in this case)
- The (roughly approximate) current latitude and longitude of the device making the request
- The device used to make the request (an `Apple Mac`), and its operating system
- The browser used to make the request (`Chrome`)

We could now craft parameters that use these variables to route traffic as needed. For example we could block all Apple Mac users in Cape Town that have not upgraded to Mac OS version 10.15:

```jsx
Block {
	when:	origin.city_name == "Cape Town" && 
			request.user_agent.os.family == "Mac OS X" && 
			request.user_agent.os.major > 9 && 
			request.user_agent.os.minor < 15
	message: "Please upgrade to OS X 10.15"
}
```