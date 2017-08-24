

## Ports inside and outside containers

Your code that runs inside of a container listens to a specific port. For example a standard setup for a web server listens to port 80 for HTTP and 443 for HTTPS traffic. A normal Rails application listens to port 3000 or 9292 by default.

Here is an example of default ports used by different programming frameworks or application servers:



	

		
  <table class="table table-bordered table-striped"> 
   <thead> 
    <tr> 
     <th>Application</th> 
     <th>Default Port</th> 
    </tr> 
   </thead> 
   <tbody> 
    <tr>
     <td>Rack (webrick)</td>
     <td>3000</td>
    </tr> 
    <tr>
     <td>Rack (unicorn, thin, puma)</td>
     <td>9292</td>
    </tr> 
    <tr>
     <td>Node (Express)</td>
     <td>3000</td>
    </tr> 
    <tr>
     <td>Java (Play)</td>
     <td>9000</td>
    </tr> 
    <tr>
     <td>RethinkDB</td>
     <td>8080</td>
    </tr> 
    <tr>
     <td>InfluxDB</td>
     <td>8083, 8086, 8090, 8099</td>
    </tr> 
   </tbody> 
  </table> 




From the outside world (ie Internet) all of these applications (except for the DBs) listen to the normal HTTP (80) and HTTPS (443) ports so the site visitors don't need to enter port number in their browsers.

On a Cloud 66 for Docker stack, you can make the inside and outside ports map using the Container Port Mapping feature. It is a simple to use yet flexible feature that supports common TCP protocols like HTTP and HTTPS as well as custom TCP and UDP traffic.

