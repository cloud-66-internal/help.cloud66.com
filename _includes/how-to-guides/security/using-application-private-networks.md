## Overview

An Application Private Network (APN) is a private, encrypted network running in parallel with your standard network - essentially a VPN for your application. Every Cloud 66 application automatically has an APN installed. This allows you to:

- Securely access your servers over an encrypted tunnel
- (More) securely exchange data between your application servers
- Connect the servers of different Cloud 66 applications to one another over a secure (encrypted) tunnel regardless of where they are hosted (including different regions and/or different cloud providers)

By completely eliminating the need for your servers to have any direct, public-facing network access, your APN can make your servers exponentially more secure. APNs run on [WireGuard](https://www.wireguard.com/), a [very simple but very secure virtual](/{{page.collection}}/references/understanding-application-private-networks.html) private network (VPN) tunnel.

## Configuring your APN

All Cloud 66 accounts have an APN automatically configured, and servers for each application are allocated to an [APN-specific IP-range](#apn-specific-ip-ranges--private-dns). 

Each time you add servers to an application, this configuration is automatically updated to include them. The only manual configuration required is to your firewall if you need to access your APN from an external IP (see below)

#### Note
<div class="notice"><p>If you're accessing your servers remotely via the WireGuard client, you will need to download a new config file whenever you add new servers to your app.</p></div>

### Allowing access via your firewall

There are two ways to allow access your APN via your firewall:

1. Temporarily, via the APN settings page for your application
2. Permanently via your firewall settings page

**Method 1** opens your firewall to APN access for 24 hours. To do this:

- Open the Application Overview page for the application in question
- Click on *Network* in the right-hand column
- Click on the *Application Private Network* tab
- Click the *Lease Now* button

This creates a 24-hour lease based on the (current) local IP address of your computer.

**Method 2** requires you to manually add a firewall rule. WireGuard (and thus your APN) runs over **port 51820** and uses **UDP**. Please follow our [tutorial on adding firewall rules](/{{page.collection}}/tutorials/firewall-rule.html) for help on how to do this.

## Accessing your servers remotely via APN

Please follow our "Accessing servers securely" tutorial and you will be up and running in under 5 mins. All you need is: 

- An existing app on Cloud 66
- A [WireGuard client](https://www.wireguard.com/install/)
- A firewall rule or temporary lease (see above)

## Exchanging data between servers via APN

Servers can exchange data securely simply by using their APN-specific IP-range. All of the traffic exchanged across these IP addresses runs over the encrypted APN tunnels between servers. 

This means that, even if someone gained access to the private IP range of your servers, they would be unable to decrypt this traffic without the private keys of each server (which we store in encrypted format). 

## APN-specific IP ranges & private DNS

Each application under your Cloud 66 account has a range of (private) IP addresses over which the APN traffic flows.

You can find the IP address of a server on your Cloud 66 Dashboard:

1. Open the Application Overview page for the application in question
2. Click on *Network* in the right-hand column
3. Click on the *Application Private Network* tab
4. You'll see a list of your servers, each with their APN-specific IP address

### Private DNS

The APN also has a private DNS based on the names of the servers that allows you to route internal application traffic more easily (without having to use IP addresses). You'll find these domain names for each server in the same place and their APN IP addresses (see above).

The format is always: `<name of server>.apn`

You'll notice that there is also a DNS entry that uses the **application's private domain name.** This allows applications to communicate with each other without namespace collisions. 

## More help

- How to [connect to your servers remotely using APN](/{{page.collection/tutorials/securely-accessing-applications.html}})
- A [reference guide to APNs](/{{page.collection}}/references/understanding-application-private-networks.html) (including security specifications)