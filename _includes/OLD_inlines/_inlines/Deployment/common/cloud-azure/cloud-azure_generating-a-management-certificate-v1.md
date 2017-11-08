


## Generating a management certificate

The Azure management certificate is a certificate used to authenticate an agent, such as Cloud 66, to your Azure account. These certificates are uploaded to Azure and stored at the subscription level.

To generate a management certificate you can use OpenSSL: 

1.  Run the following command in your console:
    ```
    $ openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout azure.pem -out azure.pem
    ```
2.  Now use the created `azure.pem` file and run the following command:
    ```
    $ openssl x509 -inform pem -in azure.pem -outform der -out azure.cer
    ```