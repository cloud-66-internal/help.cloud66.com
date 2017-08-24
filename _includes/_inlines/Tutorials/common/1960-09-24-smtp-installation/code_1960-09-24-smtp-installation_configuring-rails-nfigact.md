<!-- usedin: [ _includes/_inlines/Tutorials/common/1960-09-24-smtp-installation/1960-09-24-smtp-installation_configuring-rails.md] -->

```
config.action_mailer.delivery_method = :sendmail
config.action_mailer.smtp_settings = {
  :address => "localhost",
  :port => 25,
  :domain => "example.com",
}
```
