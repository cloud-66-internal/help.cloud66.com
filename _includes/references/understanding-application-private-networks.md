## Overview

Application Private Networks (APNs) are account & application-specific **virtual private networks** that use [WireGuard](https://www.wireguard.com/) to facilitate encrypted VPN tunnels, both between servers themselves, and remotely from the development team. 

## The security profile of WireGuard

WireGuard uses a set of [simple but powerful protocols](https://www.wireguard.com/protocol/) to make the VPN connections it establishes both extremely secure and quite robust. 

WireGuard has also undergone (and passed) many different [formal verifications](https://www.wireguard.com/formal-verification/), including "Symbolic Verification of Protocol using Tamarin", "Computational Proof of Protocol in eCK Model" and "Computational Proof of Protocol in ACCE Model". These include checks of properties such as:

- Correctness
- Strong key agreement & authenticity
- Key-compromise impersonation resistance
- Unknown key-share attack resistance
- Key secrecy
- Forward secrecy
- Session uniqueness
- Identity hiding

WireGuard is so well regarded that it is now included in the latest Linux kernel and will soon be bundled natively into Android OS.

## Our implementation of Wireguard

Cloud 66 has scrupulously adhered to best practices in integrating WireGuard into our systems including:

- Encrypting database entries for both public and private keys for each server
- Optimal use of routing & network namespace integration
- We follow best practices in the secure distribution of all WireGuard config files

## More info

- WireGuard's [official security page](https://www.wireguard.com/protocol/) (including a technical whitepaper)

## More help

- How to [connect to your servers remotely using APN](/{{page.collection}}/tutorials/securely-accessing-applications.html)
- How to [configure APN access between servers](/{{page.collection}}/how-to-guides/security/using-application-private-networks.html)

