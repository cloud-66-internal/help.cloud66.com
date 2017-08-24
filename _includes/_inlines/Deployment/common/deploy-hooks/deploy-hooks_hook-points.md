

# Hook points

The deployment process is divided into a number of steps, and hook points allow you to intervene at various points during this process.





<table class="table table-bordered table-striped table-small"> 
   <tbody> 
    <tr> 
     <td> <strong>Hook point</strong> </td> 
     <td> <strong>Description</strong> </td> 
    </tr> 
    <tr> 
     <td> first_thing </td> 
     <td> The first thing (after after_checkout) that will happen on the server. A common use-case for this hook is to install packages to run your application </td> 
    </tr> 
    <tr> 
     <td> after_checkout </td> 
     <td> When we create your server, your code is pulled directly from Git to it. Use this hook if you want to make a change to your code after it is pulled (but before anything else). Happens during the code deployment of your application </td> 
    </tr> 
    <tr> 
     <td> before_ <em>x</em> </td> 
     <td> This hook will run before a server component is installed on your server. Accepted values for <em>x</em>: <em>redis</em>, <em>mysql</em>, <em>postgresql</em>, <em>mongodb</em> </td> 
    </tr> 
    <tr> 
     <td> after_ <em>x</em> </td> 
     <td> This hook will run after a server component is installed on your server. Accepted values for <em>x</em>: <em>redis</em>, <em>mysql</em>, <em>postgresql</em>, <em>mongodb</em> </td> 
    </tr> 
    <tr> 
     <td> before_rails </td> 
     <td> This hook will run before Rails is installed on your server </td> 
    </tr> 
    <tr> 
     <td> after_bundle </td> 
     <td> This hook will run after bundle but before other rake tasks, such as database migrations. Happens during the code deployment of your application 
      <div class="notice notice-warning"> 
       <strong> Note:</strong> Set for this if you need to run deploy hooks that are invoked before the symlink is updated on the release path 
      </div> </td> 
    </tr> 
    <tr> 
     <td> after_symlink </td> 
     <td> Runs after the symbolic link to your current code folder has been created <p> Happens during the code deployment of your application </p> </td> 
    </tr> 
    <tr> 
     <td> custom_server </td> 
     <td> This hook will run on your custom servers </td> 
    </tr> 
    <tr> 
     <td> after_rails </td> 
     <td> This hook will run after Rails (and everything web related) is installed on your server </td> 
    </tr> 
    <tr> 
     <td> before_agent </td> 
     <td> This hook will run before the Cloud 66 agent is installed on your server </td> 
    </tr> 
    <tr> 
     <td> after_agent </td> 
     <td> This hook will run after the Cloud 66 agent is installed on your server </td> 
    </tr> 
    <tr> 
     <td> last_thing </td> 
     <td> This hook will run as the last thing that happens on your server </td> 
    </tr> 
   </tbody> 
  </table> 




* * *

