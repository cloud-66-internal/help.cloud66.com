
## Package Installation

We've seen this happen that deploy hooks with NPM installation fails without any logs. The reason is that some package installations throw lots of logs which overwhelms the connection and kills the connection - that is why they fail with no useful logs. You can change your deploy hook command to pipe the output to a file instead, in order to avoid facing this issue. The following is a sample to use for installing NPM:


{% include _inlines/Troubleshooting/common/deploy-hooks/code_deploy-hooks.md  product = include.product %}