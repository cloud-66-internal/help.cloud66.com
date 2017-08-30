---
menuheaders: [ "1. Set a failover group ", "2. Add a CNAME record in your DNS provider dashboard ", "Note:", "3. Database backup", "4. Clone primary stack", "5. Add your database to backup stack", "6. Set up a replication between two stacks", "7. Add the second stack to the failover group", "Note:", "8. Put the primary site in to maintenance mode:", "9. Change the second database master", "10. Switch to the new stack", "11. [OPTIONAL]Switch your DNS record to the new stack" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_there-are-various-reasons-for-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_1-set-a-failover-group-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_2-add-a-cname-record-in-your-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_note-2-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_3-database-backup-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_4-clone-primary-stack-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_5-add-your-database-to-backup-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_6-set-up-a-replication-betwee-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_7-add-the-second-stack-to-the-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_note-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_8-put-the-primary-site-in-to-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_9-change-the-second-database-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_10-switch-to-the-new-stack-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_11-optionalswitch-your-dns-v1.md" ]
layout: post
template: one-col
title: How to migrate your stack
categories: Tutorials
lead: ""
legacy: false

keywords: []
permalink: /:collection/:path
---



{% include _inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_there-are-various-reasons-for-v1.md  product = page.collection %}
{% include _inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_1-set-a-failover-group-v1.md  product = page.collection %}
{% include _inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_2-add-a-cname-record-in-your-v1.md  product = page.collection %}
{% include _inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_note-2-v1.md  product = page.collection %}
{% include _inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_3-database-backup-v1.md  product = page.collection %}
{% include _inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_4-clone-primary-stack-v1.md  product = page.collection %}
{% include _inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_5-add-your-database-to-backup-v1.md  product = page.collection %}
{% include _inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_6-set-up-a-replication-betwee-v1.md  product = page.collection %}
{% include _inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_7-add-the-second-stack-to-the-v1.md  product = page.collection %}
{% include _inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_note-v1.md  product = page.collection %}
{% include _inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_8-put-the-primary-site-in-to-v1.md  product = page.collection %}
{% include _inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_9-change-the-second-database-v1.md  product = page.collection %}
{% include _inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_10-switch-to-the-new-stack-v1.md  product = page.collection %}
{% include _inlines/Tutorials/common/2015-08-20-migrate-the-stack/2015-08-20-migrate-the-stack_11-optionalswitch-your-dns-v1.md  product = page.collection %}