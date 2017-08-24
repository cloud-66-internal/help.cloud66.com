

## Custom Nginx error page

There are two ways for you to create a custom Nginx 50X error page:

1. Using a static page on you own server
    - For Docker stacks, make your custom error page (for example `50x.html`) available in your container (for example in `/usr/app`), and simply mount this folder to the host (for example with `/var/containers:/usr/app`). The path used in the next step would then be `/var/containers/50x.html`
    - Customize your Nginx configuration and replace the 50X.html location block with following:
    
        ``
    location = /50x.html
    {
        root /var/containers/;
    }
    ``
1. Using external static page
    - Upload your file to a server which is accessible from your server
    - Customize your Nginx configuration and replace the _50X.html_ location block with following:
    
        ``
    location = /50x.html
    {
        proxy_pass {url-of-your-custom-page};
    }
    ``
