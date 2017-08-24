<!-- usedin: [ _legacy_docker/stack-management] - post: -->


## How does Cloud 66 determine my server needs a restart?

The unattended-upgrades package signals to the operating system that a restart is required by creating a file _/var/run/reboot-required_. Cloud 66 will check periodically if this file is present and bring that forward into the UI. 

