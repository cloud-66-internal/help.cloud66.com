---
layout: post
template: one-col
title: Configuring Service storage
categories: how-to-guides/deployment
order: 20
lead: "How to add persistent storage to your application"
legacy: false
tags: ["operations", "storage"]
permalink: /:collection/:path:output_ext
---

## Overview

Given the ephemeral nature of containers, it’s important to consider storage solutions to avoid data loss. We suggest mounting volumes from your container to the host.

## Adding simple storage volumes

The `volumes` directive of the `service.yml` allows you to mount custom host folders inside your container. This is useful if you need to run a database service for instance, as data written to the local filesystem of your container will not be persisted between container instances.

The **volumes** option is expressed as a comma separated list with the following form: `HOST_FOLDER:CONTAINER_FOLDER`.

You can optionally add `ro` or `rw` to specify that the container can read/write to the host folder (the default is read/write).

### Note

<div class="notice notice-warning"><p>Paths must be absolute.</p></div>

```yaml
services:
    <service_name>:
        volumes: ["/tmp:/tmp_host", "/readonly/folder:/mnted_readony:ro"]
```

## Adding advanced storage volumes

If you need to connect a container to a non-standard volume (for example nfs), Maestro supports all the same [volume types as Kubernetes.](https://kubernetes.io/docs/concepts/storage/volumes/#types-of-volumes) 

Advanced storage volumes are also defined in YAML format, but in a more verbose syntax. Our "simple" example above, [using hostPath](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath), would be written as:

```yaml
services:
  <service_name>:
    volumes:
    - mount_path: "/tmp"
      host_path: 
        path: "/tmp_host"
```

Maestro supports all Kubernetes-valid syntax for volume definitions.  For example an [emptyDir volume](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir)  would look something like:

```yaml
services:
  <service_name>:
    volumes:
    - mount_path: "/cache"
      empty_dir:
        medium: "Memory"
```

This would mount an emptyDir volume in the `/cache` folder of your container(s) and that volume would use RAM for storage instead of the disk (because `medium` is set to "memory").

### Volume settings

Maestro supports the following general settings for all volume-types:

<table class='table table-bordered table-striped'>
	<thead>
	<tr>
		<th width="20%">Option</th>
		<th width="10%">Format</th>
		<th width="70%">Description</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>mount_path</td>
		<td>string</td>
		<td>Path within the container at which the volume should be mounted. Must not contain <code>:</code></td>
	</tr>
	<tr>
		<td>mount_propagation</td>
		<td>string</td>
		<td>Determines how mounts are propagated from the host to container and the other way around. When not set, <code>None</code> is used.
</td>
	</tr>
	<tr>
		<td>read_only</td>
		<td>boolean</td>
		<td>Mounted read-only if true, read-write otherwise. Defaults to false.</td>
	</tr>
	<tr>
		<td>sub_path</td>
		<td>string</td>
		<td>The path within the volume from which the container's volume should be mounted. Defaults to <code>""</code> (volume's root). Mutually exclusive with <code>sub_path_expr</code>.</td>
	</tr>
	<tr>
		<td>sub_path_expr</td>
		<td>string</td>
		<td>Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to <code>sub_path</code> but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to <code>""</code> (volume's root). Mutually exclusive with <code>sub_path</code>.</td>
	</tr>
	</tbody>
</table>



For more information on any of these settings, please consult the [official Kubernetes docs](https://kubernetes.io/docs/concepts/storage/volumes/) about volumes.