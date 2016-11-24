# karma-nested-reporter

> A Karma plugin. Report results with each describe indented.

[![npm downloads](https://img.shields.io/npm/dm/karma-nested-reporter.svg?style=flat-square)](https://www.npmjs.com/package/karma-nested-reporter) 
[![Analytics](https://ga-beacon.appspot.com/UA-45466560-5/karma-nested-reporter?flat&useReferer)](https://github.com/igrigorik/ga-beacon)
[![GitHub stars](https://img.shields.io/github/stars/JamieMason/karma-nested-reporter.svg?style=social&label=Star)](https://github.com/JamieMason/karma-nested-reporter) 
[![GitHub followers](https://img.shields.io/github/followers/JamieMason.svg?style=social&label=Follow)](https://github.com/JamieMason) 
[![Twitter](https://img.shields.io/twitter/url/https/github.com/JamieMason/karma-nested-reporter.svg?style=social)](https://twitter.com/intent/tweet?text=Easy%20to%20read%20test%20output%20with%20nested%20describe%20and%20it%20blocks.%20%23JavaScript%20%23NodeJS&url=https%3A%2F%2Fgithub.com%2FJamieMason%2Fkarma-nested-reporter)

![screenshot of karma nested reporter](https://github.com/JamieMason/karma-nested-reporter/blob/master/karma-nested-reporter.png)

## Installation

The easiest way is to keep `karma-nested-reporter` as a devDependency in your `package.json`:

```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-nested-reporter": "~0.1"
  }
}
```

You can simply do it with:

```bash
npm install karma-nested-reporter --save-dev
```

## Enabling this reporter

It's recommended that you use this reporter **instead of** the `progress` reporter.

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['nested']
  });
};
```

You can pass list of reporters as a CLI argument too:

```bash
karma start --reporters nested
```

## Optional Configuration

### Default values

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    nestedReporter: {
      color: {
        should: 'red',
        browser: 'yellow'
      },
      icon: {
        failure: '✘ ',
        indent: 'ட ',
        browser: ''
      }
    }
  });
};
```

### Colors

This reporter will output in color if `colors: true` is present in your Karma configuration.

Colors can be optionally overridden with any of the values defined by
[colors.js' colors and styles](https://github.com/marak/colors.js/#colors-and-styles).

### Icons

If the **✘** for example isn't your thing, or it doesn't display in your Terminal, this and the
other icons can be substituted for others.

## The Karma Test Runner

For more information on Karma see the [homepage](http://karma-runner.github.com).

