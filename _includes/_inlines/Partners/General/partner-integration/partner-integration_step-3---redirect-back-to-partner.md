<!-- usedin: [ _general/Partners] - post: -->


### Step 3 - Redirect back to partner

Once the user is authenticated, the user will be redirected back the partner's site. The redirect URL will be the one provided by the partner at the point of registration.

To ensure the authenticity of the redirect, the partner has to check the payload of the callback. The payload will have the following fields: `multipass` and `signature`

MultiPasses are json hashes encrypted with strong AES encryption.  They are typically
passed as cookie values, URL params, or HTTP header values, depending on how
the individual service chooses to implement it. The fields available in multipass are as follows:

- `email`: user's email
- `name`: user's name
- `expires`: time when this multipass expires. (1 minute in future).

The `multipass` is encrypted with the first 16 characters of provider's UID.

Here is a [Ruby implementation of multipass](https://github.com/entp/multipass).

`signature` is a SHA256 hash of the second 16 characters of provider's UID and the multipass. 

Provider needs to recalculate the multipass and signature and check its authenticity using the same method. Once the authenticity of the callback is established, provider can use the data encrypted in the multipass.

