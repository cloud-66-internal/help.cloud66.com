---
post: 
---

## Configuring HAProxy for maintenance mode

For **Docker stacks** you can set your HAproxy to show a maintenance page when it cannot connect to the container.

*   Create custom maintenance page
*   Upload to haproxy server using the toolbelt
*   Move the file haproxy directory
*   Configure haproxy to show the maintenance file by adding the below line to the end of the default section
