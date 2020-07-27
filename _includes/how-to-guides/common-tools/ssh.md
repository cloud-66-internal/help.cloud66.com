## How Toolbelt SSH works

Toolbelt detects your IP, temporarily allows that IP through the firewall and then tunnels through to the server via SSH. There are some common issues that can occur with this process, which this guide addresses.

### Have you recently restarted your server?

<div class="notice"><p>
Cloud providers frequently change the public IP addresses of servers when they are restarted. This includes all events that require the server to be shut down - including things like adding more capacity, or upgrading software components. This can (temporarily) cause our firewall to block connections to or from that server until our system detects the IP change and updates the firewall rules. This problem should resolve itself within a few minutes. If you'd like to avoid this issue completely, we recommend buying static IP addresses from your cloud provider for use with mission critical servers.
</p></div>


## Debugging using verbose mode

Verbose mode gives you more information on the SSH command running. It is a good way of finding out more detail about what is preventing SSH from working. To run the SSH in verbose mode, use the following command:

```bash
cx ssh -vvv -s <APP_NAME> -e <ENVIRONMENT> <SERVER_NAME>
```


## Cloud provider's firewall API has delay

API delays with cloud firewalls can cause SSH to fail. This can often be solved by adding a short delay between the firewall request (`lease`) and the SSH attempt using the command below:

```bash
cx lease -s <APP_NAME> -e <ENVIRONMENT> -p 22 -t 10
sleep 10
cx ssh -s <APP_NAME> -e <ENVIRONMENT> <SERVER_NAME>
```

## Detected IP is different

Toolbelt detects your public IP, but some network providers may use a different IP addresses for different ports, or obscure your actual IP address in other ways, which will cause the firewall to block your attempts to SSH. 

To get around this, you will need to temporarily open your server to traffic from all IP addresses using the command below:

```bash
cx lease -s <APP_NAME> -e <ENVIRONMENT> -p 22 -t 10 -f 0.0.0.0/0
cx ssh -s <APP_NAME> -e <ENVIRONMENT> <SERVER_NAME>
```


## Prompted for password

If you are being prompted for the password using Toolbelt, it means either your user account doesn't exist on the server, or the key you are using doesn't match the one on the server. This can be because of an incomplete key on the server. 

In order to fix either of these issues, you will need an account admin to remove your user permission from that application and re-add your user again. This will push your "new" user account to the servers and should solve this issue.

#### Note
<div class="notice notice-warning"><p>Adding your user to servers may take up to 20 minutes as it is running in the background.</p></div>

