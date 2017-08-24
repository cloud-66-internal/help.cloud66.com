<!-- usedin: [ _includes/_inlines/AddOns/common/database-backups] - layout:code post: database-backups_mysql -->

```

$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "DROP DATABASE $MYSQL_DATABASE_NAME ;"
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "FLUSH PRIVILEGES ;"

```
