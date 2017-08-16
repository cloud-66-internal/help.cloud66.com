---
layout: code
post: 1930-09-26-haproxy-for-websocket_test-your-websocket-server.md
---


&lt;html&gt;
  &lt;head&gt;
    &lt;script src=&#39;http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js&#39;&gt;&lt;/script&gt;
    &lt;script&gt;
      $(document).ready(function(){
        function debug(str){ $(&quot;#debug&quot;).append(&quot;&lt;p&gt;&quot;+str+&quot;&lt;/p&gt;&quot;); };

        ws = new WebSocket(&quot;ws://your&#95;address&quot;);
        ws.onmessage = function(evt) { $(&quot;#msg&quot;).append(&quot;&lt;p&gt;&quot;+evt.data+&quot;&lt;/p&gt;&quot;); };
        ws.onclose = function() { debug(&quot;socket closed&quot;); };
        ws.onopen = function() {
          debug(&quot;connected...&quot;);
          ws.send(&quot;hello server&quot;);
        };
      });
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;debug&quot;&gt;&lt;/div&gt;
    &lt;div id=&quot;msg&quot;&gt;&lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
