var util = require('util');

function NestedReporter(extendBaseReporter, formatError, config, options) {

  var self = this;

  extendBaseReporter(self);

  // Allow ourselves to call superclass methods.
  self._super = {
    specFailure: self.specFailure.bind(self)
  };

  options = options || {};
  options.icon = options.icon || {};
  options.icon.failure = options.icon.failure || '✘ ';
  options.icon.indent = options.icon.indent || 'ட ';
  options.color = options.color || {};
  options.color.should = options.color.should || 'red';
  options.color.browser = options.color.browser || 'yellow';

  if (config.colors) {
    require('colors');
    self.USE_COLORS = true;
    self.LOG_SINGLE_BROWSER = '%s: ' + '%s'.cyan + '\n';
    self.LOG_MULTI_BROWSER = '%s %s: ' + '%s'.cyan + '\n';
    self.SPEC_FAILURE = '%s %s FAILED'.red + '\n';
    self.SPEC_SLOW = '%s SLOW %s: %s'.yellow + '\n';
    self.ERROR = '%s ERROR'.red + '\n';
    self.FINISHED_ERROR = ' ERROR'.red;
    self.FINISHED_SUCCESS = ' SUCCESS'.green;
    self.FINISHED_DISCONNECTED = ' DISCONNECTED'.red;
    self.X_FAILED = ' (%d FAILED)'.red;
    self.TOTAL_SUCCESS = 'TOTAL: %d SUCCESS'.green + '\n';
    self.TOTAL_FAILED = 'TOTAL: %d FAILED, %d SUCCESS'.red + '\n';
  }

  self.onBrowserComplete = function() {
    self.write('\n');
    self.write(self._refresh());
  };

  self.onBrowserStart = function(browser) {
    self._browsers.push(browser);
    if (self._isRendered) {
      self.write('\n');
    }
    self.write(self._refresh());
  };

  self.onRunStart = function() {
    self._browsers = [];
    self._isRendered = false;
  };

  self.specFailure = function(browser, result) {
    var depth = result.suite.length;
    return self._super.specFailure.call(self, browser, {
      log: result.log,
      description: '\n' + self._repeat(depth, '  ') + options.icon.indent + options.icon.failure + result.description,
      suite: result.suite.map(function(description, i) {
        return '\n' + self._repeat(i, '  ') + options.icon.indent + description;
      })
    });
  };

}

NestedReporter.prototype._repeat = function(n, str) {
  var res = [];
  var i;
  for (i = 0; i < n; ++i) {
    res.push(str);
  }
  return res.join('');
};

NestedReporter.prototype._remove = function() {
  var cmd = '';
  if (!this._isRendered) {
    return '';
  }
  this._browsers.forEach(function() {
    cmd += '\x1B[1A' + '\x1B[2K';
  });
  this._isRendered = false;
  return cmd;
};

NestedReporter.prototype._render = function() {
  this._isRendered = true;
  return this._browsers.map(this.renderBrowser).join('\n') + '\n';
};

NestedReporter.prototype._refresh = function() {
  return this._remove() + this._render();
};

// Register with Karma
// ---------------------------------------------------------------------------

NestedReporter.$inject = ['baseReporterDecorator', 'formatError', 'config', 'config.nestedReporter'];

module.exports = {
  'reporter:nested': ['type', NestedReporter]
};
