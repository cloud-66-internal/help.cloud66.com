<!-- usedin: [ _legacy_docker/stack-management/custom-config.md, _maestro/stack-management/custom-config.md, _node/stack-management/custom-config.md, _rails/stack-management/custom-config.md, _skycap/stack-management/custom-config.md] -->


### Note

Failure to apply configuration updates may lead to unexpected behaviour.




If we cannot automatically apply the patch, you will be notified and provided with a patch archive. It contains two files - the updated configuration and a patch file. Extract the contents of the archive and download your current configuration from the Cloud 66 UI. With these files ready, run the following command:



{%include _inlines/StackManagement/common/custom-config/code_custom-config_note-tchltcurre.md %}




This will result in a merged_configuration file being created - please ensure that there are no merge errors at this point. Unfortunately we cannot deal with every single use case generically, so it is your responsibility to ensure that the new file conforms with your requirements.

In the absence of merge errors, copy and paste the contents of the merged_template into your CustomConfig form and commit it.
