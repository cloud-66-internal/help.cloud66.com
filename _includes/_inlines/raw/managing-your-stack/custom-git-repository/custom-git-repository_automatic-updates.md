---
post: 
---

## Automatic updates

One of the most powerful features of CustomConfig is the automatic updates that are applied to your stacks. For example if there is an improvement in the way nginx is configured or a security patch is released to HAProxy which requires configuration change, Cloud 66 will automatically make those changes to your CustomConfig files.

This is done by committing the changes to the CustomConfig git repository by Cloud 66. Those changes are visible on your git history and are performed by `git@cloud66.com` user.
