

Cloud 66 supports deployments with the new Phusion Passenger 5 - all new stacks and servers will be using this version. If you have an existing stack that is running on Passenger 4, any newly scaled up servers will be upgraded. If your Nginx configuration is still on the old version, you may see this error message:



{%include _inlines/Tutorials/Rails/1900-01-20-passenger-5/code_1900-01-20-passenger-5_cloud-66-first.md %}




This is caused by a directive that was deprecated in Passenger 5, so we'll want to replace it with the new directive. To do this, replace the following line in your Nginx CustomConfig (note that it is present in two places):



{%include _inlines/Tutorials/Rails/1900-01-20-passenger-5/code_1900-01-20-passenger-5_cloud-66-second.md %}




With the following:



{%include _inlines/Tutorials/Rails/1900-01-20-passenger-5/code_1900-01-20-passenger-5_cloud-66-supports-deployments-w.md %}




This will effectively use the new directives for your servers running on Passenger 5, as well as the old directives for servers running on Passenger 4. While we recommend that you phase out any servers running on version 4, we provide this conditional in case this transition takes some time for you to complete.
