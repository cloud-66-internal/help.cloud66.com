<!-- post: -->


## New Status Alerts

Additionally, there are three alerts that can be enabled at stack level that will notify whenever the web server is detected as "Started", "Stopped" or "Unmonitored"

Started alerts are self explanatory and will fire whenever your web application goes from any other state to "Started". Stopped alerts indicate that your web application has gone to a "Stopped" state. This usually means that it has failed for some reason. From this state, Bluepill will automatically try and restart the application. Unmonitored alerts indicate that Bluepill is no longer controlling your web process, and this typically happens when Bluepill needs to reload your application (for environment variable changes for example) or when your application itself dissappears completely (in the case of Out Of Memory killer for example).

To stop potential infinite alerting if your application is flipping between states due to errors, we will send a maximum of 3 "Stopped" or "Unmonitored" alerts until such a time as a "Started" state is achieved.
