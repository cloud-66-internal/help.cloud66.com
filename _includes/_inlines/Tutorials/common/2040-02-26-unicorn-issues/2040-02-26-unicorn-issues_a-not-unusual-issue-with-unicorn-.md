<!-- usedin: [ _rails/Tutorials/2017-02-26-unicorn-issues.md] -->


A not unusual issue with Unicorn is that redeployments don't reflect your code changes. As a background on this, when you redeploy your stack, we send a USR2 signal to Unicorn which tells it to:

1.  Fire up a new master in parallel
2.  Fire up new worker processes under the new master
3.  Quiet and shut down old worker processes
4.  Shut down the existing master

This mechanism allows for the zero-downtime deployments. However, if for some reason the new master or new workers can't start then the old master doesn't kill itself (in an attempt to keep the existing service running). You can verify this by issuing the following command:

	watch -n 5 'echo UNICORN:; ps aux | grep [u]nicor;'

This will list the processes run by Unicorn, refreshing every 5 seconds to help you see any updates.

You should also look at your logs in `$STACK_PATH/log/*.log` to see if there are any error messages. Based on those error messages, you'll be able to troubleshoot why new workers aren't being initiated with your updated code.
