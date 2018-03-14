

## What is the custom server add-in?
Adding a custom server to your stack allows you to manage your own services while still benefiting from the Cloud 66 ecosystem.

A custom server will have the following Cloud 66 features enabled:

- [Monitoring](/{{page.collection}}/references/server-ip-addresses.html)
- Use of [Cloud 66 add-ins](/{{page.collection}}/how-to-guides/add-ins/add-in-implementation.html)
- [Log rotation]({% if page.collection == 'skycap' %}/maestro/how-to-guides/deployment/shells/setting-up-custom-livelogs.html{%else%}/{{page.collection}}//how-to-guides/deployment/shells/setting-up-custom-livelogs.html{%endif%})
- [SSH to your server via toolbelt](/{{page.collection}}/how-to-guides/deployment/shells/ssh.html)
{%if page.collection != 'rails' and page.collection != 'node' %}- [Security](/{{page.collection}}/tutorials/service-networking.html){%endif%}

## Add a custom server
To add a custom server, access the add-ins menu and click _Custom Server_. You will then be able to choose the size of your new server and how many you'd like to add. Once your server is added, you'll be able to see and manage it as part of your stack.