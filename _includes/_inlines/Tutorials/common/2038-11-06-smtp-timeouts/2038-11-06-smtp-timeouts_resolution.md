<!-- usedin: [ _legacy_docker/Tutorials/2017-01-06-smtp-timeouts.md, _maestro/Tutorials/2017-01-06-smtp-timeouts.md, _node/tutorials/2017-01-06-smtp-timeouts.md, _rails/Tutorials/2017-01-06-smtp-timeouts.md] -->


## Resolution
You have the following options:

1.  Use a different port other than 25.
2.  If using Mandrill, use their RESTful API, instead of standard SMTP. This might not be very straight forward as the [Mandrill gem](https://mandrillapp.com/api/docs/index.ruby.html) is not a drop-in replacement.
3.  Use another service like [Postmark](https://postmarkapp.com) where they have a drop-in gem which uses their RESTful API.
