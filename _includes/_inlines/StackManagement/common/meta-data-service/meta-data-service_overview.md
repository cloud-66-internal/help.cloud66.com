

## Overview

Sometimes our code needs to know a bit more about a server it is running on. Of course we are not suggesting you write code that is dependent on a specific server, but it is possible that your code needs things like: what's the IP address of this server? What version of Image Magic is it running or is tagged with a specific tag on Cloud 66 or not.

Cloud 66 Server Meta Data Service (SMDS) is a single HTTP GET endpoint that can be called from any Cloud 66 deployed server to return a great deal of information about the server and what's running on it.

This ranges from hardware to software, package and network meta data as well as Cloud 66 specific information like stack, server group, environment and tags.

This HTTP endpoint is the same for all servers and uses the caller's IP address to return the correct payload. As a result, SMDS doesn't work with some [Gateway](/deployment/deployment-gateway) network setups (as they use NAT to share a single public IP address).

