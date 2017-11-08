


### Important

Some cloud providers assign a new IP address to restarted servers




Cloud 66 automatically detects the internal and external IP addresses of your servers through an agent installed on each server. This agent sends information about your server back to us at a 5 minute interval, which is used to auto-generate the `WEB_ADDRESS_INT` and `WEB_ADDRESS_EXT` environment variables (among others) when necessary.

To allow users the flexibility of choosing which one to use in their application, we also provide a WEB_ADDRESS environment variable, which by default is set to `{{WEB_ADDRESS_INT}}` but can be modified by the user.

