<!-- post: server-restart-notifications_i've-restarted,-but-i-still-se -->


sudo bash -c "if [ -f /var/run/reboot-required ]; then echo 'Server is requesting restart'; fi"
