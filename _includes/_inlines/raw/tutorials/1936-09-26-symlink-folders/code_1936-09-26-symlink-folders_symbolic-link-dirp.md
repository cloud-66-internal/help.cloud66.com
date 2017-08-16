---
layout: code
post: 1936-09-26-symlink-folders_symbolic-link.md
---


mkdir -p $STACK_BASE/shared/uploads
chown nginx:app_writers $STACK_BASE/shared/uploads
rm -rf $STACK_PATH/uploads
ln -nsf $STACK_BASE/shared/uploads $STACK_PATH/uploads
