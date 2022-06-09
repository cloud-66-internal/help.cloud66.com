## Overview

Applications deployed with Cloud 66 use [Nginx](https://nginx.com) as their web and reverse proxy server. You can customize the [default configuration](/{{page.collection}}/references/nginx.html#default-nginx-configuration) of Nginx to suit your needs.

## Editing Nginx configurations

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Configuration files*  in the **Application** panel on the right of the screen.
3. Click on the *NGINX* tab at the top of the main panel 
4. Follow the [CustomConfig instructions](/{{page.collection}}/tutorials/custom-config.html) to customize the configuration.

Editing and committing your Nginx CustomConfig will perform the following steps on **every web server in your application**, one by one, sequentially:

*   Check your template for Liquid syntax errors
*   Count the number of cores on the server
*   Compile the Nginx configuration based on the information from the server
*   Upload the configuration to the server
*   Reload Nginx

Reloading Nginx does not interrupt the serving of traffic. This process will be stopped if an error is encountered. For example, if you have 3 web servers in your application, if the first server fails to be updated, the process will be halted for the other 2 servers to avoid complete service disruption.

#### Warning
<div class="notice notice-warning"><p>A bad configuration may stop your Nginx from functioning, so take extra care when making changes.</p></div>

## Working examples 

### Customizing the Nginx error page

There are two ways for you to create a custom Nginx 50X error page:

1. Using a static page on your own server
    - Make your custom error page (for example `50x.html`) available in your container (for example in `/usr/app`), and simply mount this folder to the host (for example with `/var/containers:/usr/app`). The path used in the next step would then be `/var/containers/50x.html`
    - Customize your Nginx configuration and replace the 50X.html location block with following:  
```shell
    location = /50x.html
    {
        root /var/containers/;
    }
```

2. Using external static page
    - Upload your file to a server which is accessible from your server
    - Customize your Nginx configuration and replace the _50X.html_ location block with the following:  
```shell
    location = /50x.html
    {
        proxy_pass {url-of-your-custom-page};
    }
```

### Enabling HTTP2

Nginx supports HTTP2 and this can be enabled on your application by editing your CustomConfig as follows:

Update the `listen` directive in the `server` block from this:

```shell
server {
        listen 443;
        ssl on;
```

...to this:

```shell
server {
        listen 443 ssl http2;
```

#### Careful
<div class="notice notice-warning"><p>Be sure to remove the separate <code>ssl on</code> directive from the config, or it will not work.
</p></div>


## Need more info?
* Our [Nginx CustomConfig reference guide](/{{page.collection}}/references/nginx.html#nginx-customconfig-variables) lists all of the available variables, including boolean variables.

