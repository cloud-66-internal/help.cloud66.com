### Step 4: Open port 4040 to access Weave Scope

Weavescope will run on port 4040 which is not exposed to the outside world by default, which is a good thing. Make sure port 4040 is only accesible by your own IP-address. In order to access the UI of Weave Scope you have to enable port 4040 on your [stack firewall](http://help.cloud66.com/managing-your-stack/stac).

**WARNING!** 
Don't expose 4040 to the whole world to see. With weavescope you can control all your running containers and execute commands inside running containers. Take good care of those powers!
