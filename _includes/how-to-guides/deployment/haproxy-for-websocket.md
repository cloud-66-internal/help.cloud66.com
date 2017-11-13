## Usage

If you want to use [HAProxy](http://haproxy.1wt.eu/) for [WebSocket](http://en.wikipedia.org/wiki/WebSocket) with Cloud 66, you need to configure your WebSocket server on your web servers to listen to port **8080** (or **8443** for SSL).


## How it works

By default, all HAProxy servers configured by Cloud 66 will redirect all WebSocket traffic from ports **80** or **443** to ports **8080** or **8443** of your web servers.

To by pass the auto detection and traffic redirection by HAProxy, you can connect your WebSocket servers through ports **8080** and **8443** of your HAProxy server. The HAProxy server is configured to pass through all traffic on ports **8080** and **8443** to the same ports of the web servers.


### Important

 8080 and 8443 ports should be opened by default on your rails servers and HAProxy. You can verify it on the [Stack Security]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/network-configuration.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/network-configuration.html{% endif %}) page.



## Test your WebSocket servers

To test your WebSocket servers, create a `.html` file with the code below, make sure to replace *\<your_address\>* with your own LB IP address and finally, open it in a web browser.

```
<html>
  <head>
    <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js'></script>
    <script>
      $(document).ready(function(){
        function debug(str){ $("#debug").append("<p>"+str+"</p>"); };

        ws = new WebSocket("ws://your_address";);
        ws.onmessage = function(evt) { $("#msg").append("<p>"+evt.data+"</p>"); };
        ws.onclose = function() { debug("socket closed"); };
        ws.onopen = function() {
          debug("connected...");
          ws.send("hello server");
        };
      });
    </script>
  </head>
  <body>
    <div id="debug"></div>
    <div id="msg"></div>
  </body>
</html>
```

