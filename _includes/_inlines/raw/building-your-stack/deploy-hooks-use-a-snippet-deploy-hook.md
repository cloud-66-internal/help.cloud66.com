## Use a snippet deploy hook

Below is a bare-bone example of using a snippet with the required fields - it will execute the [Cloud 66 Node snippet](https://raw.githubusercontent.com/cloud66/snippets/master/cloud66/node) as the first thing on all production servers.



{%include _inlines/path_to_code %}



You can also run several snippets at the same hook point like follows:



{%include _inlines/path_to_code %}



See the available hook points and fields for more ways to customize this.

