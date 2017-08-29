---
menuheaders: [ "Contents", "What is the database backup add-in?", "Backup types", "Managed backups", "Unmanaged backups", "Backup format", "Binary", "Text", "Backup schedule", "Compression", "Exclude tables", "Install on replica", "Note", "Note", "Downloading backup", "Cloud 66 toolbelt", "Download script", "Manually download", "Restore backup", "Mysql", "Note", "Postgresql", "    Note", "Redis", "Note", "MongoDB", "Pricing" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_contents.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_what-is-the-database-backup-add-in.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_backup-types.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_managed-backups.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_unmanaged-backups.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_backup-format.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_binary.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_text.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_backup-schedule.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_compression.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_exclude-tables.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_install-on-replica.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_noteA.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_noteB.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_downloading-backup.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_cloud-66-toolbelt.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_download-script.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_manually-download.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_restore-backup.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_mysql.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_noteC.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_postgresql.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_noteD.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_redis.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_note.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_mongodb.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/database-backups_pricing.md" ]
layout: post
template: one-col
title: Database Backup
categories: AddOns
lead: ""
legacy: false

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}


<a name="2"></a>{% include _inlines/AddOns/common/database-backups/database-backups_what-is-the-database-backup-add-in.md  product = product %}
<a name="3"></a>{% include _inlines/AddOns/common/database-backups/database-backups_backup-types.md  product = product %}
<a name="4"></a>{% include _inlines/AddOns/common/database-backups/database-backups_managed-backups.md  product = product %}
<a name="5"></a>{% include _inlines/AddOns/common/database-backups/database-backups_unmanaged-backups.md  product = product %}
<a name="6"></a>{% include _inlines/AddOns/common/database-backups/database-backups_backup-format.md  product = product %}
<a name="7"></a>{% include _inlines/AddOns/common/database-backups/database-backups_binary.md  product = product %}
<a name="8"></a>{% include _inlines/AddOns/common/database-backups/database-backups_text.md  product = product %}
<a name="9"></a>{% include _inlines/AddOns/common/database-backups/database-backups_backup-schedule.md  product = product %}
<a name="10"></a>{% include _inlines/AddOns/common/database-backups/database-backups_compression.md  product = product %}
<a name="11"></a>{% include _inlines/AddOns/common/database-backups/database-backups_exclude-tables.md  product = product %}
<a name="12"></a>{% include _inlines/AddOns/common/database-backups/database-backups_install-on-replica.md  product = product %}
<a name="13"></a>{% include _inlines/AddOns/common/database-backups/database-backups_noteA.md  product = product %}
<a name="14"></a>{% include _inlines/AddOns/common/database-backups/database-backups_noteB.md  product = product %}
<a name="15"></a>{% include _inlines/AddOns/common/database-backups/database-backups_downloading-backup.md  product = product %}
<a name="16"></a>{% include _inlines/AddOns/common/database-backups/database-backups_cloud-66-toolbelt.md  product = product %}
<a name="17"></a>{% include _inlines/AddOns/common/database-backups/database-backups_download-script.md  product = product %}
<a name="18"></a>{% include _inlines/AddOns/common/database-backups/database-backups_manually-download.md  product = product %}
<a name="19"></a>{% include _inlines/AddOns/common/database-backups/database-backups_restore-backup.md  product = product %}
<a name="20"></a>{% include _inlines/AddOns/common/database-backups/database-backups_mysql.md  product = product %}
<a name="21"></a>{% include _inlines/AddOns/common/database-backups/database-backups_noteC.md  product = product %}
<a name="22"></a>{% include _inlines/AddOns/common/database-backups/database-backups_postgresql.md  product = product %}
<a name="23"></a>{% include _inlines/AddOns/common/database-backups/database-backups_noteD.md  product = product %}
<a name="24"></a>{% include _inlines/AddOns/common/database-backups/database-backups_redis.md  product = product %}
<a name="25"></a>{% include _inlines/AddOns/common/database-backups/database-backups_note.md  product = product %}
<a name="26"></a>{% include _inlines/AddOns/common/database-backups/database-backups_mongodb.md  product = product %}
<a name="27"></a>{% include _inlines/AddOns/common/database-backups/database-backups_pricing.md  product = product %}