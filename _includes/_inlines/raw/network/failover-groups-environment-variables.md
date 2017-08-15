## Environment variables

There is an environment variable called `FAILOVER_STATUS` with three different values: `online`, `offline` and `none` which means the traffic goes to this stack, does not go to this stack or this stack is not part of any failover groups, respectively.

You may have some jobs configured on both like sending an email, but you need them to be run only on the online one you can use this environment variable to prevent duplication.
