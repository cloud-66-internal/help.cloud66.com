
## About redeployment hooks

Redeployment hooks allow you to achieve continuous deployment by deploying your stack when you push a change to your Git repository or have a CI push success. Redeployment hooks differ slightly for Rails/Rack and Docker Stacks see sections below.



### Where to find your redeployment hook?

Your redeployment hook URL is automatically generated for each of your stacks. You can found your unique redeployment hook URL on your stack information page (available via the **stack information** link on the main stack page's right hand navigation menu)


{% if include.product == 'legacy_docker' or include.product == 'maestro' or include.product == 'skycap' %}
### For Docker Stacks

Docker Stacks can have multiple services which can rely on a combination of either Image or Git sources. Furthermore, the Git sources can be the same or different branches, or even completely different repositories. To handle this, we have introduced and addition _services modifier_ that can be appended to the redeployment hook to specify which services to redeploy (the _services modifier_ is a querystring parameter).

{% endif %}

When a redeployment hook is invoked:

1.    If the commit hook payload includes Git information (Git source, branch and/or reference) then we will attempt to find a matching service on your stack that corresponds to the above information. If there is a match then we will deploy _only_ the services that have a Git type (_not_ the Image based services). Note that the matching service will also build based on the Git ref that is present in the payload.
2.    If the commit hook payload does not include Git information, then we will automatically redeploy _all_ services defined on your stack.
3.    If you use the **services** modifier to specify which specific services you want to deploy when the commit hook is invoked, then the same logic applies as in 1) and 2) above, the only difference being that we will always deploy the services you have specified if deployment will occur.

Some examples below will illustrate how to add a **services modifier**. Note that the xxxx/yyyy in the examples is for illustrative purposes only and should be replaced with your redeployment URL on your stack information page.
An example redeployment hook **without a services modifier:**

```
https://hooks.cloud66.com/stacks/redeploy/xxxx/yyyy
```

An example redeployment **hook with a single services modifier:**

```
https://hooks.cloud66.com/stacks/redeploy/xxxx/yyyy?services=web
```

An example redeployment **hook with a many-service modifier:**

```
https://hooks.cloud66.com/stacks/redeploy/xxxx/yyyy?services=web,app
```


{% if include.product == 'Rails' %}

### For Rails/Rack Stacks

All Rails/Rack Stacks are based on a Git repository and branch. Pushing code to the same branch as your stack Git branch will invoke your stack redeployment. If you push code to another branch, nothing will happen - this allows you to push code to your development branch without an automatic redeploy on your production stack for example. If it is available in the payload, the Git Ref of the latest commit will be used for the stack redeployment.

{% endif %}

### Note

In the case where the payload of the commit hook does not contain any branch information (Github and Bitbucket payload formats are supported) then the stack will redeploy without attempting to match branch


#### Github Integration

Users who have signed in through Github (and who have enough access to create and edit deployment events for their stacks on GitHub) can activate continuous deployments on GitHub. To do this: access your [Stack settings]({% if page.collection == "maestro" %}/maestro/references/toolbelt.html{%else%}/{{page.collection}}/references/toolbelt.html{%endif%}#settings-variables) via the toolbelt
 and set **continuous.deploy** to _true_.

```
$ cx settings set -s my_stack continuous.deploy true
```

This will create a new webhook for your repository on GitHub or simply modify and existing one to let Cloud66 receive _deployment_ events as well.

With this feature enabled, whenever you push new commit, Cloud 66 will automatically generate a new _deployment event_ based on receiving the _push event_ from GitHub. We will also send _deployment status events_ on different deployment statuses, such as started, canceled, succeeded and failed.

For more information please refer to the [Github Deployment API](/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html).


## Adding Redeployment Hooks

The process of adding the hook differs by your Git host, so we will guide you through doing this with GitHub, Bitbucket and a generic solution.


### GitHub Setup

On your stack detail page, click _Stack information_ in the right sidebar and copy the URL provided in the _Redeployment hook_ field. Next, visit your GitHub repository, click _Settings_ in the right sidebar, and then _Webhooks & Services_ in the left sidebar.

In the _Webhooks_ window, click _Add webhook_ and paste the redeployment hook URL into the _Payload URL_ field. When you confirm by clicking _Add webhook_, GitHub will automatically test your hook with a _Ping_ and you should get a green HTTP200 response.


### Bitbucket Setup

On your stack detail page, click _Stack information_ in the right sidebar and copy the URL provided in the _Redeployment hook_ field. Next, visit your Bitbucket repository, click _Settings_ in the left sidebar, and then _Hooks_ in the settings menu that appears. In the _Select a hook_ field, select a _POST_ hook, click _Add hook_ and paste your redeployment hook URL into the field provided. Click _Save_ to confirm.


### Generic Setup

Most Git providers have a commit hook mechanism that you can use to post to the Cloud 66 redeployment hook URL. Please check your Git provider documentation for this information. If your Git provider has a non-conforming payload format (not compatible with Github or BitBucket formats) then please get in touch and we can extend our payload support!


### Invoking your redeployment hook manually

To invoke the redeployment hook manually, you can POST an HTTP request to your redeployment hook URL. You can do this in curl like this:

```
curl -X POST [your redeployment hook URL]
```





### Note

If you are manually invoking redeployments you should consider using the [Cloud 66 CommandLine Tool]({% if page.collection == "maestro" %}/maestro/references/toolbelt.html{%else%}/{{page.collection}}/references/toolbelt.html{%endif%}#redeploy-your-stack) instead, as it has additional features!
