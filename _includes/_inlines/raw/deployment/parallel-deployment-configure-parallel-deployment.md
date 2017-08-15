## Configure parallel deployment

To activate parallel deployments, access your [Stack settings](/toolbelt/toolbelt-settings-command) via [Toolbelt](/toolbelt/toolbelt-introduction) and set `deploy.parallel` to `true`. 



{%include _inlines/path_to_code %}



Once set, any future deployments will be done in parallel. Should you wish to do a one-off deployment in serial, you can do so by clicking _Deploy_ -> _Deploy with options_ and selecting _Deploy in serial_. Similarly, if you have your stack set to deploy in serial, you can perform a one-off deploying in parallel through this menu.

Parallel deployments are activated by default for [Rack-based stacks with a custom web server](/web-server/custom-web-servers) (eg. Unicorn as it supports zero downtime restarts), but not for stacks based on Passenger.
