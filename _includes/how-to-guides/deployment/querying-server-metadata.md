## Overview

Although your Cloud 66 Dashboard provides a complete view of all your applications, it can be useful to query metadata directly from a server. This can be useful for automating task management and status tracking, as well as for investigative tasks like debugging. The special `metadata` endpoint allows you to query a server's metadata while you are logged into it (via SSH).

## How to query metadata from a server

In order to manually query a server's metadata, you must first [log into the server via SSH](/{{page.collection}}/how-to-guides/common-tools/ssh-to-server.html). Once you are logged in, you can use the following command:

<pre class="language-bash line-numbers u-whiteSpaceNoWrap"><code>curl -s -H "Accept: application/json" https://$CLOUD66_ACCOUNT_API_KEY:X@app.cloud66.com/api/tooling/metadata/$CLOUD66_APPLICATION_API_KEY</code></pre>

Some important things to note:

- Even though you are logged into your server, you still need to pass your Cloud 66 API key and Application API key in the query (for security reasons). These are both available as Environment Variables on your server.
- We are setting the header to "Accept: application/json" - this allows our curl command to correctly format the data, which is returned in JSON format.

The command above will return **all** the available metadata for the server. However, you can also query subsets of the metadata using the names for each element and sub-element. For example this command:

<pre class="language-bash line-numbers u-whiteSpaceNoWrap"><code>curl -s -H "Accept: application/json" https://$CLOUD66_ACCOUNT_API_KEY:X@app.cloud66.com/api/tooling/metadata/$CLOUD66_APPLICATION_API_KEY/deployment/triggered_by</code></pre>


...will return metadata about who **triggered** the last **deployment**. 

Finally, when querying for metadata, it can be useful to parse the json response. We suggest installing and using `jq` for this. To install `jq`

```shell
apt install -y jq
```

## Examples of available metadata

### 1. deployment information

<pre class="language-bash line-numbers u-whiteSpaceNoWrap"><code>$ curl -s -H "Accept: application/json" https://$CLOUD66_ACCOUNT_API_KEY:X@app.cloud66.com/api/tooling/metadata/$CLOUD66_APPLICATION_API_KEY/deployment | jq</code></pre>

<pre class="language-bash u-whiteSpaceNoWrap"><code>
{
  "response": {
    "finished_at": "2020-07-07T13:40:51Z",
    "outcome": {
      "code": 1,
      "meaning": "success"
    },
    "started_at": "2020-07-07T13:37:35Z",
    "triggered_by": "your-email@yourdomain.com",
    "triggered_via": {
      "code": 0,
      "meaning": "web"
    }
  }
}
</code></pre>

### 2. Server OS information

<pre class="language-bash line-numbers u-whiteSpaceNoWrap"><code>$ curl -s -H "Accept: application/json" https://$CLOUD66_ACCOUNT_API_KEY:X@app.cloud66.com/api/tooling/metadata/$CLOUD66_APPLICATION_API_KEY/server/os | jq</code></pre>

<pre class="language-bash u-whiteSpaceNoWrap"><code>
{
  "response": {
    "distro": "ubuntu",
    "version": "18.04"
  }
}
</code></pre>

### 3. Find out who deployed last (or currently)

<pre class="language-bash line-numbers u-whiteSpaceNoWrap"><code>$ curl -s -H "Accept: application/json" https://$CLOUD66_ACCOUNT_API_KEY:X@app.cloud66.com/api/tooling/metadata/$CLOUD66_APPLICATION_API_KEY/deployment/triggered_by | jq -r '.response'</code></pre>

<pre class="language-bash u-whiteSpaceNoWrap"><code>your-email@yourdomain.com</code></pre>

## Using metadata in a workflow

One handy way to call this method is via a [deploy hook](/{{page.collection}}/tutorials/deploy-hooks.html). For example, you might want to fetch the name of the person who deployed to a server and pass it to a task tracking or audit logging system.

The deploy hook to achieve that would look something like this:

<pre class="language-yaml line-numbers u-whiteSpaceNoWrap"><code>first_thing:
- target: any
  execute: true
  apply_during: all 
  sudo: false
  inline: |
    #!/usr/bin/env bash
    current_deployer=$(curl -s -H "Accept: application/json" https://$CLOUD66_ACCOUNT_API_KEY:X@app.cloud66.com/api/tooling/metadata/$CLOUD66_APPLICATION_API_KEY/deployment/triggered_by | jq -r '.response')
    echo "Deployed by: $current_deployer"
</code></pre>

This hook will fire as soon as deployment starts (`first_thing`) and will query the `triggered_by` field and store the value in a variable. You can then use this variable as you need!