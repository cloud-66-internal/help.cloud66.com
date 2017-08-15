### Matching certificates and keys

This problem usually manifests itself as the following error when starting nginx:



{%include _inlines/path_to_code %}



To make sure your key and certificate match correctly, use the OpenSSL commandline tool like this:



{%include _inlines/path_to_code %}



If everything matches (same modulus), the files are compatible. If not, one of the file is not linked to the others.
