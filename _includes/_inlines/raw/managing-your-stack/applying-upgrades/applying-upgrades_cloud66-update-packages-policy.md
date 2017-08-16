---
post: 
---

## Cloud66 Update Packages Policy

Cloud 66 aims to make it easier to build [immutable infrastructure](http://www.chadfowler.com/2013/06/23/immutable-deployments/). Building servers and stacks from scratch is much better than modifying existing server configurations and tinkering with settings until things start to work.

Of course everyone knows that, the reasons they don't do it is that it's difficult, time consuming and can be unpredicatble. That's why we want to make building stacks from scratch as easy and as quick as possible. So in all cases of upgrade, our first recommendation is to build a new stack and redirect your traffic to the new stack using our [Elastic Address](/network/failover-groups).

We are always working to make it easier to build a new stack, move your data and switch your traffic arround but it might not always be what you want to do or as easy as you would like it to be. So here is what we suggest as alternatives and exceptions.

Based on that our workflow is such that when a new server is created we automatically update all the packages to the latest. After the server is created we only auto-install packages that are marked as `security updates`. So Cloud66 doesn't typically update other packages because it doesn't want to risk breaking or damaging your already running app (which doesn't apply when the server is newly created).

In order to deal with the upgrades you have a few options:

1.  Leave the package updates, safest bet or if you're concerned about your app stability.
2.  Update the packages yourself through `sudo apt-get -y upgrade` or `dist-upgrade` package (if there is a new feature you're after or just want to be running the latest)
3.  Update the packages indirectly through scaling up a new server, and then dropping the old one (the new server will always get the latest packages installed on it)



