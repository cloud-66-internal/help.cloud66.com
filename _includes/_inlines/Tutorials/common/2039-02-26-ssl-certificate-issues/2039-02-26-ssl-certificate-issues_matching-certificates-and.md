<!-- usedin: [ _legacy_docker/Tutorials] - post: -->


### Matching certificates and keys

This problem usually manifests itself as the following error when starting nginx:



{%include _inlines/Tutorials/common/2039-02-26-ssl-certificate-issues/code_2039-02-26-ssl-certificate-issues_matching-certificate.md %}




To make sure your key and certificate match correctly, use the OpenSSL commandline tool like this:



{%include _inlines/Tutorials/common/2039-02-26-ssl-certificate-issues/code_2039-02-26-ssl-certificate-issues_matching-certificate.md %}




If everything matches (same modulus), the files are compatible. If not, one of the file is not linked to the others.
