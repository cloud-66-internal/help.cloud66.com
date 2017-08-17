<!-- post: -->


### Warning

Should you have any issues, please ensure that you are using an up-to-date version of Puma with the correct configurations.

We recommend that you run [Unicorn](/web-server/unicorn-rack-server), as you may have to handle server restarts manually with Puma.




To solve the issue of manual restarts with Puma, you can use an _after_rails_ [deploy hook](/deployment/deploy-hooks) to manually run the following command in case you find that it is not responding to the SIGUSR2 that Cloud 66 issues.



{%include _inlines/puma-rack-server/code_puma-rack-server_warning-dleexecpuma.md %}


