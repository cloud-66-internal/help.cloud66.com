
By default, Cloud66 will not delete servers and other objects created in your cloud after you delete the application. However, you can change this setting.

If you go to the **Settings & Information** page and select `Remove physical servers when a Cloud66 server is deleted?`, then when you delete a server, load balancer, or even a whole application, related objects in the cloud will be deleted as well.

#### Note
<div class="notice notice-danger">
    <p>Physical server deletion is not instant; it can currently take up to 24 hours for the removal to occur.</p>
</div>

Cloud66 creates different objects depending on which cloud provider you use. For some clouds, Cloud66 creates items at the account level (such as the SSH key for the _Packet_ cloud), which will not be deleted after application deletion. You should clear them manually if you don't need them for other applications anymore.

Here is the list of items (Deleted/Not Deleted) depending on the cloud:

### AWS
`Deleted:` Instances, Load Balancers, Security Groups, Key Pairs

### Rackspace
`Deleted:`  Servers, Load Balancers, Block storage volumes

### Digitalocean
`Deleted:` Servers, SSH Keys

### GCE
`Deleted:` VM Instances, Disks, Forwarding Rules, Target Pools

`Not Deleted:` Firewall Rules

### Linode
`Deleted:` Servers, NodeBalancers

### Azure
`Deleted:` Virtual Machines, Cloud Services, Storage, Traffic Manager

`Not Deleted:` Networks

### Packet
`Deleted:` Devices, Projects

`Not Deleted:` SSH Keys
