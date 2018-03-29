(function() {
  var crypto, fs, highlight, hljs, jade, marked, moment, path, protagonist, root, slug;

  crypto = require('crypto');

  fs = require('fs');

  hljs = require('highlight.js');

  jade = require('jade');

  marked = require('marked');

  moment = require('moment');

  path = require('path');

  protagonist = require('protagonist');

  root = path.dirname(__dirname);

  slug = function(value) {
    return value.toLowerCase().replace(/[ \t\n]/g, '-');
  };

  highlight = function(code, lang) {
    if (lang) {
      if (lang === 'no-highlight') {
        return code;
      } else {
        return hljs.highlight(lang, code).value;
      }
    } else {
      return hljs.highlightAuto(code).value;
    }
  };

  marked.setOptions({
    highlight: highlight,
    smartypants: true
  });

  exports.getTemplates = function(done) {
    return fs.readdir(path.join(root, 'templates'), function(err, files) {
      var f;
      if (err) {
        return done(err);
      }
      return done(null, ((function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = files.length; _i < _len; _i++) {
          f = files[_i];
          if (f[0] !== '_') {
            _results.push(f);
          }
        }
        return _results;
      })()).map(function(item) {
        return item.replace(/\.jade$/, '');
      }));
    });
  };

  exports.render = function(input, options, done) {
    var filteredInput;
    if (typeof options === 'string' || options instanceof String) {
      options = {
        template: options
      };
    }
    if (options.template == null) {
      options.template = 'default';
    }
    if (options.filterInput == null) {
      options.filterInput = true;
    }
    if (options.condenseNav == null) {
      options.condenseNav = true;
    }
    if (options.fullWidth == null) {
      options.fullWidth = false;
    }
    filteredInput = !options.filterInput ? input : input.replace(/\r\n?/g, '\n').replace(/\t/g, '    ');
    return protagonist.parse(filteredInput, function(err, res) {
      var key, locals, templatePath, value, _ref;
      if (err) {
        err.input = filteredInput;
        return done(err);
      }
      locals = {
        api: res.ast,
        condenseNav: options.condenseNav,
        fullWidth: options.fullWidth,
        date: moment,
        highlight: highlight,
        markdown: marked,
        slug: slug,
        hash: function(value) {
          return crypto.createHash('md5').update(value.toString()).digest('hex');
        }
      };
      _ref = options.locals || {};
      for (key in _ref) {
        value = _ref[key];
        locals[key] = value;
      }
      if (fs.existsSync(options.template)) {
        templatePath = options.template;
      } else {
        templatePath = path.join(root, 'templates', "" + options.template + ".jade");
      }
      return jade.renderFile(templatePath, locals, function(err, html) {
        if (err) {
          return done(err);
        }
        res.warnings.input = filteredInput;
        return done(null, html, res.warnings);
      });
    });
  };

  exports.renderFile = function(inputFile, outputFile, options, done) {
    var render;
    render = function(input) {
      return exports.render(input, options, function(err, html, warnings) {
        if (err) {
          return done(err);
        }
        if (outputFile !== '-') {
          return fs.writeFile(outputFile, html, function(err) {
            return done(err, warnings);
          });
        } else {
          console.log(html);
          return done(null, warnings);
        }
      });
    };
    if (inputFile !== '-') {
      return fs.readFile(inputFile, {
        encoding: 'utf-8'
      }, function(err, input) {
        if (err) {
          return done(err);
        }
        return render(input.toString());
      });
    } else {
      process.stdin.setEncoding('utf-8');
      return process.stdin.on('readable', function() {
        var chunk;
        chunk = process.stdin.read();
        if (chunk != null) {
          return render(chunk);
        }
      });
    }
  };

}).call(this);
