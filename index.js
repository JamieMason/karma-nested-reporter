module.exports = {
  'reporter:nested': ['type', (function() {

    // @TODO: toggle based on colors value in config.
    var colors = require('colors');

    var NestedReporter = function(baseReporterDecorator, config) {

      // ------------------------------------
      // CONFIGURATION
      // ------------------------------------

      var pluginConfig = config.nestedReporter || {};
      var enableColors = config.colors !== false;

      pluginConfig.icon = pluginConfig.icon || {};
      pluginConfig.icon.failure = pluginConfig.icon.failure || '✘ ';
      pluginConfig.icon.indent = pluginConfig.icon.indent || 'ட ';
      pluginConfig.icon.browser = pluginConfig.icon.browser || '';

      pluginConfig.color = pluginConfig.color || {};
      pluginConfig.color.should = pluginConfig.color.should || 'red';
      pluginConfig.color.browser = pluginConfig.color.browser || 'yellow';

      // ------------------------------------
      // PRIVATE
      // ------------------------------------

      /**
       * Repeat the same string n number of times.
       *
       * @param  {Number} n
       * @param  {String} str
       * @return {String}
       */
      function repeat(n, str) {
        var res = [];
        var i;
        for (i = 0; i < n; ++i) {
          res.push(str);
        }
        return res.join('');
      }

      var write = {

        /**
         * Render a describe('when ...').
         *
         * @param  {Number} depth
         * @param  {String} pathName
         * @return {String}
         */
        when: function(depth, pathName) {
          var icon = depth > 0 ? pluginConfig.icon.indent : '';
          return icon + pathName;
        },

        /**
         * Render an it('should ...').
         *
         * @param  {Number} depth
         * @param  {String} pathName
         * @return {String}
         */
        should: function(depth, pathName) {
          var output = pluginConfig.icon.failure + pathName;
          return enableColors ? output[pluginConfig.color.should] : output;
        },

        /**
         * Render a captured Browser's name.
         *
         * @param  {Number} depth
         * @param  {String} pathName
         * @return {String}
         */
        browser: function(depth, pathName) {
          var output = pluginConfig.icon.browser + pathName;
          return enableColors ? output[pluginConfig.color.browser] : output;
        },

        /**
         * Recursively write.failures through our nested object of Whens, Shoulds and Browsers and render
         * each line out to the terminal.
         *
         * @param  {Object} path
         * @param  {Number} depth
         */
        failures: function(path, depth) {
          for (var property in path) {
            if (path.hasOwnProperty(property)) {
              console.log(repeat(depth, '  ') + property);
              write.failures(path[property], depth + 1);
            }
          }
        }

      };

      // ------------------------------------
      // PUBLIC
      // ------------------------------------

      // extend the base reporter
      baseReporterDecorator(this);

      /**
       * Called each time a test fails in a given Browser.
       *
       * @param  {[type]} browser [description]
       * @param  {[type]} result  [description]
       * @return {[type]}         [description]
       */
      this.specFailure = function(browser, result) {

        var path = [].concat(result.suite, result.description, browser.name);
        var maxDepth = path.length - 1;

        // recursively walk down the object tree creating any new steps as needed.
        path.reduce(function(branch, pathName, depth) {

          var writer;
          var pathExists;

          if (depth < maxDepth - 1) {
            writer = 'when';
          } else if (depth === maxDepth - 1) {
            writer = 'should';
          } else if (depth === maxDepth) {
            writer = 'browser';
          }

          // key each entry by the indented, formatted output we'll display.
          pathName = write[writer](depth, pathName);

          pathExists = pathName in branch;

          if (!pathExists) {
            branch[pathName] = {};
          }

          // return the new/current branch to walk down into.
          return branch[pathName];

        }, this.describeTree);

      };

      this.onRunStart = function(browsers, results) {
        this.describeTree = {};
      };

      this.onRunComplete = function(browsers, results) {
        write.failures(this.describeTree, -1);
      };

    };

    NestedReporter.$inject = ['baseReporterDecorator', 'config'];

    return NestedReporter;

  }())]
};
