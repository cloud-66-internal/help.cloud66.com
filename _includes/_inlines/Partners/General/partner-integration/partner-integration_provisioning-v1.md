


### Provisioning

Once the user is redirected to partner's website, the partner will try to provision an new account for the user or locate an existing one based on the email of the user. Depending on the outcome the partner can make an API call to Cloud 66 to add the provisioned information about the user to his Cloud 66 account. This could be the API keys of a cloud vendor or the project UID for an exception handling service.

Each partner is given a unique API endpoint. If you don't have your partner endpoint, please contact [support@cloud66.com](mailto:support@cloud66.com)

You can make an HTTP POST to the partner integration API with the following payload:

- **link_uid** The UID sent to the partner in the original redirect.
- **user_email** User email. Should be the same as the one in the original redirect.

Any other partner specific payload will be here.

