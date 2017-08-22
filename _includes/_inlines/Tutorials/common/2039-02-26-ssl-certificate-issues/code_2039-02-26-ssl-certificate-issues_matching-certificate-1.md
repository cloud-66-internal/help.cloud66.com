<!-- layout:code post: 2039-02-26-ssl-certificate-issues_matching-certificates-and -->

```

$ openssl rsa -noout -modulus -in FILE.key
$ openssl req -noout -modulus -in FILE.csr
$ openssl x509 -noout -modulus -in FILE.cer

```
