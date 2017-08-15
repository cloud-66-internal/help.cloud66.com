# Hook points

The deployment process is divided into a number of steps, and hook points allow you to intervene at various points during this process.





	
**Hook point**

	
**Description**





	
first&#95;thing

	
The first thing (after after_checkout) that will happen on the server. A common use-case for this hook is to install packages to run your application.





	
after&#95;checkout

	
When we create your server, your code is pulled directly from Git to it. Use this hook if you want to make a change to your code after it is pulled (but before anything else). Happens during the code deployment of your application.





	
before&#95;_x_

	
This hook will run before a server component is installed on your server. Accepted values for _x_: _redis_, _mysql_, _postgresql_, _mongodb_





	
after&#95;_x_

	
This hook will run after a server component is installed on your server. Accepted values for _x_: _redis_, _mysql_, _postgresql_, _mongodb_





	
before&#95;rails

	
This hook will run before Rails is installed on your server.





	
after&#95;bundle

	
This hook will run after bundle but before other rake tasks, such as database migrations. Happens during the code deployment of your application.
	

	 **Note:** Set for this if you need to run deploy hooks that are invoked before the symlink is updated on the release path.
	






	
after&#95;symlink

	
Runs after the symbolic link to your current code folder has been created.   

Happens during the code deployment of your application.





	
custom&#95;server

	
This hook will run on your custom servers.





	
after&#95;rails

	
This hook will run after Rails (and everything web related) is installed on your server.





	
before&#95;agent

	
This hook will run before the Cloud 66 agent is installed on your server.





	
after&#95;agent

	
This hook will run after the Cloud 66 agent is installed on your server.





	
last&#95;thing

	
This hook will run as the last thing that happens on your server.






* * *

