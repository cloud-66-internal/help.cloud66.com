---
menuheaders: [ "Overview", "Server Meta Data Service" ]
layout: post
template: one-col
title: Server Meta Data Service
categories: stack-management
lead: ""
legacy: true

permalink: /:collection/:path
---



## Overview

Sometimes our code needs to know a bit more about a server it is running on. Of course we are not suggesting you write code that is dependent on a specific server, but it is possible that your code needs things like: what's the IP address of this server? What version of Image Magic is it running or is tagged with a specific tag on Cloud 66 or not.

Cloud 66 Server Meta Data Service (SMDS) is a single HTTP GET endpoint that can be called from any Cloud 66 deployed server to return a great deal of information about the server and what's running on it.

This ranges from hardware to software, package and network meta data as well as Cloud 66 specific information like stack, server group, environment and tags.

This HTTP endpoint is the same for all servers and uses the caller's IP address to return the correct payload. As a result, SMDS doesn't work with some [Gateway](https://help.cloud66.works/{{ include.product }}/deployment/deployment-gateway.html) network setups (as they use NAT to share a single public IP address).


## Server Meta Data Service

The endpoint for Server Meta Data Service is `https://app.cloud66.com/api/tooling/metadata`

To see it in action, login to one of your Cloud 66 deployed servers and type the following command:

$ curl https://app.cloud66.com/api/tooling/metadata

You will see a JSON `application/json` payload returned like the following:

```
{
   "response":{
      "ips":{
         "all":[
            "46.101.23.233",
            "10.131.12.76"
         ],
         "dns_record":"crayfish.lv-sequence.c66.me"
      },
      "facts":{
         "architecture":"amd64",
         "bios_release_date":"01/01/2011",
         "bios_vendor":"Bochs",
         "bios_version":"Bochs",
         "blockdevice_vda_size":"32212254720",
         "blockdevice_vda_vendor":"0x1af4",
         "blockdevices":"vda",
         "facterversion":"1.7.5",
         "filesystems":"ext2,ext3,ext4,vfat",
         "hardwareisa":"x86_64",
         "hardwaremodel":"x86_64",
         "hostname":"c66-lv-sequence-prd-crayfish",
         "id":"root",
         "interfaces":"eth0,eth1,lo",
         "ipaddress":"46.101.23.233",
         "ipaddress_eth0":"46.101.23.233",
         "ipaddress_eth1":"10.131.12.76",
         "ipaddress_lo":"127.0.0.1",
         "is_virtual":"false",
         "kernel":"Linux",
         "kernelmajversion":"3.13",
         "kernelrelease":"3.13.0-79-generic",
         "kernelversion":"3.13.0",
         "lsbdistcodename":"trusty",
         "lsbdistdescription":"Ubuntu 16.04.4 LTS",
         "lsbdistid":"Ubuntu",
         "lsbdistrelease":"16.04",
         "lsbmajdistrelease":"16",
         "macaddress":"04:01:b5:6e:4c:01",
         "macaddress_eth0":"04:01:b5:6e:4c:01",
         "macaddress_eth1":"04:01:b5:6e:4c:02",
         "manufacturer":"Bochs",
         "memoryfree":"752.65 MB",
         "memoryfree_mb":"752.65",
         "memorysize":"994.00 MB",
         "memorysize_mb":"994.00",
         "memorytotal":"994.00 MB",
         "mtu_eth0":"1500",
         "mtu_eth1":"1500",
         "mtu_lo":"65536",
         "netmask":"255.255.192.0",
         "netmask_eth0":"255.255.192.0",
         "netmask_eth1":"255.255.0.0",
         "netmask_lo":"255.0.0.0",
         "network_eth0":"46.101.0.0",
         "network_eth1":"10.131.0.0",
         "network_lo":"127.0.0.0",
         "operatingsystem":"Ubuntu",
         "operatingsystemrelease":"16.04",
         "osfamily":"Debian",
         "path":"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
         "physicalprocessorcount":"1",
         "processor0":"Intel(R) Xeon(R) CPU E5-2630L v2 @ 2.40GHz",
         "processorcount":"1",
         "productname":"Bochs",
         "ps":"ps -ef",
         "rubysitedir":"/usr/local/lib/site_ruby/1.9.1",
         "rubyversion":"1.9.3",
         "selinux":"false",
         "serialnumber":"Not Specified",
         "sshfp_dsa":"SSHFP 2 1 8f9cc828cd5ca727d5c1c3cf61133c0015c25718",
         "sshfp_ecdsa":"SSHFP 3 1 8ad91690a1fa66332aca1a268ddd13e149a6d3cd",
         "sshfp_rsa":"SSHFP 1 1 80126adf617017742e15203468c6fed92c970aee",
         "swapfree":"3.00 GB",
         "swapfree_mb":"3070.69",
         "swapsize":"3.00 GB",
         "swapsize_mb":"3072.00",
         "timezone":"UTC",
         "type":"Other",
         "uniqueid":"007f0101",
         "uptime":"0:17 hours",
         "uptime_days":"0",
         "uptime_hours":"0",
         "uptime_seconds":"1071",
         "uuid":"FA8A86B1-8A7E-45F2-B754-0246D33E37A4",
         "virtual":"physical"
      },
      "os":{
         "distro":"ubuntu",
         "version":"16.04"
      },
      "name":"Crayfish",
      "uid":"2c63e62d8cc35a5efc9429e0dd4c0438",
      "vendor_uid":"11890152",
      "extra":{
         "region":"lon1",
         "size":"1gb",
         "ips":[
            "46.101.23.233",
            "10.131.12.76"
         ],
         "was_baselined":false,
         "cached_cores":1,
         "cached_memory":1042284544,
         "collectd_in_docker":false,
         "supports_nginx_realip":true,
         "passenger_pool_max":4,
         "live_log_file_sources":[
            "/tmp/web_server_bluepill.log",
            "/var/deploy/lv_sequence/web_head/shared/log/production.log",
            "/var/deploy/lv_sequence/web_head/shared/log/unicorn.stderr.log",
            "/var/deploy/lv_sequence/web_head/shared/log/user_scheduler_1.log",
            "/var/deploy/lv_sequence/web_head/shared/log/user_scheduler_pill.log",
            "/var/deploy/lv_sequence/web_head/shared/log/user_worker_1.log",
            "/var/deploy/lv_sequence/web_head/shared/log/user_worker_pill.log"
         ]
      },
      "cloud":{
         "vendor":"digitalocean",
         "region":"lon1",
         "availability_zone":""
      },
      "stack":{
         "name":"lv_sequence",
         "uid":"c4499b8ecfaedaf57ed8dbd867aa9881",
         "environment":"production"
      },
      "ssh_public_key": "ssh-rsa AAAAB3...8bU9 hello@cloud66.com",
      "groups":[
         "rails"
      ],
      "roles":[
         "rails",
         "web",
         "app"
      ],
      "versions":[
         {
            "name":"ruby",
            "version":"2.1.8p440"
         },
         {
            "name":"libyaml",
            "version":"0.1.4"
         },
         {
            "name":"rails",
            "version":"3.0.3"
         },
         {
            "name":"unicorn",
            "version":"4.6.2"
         },
         {
            "name":"rubygems",
            "version":"2.6.1"
         },
         {
            "name":"passenger",
            "version":"5.0.26"
         },
         {
            "name":"nginx",
            "version":"1.8.1"
         },
         {
            "name":"imagemagick",
            "version":"6.7.7-10"
         },
         {
            "name":"nodejs",
            "version":"0.10.43"
         },
         {
            "name":"ppx",
            "version":"0.3.2"
         },
         {
            "name":"kernel",
            "version":"3.13.0-79"
         }
      ],
      "tags":[

      ],
      "created_at":"2016-03-11T11:34:34Z",
      "updated_at":"2016-03-11T12:02:33Z"
   }
}
```

