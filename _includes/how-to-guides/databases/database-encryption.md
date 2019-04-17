## Overview 

If you’re storing sensitive data (particularly private user data) you’ll probably need to encrypt that data to decrease the risk of theft or leaks, and to meet regulatory requirements. There are two main approaches to encrypting data:

- Encrypting data using via your application code (Application level)
- Native encryption of the entire database (Database engine level)

We’ll discuss your options below.

#### Note
<div class="notice"><p>
Cloud 66 doesn’t currently natively support full database encryption (TDE). We discuss your options for using this approach below.</p></note>


## Data encryption via the application

In this approach, your application would encrypt some (or all) of the data before storing it in the database structure, and decrypt it when it is retrieved. Most popular frameworks have plugins or extensions that can handle this for you.

Some examples are:

- [attr\_encrypted](https://github.com/attr-encrypted/attr_encrypted) for Ruby
- Node’s built-in [Crypto library](https://nodejs.org/api/crypto.html)
- [pyca/cryptography](https://cryptography.io/en/latest/) for Python

The main advantage of this approach is that your database architecture and structure don’t need to be completely changed - you simply “scramble” sensitive data as you store it and "unscramble” it as you retrieve it. This also allows you to only encrypt selected data and to leave the rest of your database unencrypted. 

The main drawbacks of this approach are that it requires development time, and can be prone to leaks and errors (because it relies on manual implementation). 


## Native database encryption

In this approach, the database engine natively handles all of the encryption and decryption processes, and your application simply queries the database using secure credentials of some kind. This is often called Transparent Data Encryption (TDE).

Many popular database engines offer this feature, but in most cases it is only available in the paid version. For example:

- [MySQL Enterprise](https://www.mysql.com/products/enterprise/encryption.html) Encryption
- [MongoDB](https://docs.mongodb.com/manual/core/security-encryption-at-rest/) Encryption at Rest
- [Redis](https://redislabs.com/blog/securing-redis-with-redis-enterprise-for-compliance-requirements/) Encryption

Some engines do support native encryption in their free versions, but these are increasingly rare and are often incomplete or require significant extra configuration. For example:

- [PostgreSQL](https://www.postgresql.org/docs/8.1/encryption-options.html)
- [MariaDB](https://mariadb.com/kb/en/library/data-at-rest-encryption-overview/)

The main advantages of this approach are that your application code does not need significant changes to implement it, and that native solutions are generally more secure (because they are self-contained and don’t require manual implementation or coding). 

The main disadvantage is the (often substantial) cost of the Enterprise versions of these engines, as well as the time to migrate any existing data into the new structure and to learn to work with the new technology.


## Implementing native database encryption (TDE) with Cloud 66

Cloud 66 doesn’t currently support TDE for any of our native database engines. If you need this level of encryption, you have two options:

1. A managed database solution from a cloud provider 
2. A manual installation of a database that supports TDE

The first option will generally end up costing more in hosting fees, but will save a lot of time on setup and maintenance. 

Many cloud providers offer TDE-enabled managed databases (or data storage solutions):

- [Amazon RDS](https://aws.amazon.com/rds/)
- [Rackspace](https://www.rackspace.com/data)
- [Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-service-encryption)
