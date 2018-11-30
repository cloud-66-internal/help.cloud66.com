---
layout: post
template: one-col
title: Using symbolic links
categories: how-to-guides/deployment
order: 40
lead: "Using symlinks in Maestro applications"
legacy: false
tags: ["customization"]

permalink: /:collection/:path
---


## Using the public folder

If it's acceptable to serve your files from your public directory, you can re-use the `public/system folder` which is already automatically symlinked to `shared/system` on each server. 

The downside of doing this is that it bypasses your application and your files get served directly by Nginx without security.


## Adding symbolic links

Alternatively, you can use [deploy hooks](/maestro/tutorials/deploy-hooks.html) to create the symbolic link. 

You can use _$STACK_BASE_ for your application base path (eg. _$STACK_BASE/shared/uploads_) for your deploy hook script.

To create the symbolic link, your deploy hook script could contain this:

```
mkdir -p $STACK_BASE/shared/uploads
chown nginx:app_writers $STACK_BASE/shared/uploads
rm -rf $STACK_PATH/uploads
ln -nsf $STACK_BASE/shared/uploads $STACK_PATH/uploads
```

The reason we are runninng `rm -rf` on the _$STACK_PATH/uploads_ directory is due to the way that the _ln_ command works. When you issue the _ln_ command, it places a link to the source directory inside the target directory, so we have to remove the directory before creating the symbolic link.

Save the script as a `.sh` file and add it to your repo. The resulting deploy hook would look like this:

```
production:
    after_symlink:
      - source: /.cloud66/my_symlink.sh
        destination: /tmp/my_symlink.sh
        target: docker
        execute: true
        sudo: true
        apply_during: all
        run_on: all_servers
```

