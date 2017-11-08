


### Tip / Warning!

If you have more than one server serving web, you can tick the _Serial Deployment_ in _Deployment Options_, and it will deploy without down-time, however, during the deployment some servers will be serving the new code and some the old one.   

### Warning!

If you are upgrading your Ruby base version then you should put your stack in maintenance mode first as Passenger-based stacks (and possibly others) will have some down-time during the upgrade.






