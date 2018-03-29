(function() {
  var aglio, cErr, cWarn, chokidar, clc, fs, getLineNo, http, logWarnings, parser;

  aglio = require('./main');

  clc = require('cli-color');

  fs = require('fs');

  http = require('http');

  chokidar = require('chokidar');

  parser = require('yargs').usage('Usage: $0 [options] -i infile [-o outfile -s]').example('$0 -i example.md -o output.html', 'Render to HTML').example('$0 -i example.md -s', 'Start preview server').example('$0 -t flatly -i example.md -s', 'Custom template').example('$0 --no-condense -i example.md -s', 'Disable options').options('i', {
    alias: 'input',
    describe: 'Input file'
  }).options('o', {
    alias: 'output',
    describe: 'Output file'
  }).options('t', {
    alias: 'template',
    describe: 'Template name or file',
    "default": 'default'
  }).options('f', {
    alias: 'filter',
    boolean: true,
    describe: 'Sanitize input from Windows',
    "default": true
  }).options('c', {
    alias: 'condense',
    boolean: true,
    describe: 'Condense navigation links',
    "default": true
  }).options('w', {
    alias: 'full-width',
    boolean: true,
    describe: 'Use full window width',
    "default": false
  }).options('s', {
    alias: 'server',
    describe: 'Start a local live preview server'
  }).options('h', {
    alias: 'host',
    describe: 'Address to bind local preview server to',
    "default": '127.0.0.1'
  }).options('p', {
    alias: 'port',
    describe: 'Port for local preview server',
    "default": 3000
  }).options('l', {
    alias: 'list',
    describe: 'List templates'
  }).strict();

  cErr = clc.white.bgRed;

  cWarn = clc.xterm(214).bgXterm(235);

  getLineNo = function(input, err) {
    if (err.location && err.location.length) {
      return input.substr(0, err.location[0].index).split('\n').length;
    }
  };

  logWarnings = function(warnings) {
    var lineNo, warning, _i, _len, _ref, _results;
    _ref = warnings || [];
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      warning = _ref[_i];
      lineNo = getLineNo(warnings.input, warning) || 0;
      _results.push(console.error(cWarn(">> Line " + lineNo + ":") + (" " + warning.message + " (warning code " + warning.code + ")")));
    }
    return _results;
  };

  exports.run = function(argv, done) {
    var getHtml, io, options, server, watcher, _html;
    if (argv == null) {
      argv = parser.argv;
    }
    if (done == null) {
      done = function() {};
    }
    _html = null;
    getHtml = function(cb) {
      var options;
      if (_html) {
        return cb && cb(null, _html);
      } else {
        options = {
          template: argv.t,
          filterInput: argv.f,
          condenseNav: argv.c,
          fullWidth: argv.w,
          locals: {
            livePreview: true
          }
        };
        return fs.readFile(argv.i, "utf-8", function(err, blueprint) {
          console.log("Rendering " + argv.i);
          return aglio.render(blueprint, options, function(err, html, warnings) {
            logWarnings(warnings);
            if (err) {
              console.error(err);
              return cb && cb(err);
            } else {
              _html = html;
              return cb && cb(null, _html);
            }
          });
        });
      }
    };
    if (argv.l) {
      return aglio.getTemplates(function(err, names) {
        if (err) {
          console.error(err);
          return done(err);
        }
        console.log('Templates:\n' + names.join('\n'));
        return done();
      });
    } else if (argv.s) {
      if (!argv.i) {
        parser.showHelp();
        return done('Invalid arguments');
      }
      getHtml();
      server = http.createServer(function(req, res) {
        if (req.url !== '/') {
          return res.end();
        }
        return getHtml(function(err, html) {
          res.writeHead(200, {
            "Content-Type": "text/html"
          });
          return res.end((err ? err.toString() : html));
        });
      }).listen(argv.p, argv.h, function() {
        return console.log("Server started on http://" + argv.h + ":" + argv.p + "/");
      });
      io = require("socket.io")(server);
      io.on("connection", function() {
        return console.log("Socket connected");
      });
      watcher = chokidar.watch(argv.i, {
        persistent: false
      });
      watcher.on("change", function(path) {
        console.log("Updated " + path);
        _html = null;
        return getHtml(function(err, html) {
          var re;
          if (!err) {
            console.log("Refresh web page in browser");
            re = /<body>[\s\S]*<\/body>/i;
            html = html.match(re)[0];
            return io.emit("refresh", html);
          }
        });
      });
      return done();
    } else {
      if (!argv.i || !argv.o) {
        parser.showHelp();
        return done('Invalid arguments');
      }
      options = {
        template: argv.t,
        filterInput: argv.f,
        condenseNav: argv.c,
        fullWidth: argv.w
      };
      return aglio.renderFile(argv.i, argv.o, options, function(err, warnings) {
        var lineNo;
        if (err) {
          lineNo = getLineNo(err.input, err);
          if (lineNo != null) {
            console.error(cErr(">> Line " + lineNo + ":") + (" " + err.message + " (error code " + err.code + ")"));
          } else {
            console.error(cErr('>>') + (" " + (JSON.stringify(err))));
          }
          return done(err);
        }
        logWarnings(warnings);
        return done();
      });
    }
  };

}).call(this);
