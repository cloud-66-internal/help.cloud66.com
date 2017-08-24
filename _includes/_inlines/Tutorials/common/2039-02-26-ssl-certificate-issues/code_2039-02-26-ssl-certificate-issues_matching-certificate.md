<!-- usedin: [ _includes/_inlines/Tutorials/common/2039-02-26-ssl-certificate-issues/2039-02-26-ssl-certificate-issues_matching-certificates-and.md, _includes/_inlines/Tutorials/common/2039-02-26-ssl-certificate-issues/2039-02-26-ssl-certificate-issues_matching-certificates-and.md] -->

```
$ openssl rsa -noout -modulus -in FILE.key
$ openssl req -noout -modulus -in FILE.csr
$ openssl x509 -noout -modulus -in FILE.cer
```
