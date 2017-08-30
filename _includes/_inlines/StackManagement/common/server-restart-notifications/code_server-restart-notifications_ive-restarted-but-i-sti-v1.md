<!-- usedin: [ _includes/_inlines/StackManagement/common/server-restart-notifications/server-restart-notifications_ive-restarted-but-i-still-se-v1.md] -->

```

sudo bash -c "if [ -f /var/run/reboot-required ]; then echo 'Server is requesting restart'; fi"

```
