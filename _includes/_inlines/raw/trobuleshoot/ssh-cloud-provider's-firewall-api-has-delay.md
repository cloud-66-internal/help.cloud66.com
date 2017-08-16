## Cloud provider's firewall API has delay

It happens some times that on cloud providers the API for opening a port gets back with ok before the rule actually gets applied, thus SSH fails. By running the bellow commands you'll give it 10 seconds for the rule to be applied, and then you try.



{%include _inlines/path_to_code %}



