<!--  usedin: [ _legacy_docker/Toolbelt/introduction.md, _maestro/Toolbelt/introduction.md, _node/toolbelt/introduction.md, _rails/Toolbelt/introduction.md] -->


## Multiple Account Support

By default, Toolbelt can work with all of the accounts you are member of. Once you accept a Team membership on Cloud 66, your Toolbelt will automatically work with the stacks you have access to under that team's account without any change.

If you have more than 1 Cloud 66 account (you are the owner of more than 1 account and not just a team member), then you can use the `--account` global option when using Toolbelt. Using the `account` option you can give your accounts different names and switch between them. Here is an example:



{%include _inlines/Toolbelt/common/introduction/code_introduction_multiple-account-support-cxaccount.md %}




This will ask for Toolbelt authorization when run the first time. Once authorized, it will work as expected.

To add a new account, simply change the value of the `account` parameter:



{%include _inlines/Toolbelt/common/introduction/code_introduction_multiple-account-support-cxaccount-2.md %}




This will again ask for authorization the first time you run it. Once authorized you can switch between `personal` and `work` (or any other name you would like) by just adding the `--account` option.

