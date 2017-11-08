---
menuheaders: [ "What is Cloud 66 Birdseye?", "Where does the data for Cloud 66 Birdseye come from?", "Who can use Cloud 66 Birdseye?", "Is there an API?", "Get the list of all incidents", "Filtering the list", "Get a single incident", "Filtering by status", "Can I report incidents?" ]
layout: post
template: one-col
title: Cloud 66 Birdseye
categories: stack-management
lead: ""
legacy: false

permalink: /:collection/:path
---


## What is Cloud 66 Birdseye?
[Cloud 66 Birdseye](https://birdseye.cloud66.com) is a publicly availably public cloud provider health dashboard.
We collect public cloud provider health metrics from all data centers Cloud 66 deploys servers to. This data is curated and shown alongside incident data to the public for free so you can see if your cloud provider of choice is experiencing issues.


## Where does the data for Cloud 66 Birdseye come from?
The data shown on the site is collected automatically and manually by Cloud 66 and it's partners. This data is manually curated and moderated to ensure high accuracy and quality.


## Who can use Cloud 66 Birdseye?
Cloud 66 Birdseye is publicly available to everyone for free. You don't have to be a Cloud 66 customer to use or integrate its data in your application or workflow.

All we ask is to credit Cloud 66 Birdseye as the source of data when using it in your applications of workflow.


## Is there an API?
Yes. Cloud 66 Birdseye comes with a simple RESTful read-only API to consume its data.


### Get the list of all incidents


```
/incidents.json
```

With CURL:

```
$ curl https://birdseye.cloud66.com/incidents.json
```

**Result**

```
[
    {
        id: 1,
        cloud: "digitalocean",
        asof: "2014-12-31T12:13:39.000Z",
        reported_by: "Vendor",
        title: "Network Connectivity",
        status: 2,
        body: "At this time network connectivity in NYC3 has been resolved by our networking team. We appreciate your patience as we worked through this and apologize for any issues this may have cause for you. If you continue to experience any issues please open a support ticket.",
        created_at: "2014-12-27T12:14:24.000Z",
        updated_at: "2014-12-27T13:14:27.000Z",
        datacentre: null
    },
    {
        id: 2,
        cloud: "linode",
        asof: "2014-12-31T12:59:21.000Z",
        reported_by: "Vendor",
        title: "Degraded Performance",
        status: 1,
        body: "We are currently aware of an issue effecting connectivity on a small subset of hosts within our London, Fremont, and Tokyo based facilities. This is with regards to DHCP. Our administrators are currently investigating the issue.",
        created_at: "2014-12-31T13:00:03.000Z",
        updated_at: "2015-01-01T13:25:09.000Z",
        datacentre: null
    },
    {
        id: 3,
        cloud: "digitalocean",
        asof: "2014-12-31T13:07:57.000Z",
        reported_by: "Cloud 66",
        title: "Droplet creation restrictions",
        status: 0,
        body: "DigitalOcean has disabled droplet creation at their Amsterdam 1 data center below 1GB.",
        created_at: "2014-12-31T13:08:25.000Z",
        updated_at: "2014-12-31T13:08:25.000Z",
        datacentre: "AMS1"
    }
]
```

*Status*

Status is an integer number with the following mapping:

- 0 - Pending. Incident has been reported or observed.
- 1 - Investigating: Either Cloud 66 or the vendor is investigating the incident.
- 2 - Resolved: Incident is reported as resolved either by the vendor or Cloud 66.


### Filtering the list
You can filter the result for the incidents with the following filters:

- `vendor` Cloud provider's name. Valid options are `digitalocean`, `linode`, `aws`, `rackspace`, `gce`
- `dc` Cloud vendor data centre. This is case-insensitive name of the data centre where the incident is related to. For example: `ams1` or `us-east-1`. You can also use multiple data centres in a comma seperated list.
- `status` Incident status. Valid options are `pending`, `investigating`, `resolved`
- `from_date` Incident starting date filter. The valid format for the date is `YYYY-MM-DD-HH:MM:SS`
- `to_date` Incident end date filter. The valid format for the date is `YYYY-MM-DD-HH:MM:SS`
- `tags` Incident tags. Use commas to seperate multiple tags, for example: `network,images`
- `since` Date filter for the last time an incident was updated. This is useful to fetch any changes since last time incidents were checked. The valid format for the date is `YYYY-MM-DD-HH:MM:SS`

With CURL:

```
$ curl "https://birdseye.cloud66.com/incidents.json?vendor=linode&status=pending&since=2014-12-10-12:15:01"
```




### Get a single incident


```
/incidents/:id.json
```

With CURL:

```
$ curl https://birdseye.cloud66.com/incidents/2382.json
```




### Filtering by status

By default there is no filter on status of returned incidents. If you want to filter them by status, you can add the `status` parameter to the call URL. Use the following values:

- pending : returns all pending incidents
- investigating : returns all incidents being investigated
- resolved : returns all resolved incidents

For example:

```
$ curl https://birdseye.cloud66.com/incidents.json?status=pending
```

You can mix status for incidents returns, you can use a comma separated list:

```
$ curl https://birdseye.cloud66.com/incidents.json?status=pending,investigating
```

This will only return non-resolved incidents.


## Can I report incidents?
Thank you for your offer of help and support. You can report incidents to [birdseye@cloud66.com](mailto:birdseye@cloud66.com)

