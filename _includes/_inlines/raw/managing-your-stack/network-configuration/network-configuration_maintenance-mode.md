---
post: 
---

### Maintenance mode

When you have to make manual changes to your application or push out a breaking change, you may not be able to guarantee that your application will be able to serve content or act correctly.

During such times, you can set your stack into _maintenance mode_, which puts up a holding page (either a default Cloud 66 page, or your own) for the duration of your maintenance work.

You can still safely redeploy your stack while maintenance mode is enabled - the maintenance page will be served until you turn off maintenance mode on your stack.

To supply your own maintenance page, simply place your file in the following path of your repository:

You can find it in *Stack page* --> *Network settings* --> *Redirects* tab



{%include _inlines/network-configuration/code_network-configuration_maintenance-mode-cloudmaint.md %}



