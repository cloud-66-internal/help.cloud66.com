## What is the custom server add-in?
Adding a custom server to your application allows you to manage your own servers while still benefiting from the Cloud 66 ecosystem.

## Add a custom server

To add a custom server:

1. Open the **Application Overview** from the [Dashboard](https://app.cloud66.com/dashboard).
2. Click *Explore Add-ins* or the green **+** in the **Add-ins** panel
3. Click on *Install Now* under **Custom Server**
4. A panel will slide out from the left with options. Configure as needed and then click *Add Server* to continue.

You can now watch the logs, as usual to see the progress of the process. Once your server is added, you'll be able to see and manage it as part of your application.

## Cloud 66 features on custom servers

A custom server will have the following Cloud 66 features enabled:

- [Monitoring](/{{page.collection}}/references/server-ip-addresses.html)
- Use of [Cloud 66 add-ins](/{{page.collection}}/how-to-guides/add-ins/add-in-implementation.html)
- [Log rotation]({% if page.collection == 'maestro' %}/maestro/how-to-guides/build-and-config/setting-up-custom-livelogs.html{%else%}/{{page.collection}}/how-to-guides/deployment/setting-up-custom-livelogs.html{%endif%})
- [SSH to your server via toolbelt]({% if page.collection == "maestro" %}/maestro/how-to-guides/common-tools/ssh.html{%else%}/{{page.collection}}/how-to-guides/common-tools/ssh.html{%endif%})
{%if page.collection == 'maestro' %}- [Security](/maestro/how-to-guides/build-and-config/service-networking.html){%endif%}

