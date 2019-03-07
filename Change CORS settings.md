### Change CORS settings

Cross Origin Resource Sharing (CORS) is a mechanism that allows web assets (e.g. fonts, JavaScript etc.) to be requested from domain(s) outside the domain on which a webpage is running. So a site running on www.mysite.com could request a font from www.free-fonts.com. 

Normally this kind of request between different servers would be blocked due to security concerns, but CORS allows you to set up exceptions that make such sharing possible.

<div class="Tabs Tabs--enclosed">
    <nav>
      <ul class="TabMini js_tabs">
        <li class="TabMini-item active">
          <a href="#V2-First" class="TabMini-link">
            Maestro V2
          </a>
        </li>
        <li class="TabMini-item">
          <a href="#V1-First" class="TabMini-link">
            Maestro V1
          </a>
        </li>
      </ul>
    </nav>

<section id="V2-First" class="Tabs-content js_tab_content">

<p>Stuff</p>

</section>

<section id="V1-First" class="Tabs-content js_tab_content is-hidden">

To get started, open up your `manifest.yml` file in a text editor and enter the following:

```
production:
 docker:
  configuration:
   nginx:
    cors:
     origin: '*'
     methods: 'GET, OPTIONS'
```

Now that your `manifest.yml` file is in place under your `.cloud66` folder, you can commit this file to your Git repository and deploy a new instance of your application with it.

Although redeploying your application will set the configuration settings for the stack, it will not automatically push down all the changes to your Nginx servers. To force Nginx configuration changes to be pushed to your servers, we can use a stack setting in the [Cloud 66 toolbelt] called `reconfigure.nginx`. Simply use the following command to push the change (replacing `my_stack` with your stack name):

```
$ cx settings set -s my_stack reconfigure.nginx true
```

This will force your Nginx configuration to be rebuilt during the next redeployment. Once you redeploy, the CORS settings will be updated on your web servers.

        </section>
</div>
