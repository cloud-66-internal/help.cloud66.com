---
post: 
---

## Load testing

To ensure that your application performs well under pressure, you may find load testing services like [Blitz.io](http://blitz.io) or [Load Impact](http://loadimpact.com/) useful. There are also open source tools like [Siege](http://www.joedog.org/siege-home/), [AB](http://httpd.apache.org/docs/2.2/programs/ab.html) or [Minnows with Machine Guns](https://github.com/rozap/minnowswithmachineguns) to load test your applications.

We use [Fail2Ban](http://www.fail2ban.org/wiki/index.php/Main_Page) to protect your servers from malicious activity, and load testing servers often trigger security blocks. As such, before you start load testing, please [SSH to your servers](http://help.cloud66.com/managing-your-stack/ssh-to-your-server) and disable Fail2Ban temporarily by issuing `fail2ban-client stop`. Once your testing is done, you can start it again with `fail2ban-client start`.

Your application performance is dependant on many factors, such as code efficiency, server performance, networking and so on. Answering these two questions helps us gauge your requirements and recommend a custom solution:

1.  What is the desired traffic level you want to be able to handle (eg. users/sec)?
2.  What is the average response time of your application?

As an example, an application that takes 1 second to respond which is running on a server with 1 worker (thread) would need 1,000 servers to handle 1,000 concurrent connections. If your servers have 10 workers, you would need 100 servers. The more workers you have, the more resources you require, and consequently the more concurrent requests you can handle.

Determining the number of Unicorn workers you can have on your server [depends on many factors](http://stackoverflow.com/questions/11056362/unicorn-which-number-of-worker-processes-to-use) (eg. what types of operations your application is performing), so it's good to test this to find a sweet spot. You can generally test using up to 5 times the number of cores for your workers during a load test to see how it's handled (eg. 2 cores = up to 10 workers). [Set the number of Unicorn workers](http://help.cloud66.com/web-server/unicorn-rack-server) in your `config/unicorn.rb` file.

