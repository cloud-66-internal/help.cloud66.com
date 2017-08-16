---
post: 
---

### For Docker Stacks

Docker Stacks can have multiple services which can rely on a combination of either Image or Git sources. Furthermore, the Git sources can be the same or different branches, or even completely different repositories. To handle this, we have introduced and addition _services modifier_ that can be appended to the redeployment hook tp specify which services to redeploy (the _services modifier_ is a querystring parameter).

When a redeployment hook is invoked:

1.    If the commit hook payload includes Git information (Git source, branch and/or reference) then we will attempty to find a matching service on your stack that corresponds to the above information. If there is a match then we will deploy _only_ the services that have a Git type (_not_ the Image based services). Note that the matching service will also build based on the Git ref that is present in the payload.
2.    If the commit hook payload does not include Git information, then we will automatically redeploy _all_ services defined on your stack.
3.    If you use the **services** modifier to specify which specific services you want to deploy when the commit hook is invoked, then the same logic applies as in 1) and 2) above, the only difference being that we will always deploy the services you have specified if deployment will occur.

Some examples below will illustrate how to add a **services modifier**. Note that the xxxx/yyyy in the examples is for illustrative purposes only and should be replaced with your redeployment URL on your stack information page.
An example redeployment hook **without a services modifier:**



{%include _inlines/redeployment-hook/code_redeployment-hook_for-docker-stacks-tpshooksc.md %}



An example redeployment **hook with a single services modifier:**



{%include _inlines/redeployment-hook/code_redeployment-hook_for-docker-stacks-tpshooksc-2.md %}



An example redeployment **hook with a many-service modifier:**



{%include _inlines/redeployment-hook/code_redeployment-hook_for-docker-stacks-tpshooksc-2-3.md %}



