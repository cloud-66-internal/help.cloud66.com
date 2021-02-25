---
layout: post
template: one-col
title: Configuring Service storage
categories: how-to-guides/build-and-config
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
    volumes: ["/tmp/foo:/tmp/host/foo", "/tmp/bar:/tmp/host/bar:ro"]
```

This is the equivalent expanded form of the example above:
```yaml
services:
  <service_name>:
    volumes:
    - mount_path: "/tmp/host/foo"
      host_path: 
        path: "/tmp/foo"
    - mount_path: "/tmp/host/bar"
      read_only: true
      host_path: 
        path: "/tmp/bar"
```

## Adding Secret and/or ConfigMap storage volumes

Cloud 66 has a specific syntax to allow you to generate a [Kubernetes Secret](https://kubernetes.io/docs/concepts/configuration/secret/) (or [Kubernetes ConfigMap](https://kubernetes.io/docs/concepts/configuration/configmap/)), and mount them to a path inside your service containers - making them available in a local folder your service application. 

You can choose whether to populate the mounted folder from a Secret or ConfigMap - the contents of which are automatically generated from your application [ConfigStore](/maestro/how-to-guides/build-and-config/config-store.html) or [Environment Variables](/maestro/how-to-guides/build-and-config/env-vars-advanced.html). 

Optionally you can filter the included values based on a tag/metadata filter. The filter must be of the syntax `key=value` ie. `foo=bar`. When applied to ConfigStore entries, it will match based on the entry metadata. When applied to Environment Variables, it will match based on [tags](/maestro/how-to-guides/deployment/tagging-components.html).

<div class="notice notice-warning"><p>Because Secret and ConfigMap stores are not reference service-specific, you can not use service-level Environment Variables.</p></div>

The following examples illustrate your options: 

```yaml
services:
  <service_name>:
    volumes:
    # Include all ConfigStore into a Secret
    # and mount it in your container at: "/secret-config-store" 
    - mount_path: "/secret-config-store"
      secret: 
        from: "config_store"
    # Include all Environment Variables into a ConfigMap
    # and mount it in your container at: "/config-map-env-vars" 
    - mount_path: "/config-map-env-vars"
      config_map:
        from: "env_vars"
    # Include ConfigStore entries with metadata matching "mount=true" into a Secret
    # and mount it in your container at: "/secret-config-store-filtered" 
    - mount_path: "/secret-config-store-filtered"
      secret:
        from: "config_store"
        filter: "mount=true"
```

## Adding custom storage volumes (advanced)

If you need to connect a container to a non-standard volume (for example NFS), Maestro supports all the same [volume types as Kubernetes.](https://kubernetes.io/docs/concepts/storage/volumes/#types-of-volumes) 

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