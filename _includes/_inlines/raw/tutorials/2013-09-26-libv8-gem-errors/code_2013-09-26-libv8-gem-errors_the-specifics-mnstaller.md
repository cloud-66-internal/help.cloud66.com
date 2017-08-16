<!-- layout:code post: 2013-09-26-libv8-gem-errors_the-specifics -->

```

Gem::Installer::ExtensionBuildError: ERROR: Failed to build gem native extension.

/usr/local/bin/ruby extconf.rb
checking for main() in -lpthread... yes
creating Makefile

make
compiling message.cc
compiling handles.cc
compiling rr.cc
compiling value.cc
compiling invocation.cc
compiling exception.cc
compiling array.cc
compiling external.cc
compiling stack.cc
compiling trycatch.cc
compiling primitive.cc
compiling date.cc
compiling script.cc
compiling constraints.cc
compiling string.cc
compiling signature.cc
compiling backref.cc
compiling init.cc
compiling heap.cc
compiling locker.cc
compiling object.cc
compiling accessor.cc
compiling v8.cc
compiling gc.cc
compiling function.cc
compiling constants.cc
compiling context.cc
compiling template.cc
linking shared-object v8/init.so
/var/deploy/mindr-staging/web_head/shared/bundle/ruby/1.9.1/gems/libv8-3.11.8.3-x86_64-linux/vendor/v8/out/x64.release/obj.target/tools/gyp/libv_base.a: could not read symbols: Malformed archive
collect2: ld returned 1 exit status
make: *** [init.so] Error 1

```
