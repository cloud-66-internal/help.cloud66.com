


## Multi-domain certificates

When installing multi-domain certificates, certificate authorities such as Comodo typically send you four files:

1.  Root CA Certificate - _AddTrustExternalCARoot.crt_
2.  Intermediate CA Certificate - _COMODORSAAddTrustCA.crt_
3.  Intermediate CA Certificate - _COMODORSAExtendedValidationSecureServerCA.crt_
4.  Your COMODO EV Multi-Domain SSL Certificate - _14637732.crt_

To use these, you have to concatenate all files except for the last one (the certificate):



{%include _inlines/Tutorials/common/2004-09-26-ssl-certificate/code_2004-09-26-ssl-certificate_multi-domain-certificates-c-v1.md  product = include.product %}




