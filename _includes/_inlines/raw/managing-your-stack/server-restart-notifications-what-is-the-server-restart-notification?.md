## What is the server restart notification?

When Cloud 66 provisions your server we will automatically install and configure the unattended-upgrades package. This package is responsible for automatically applying security patches that are released by the Ubuntu package maintainers. Sometimes a package will be updated that impacts an already running process on your box, and the only way to update the already running process is to restart it. 

However, there is no generic way that the package manager can restart all affected processes, so it instead marks your system with a “restart required” flag, requesting user action to reboot the server (such that all affected processes are restarted). Unattended-upgrades could be configured to perform the restart automatically, but in any normal environment this is obviously not desirable! 

For affected servers, when you connect to your server you will see a notification in your console provided by your operating system of the form: *** System restart required ***. Cloud 66 brings the server notifications forward in your dashboard so that you can see via the UI when a package upgrade has resulted in a server restart request.

