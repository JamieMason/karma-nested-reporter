# karma-nested-reporter

> A Karma plugin. Report results with each describe indented.

[![NPM version](http://img.shields.io/npm/v/karma-nested-reporter.svg?style=flat-square)](https://www.npmjs.com/package/karma-nested-reporter)
[![NPM downloads](http://img.shields.io/npm/dm/karma-nested-reporter.svg?style=flat-square)](https://www.npmjs.com/package/karma-nested-reporter)
[![Dependency Status](http://img.shields.io/david/JamieMason/karma-nested-reporter.svg?style=flat-square)](https://david-dm.org/JamieMason/karma-nested-reporter)
[![Gitter Chat for karma-nested-reporter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/JamieMason/karma-nested-reporter)
[![Donate via PayPal](https://img.shields.io/badge/donate-paypal-blue.svg)](https://www.paypal.me/foldleft)
[![Donate via Gratipay](https://img.shields.io/gratipay/user/JamieMason.svg)](https://gratipay.com/~JamieMason/)
[![Analytics](https://ga-beacon.appspot.com/UA-45466560-5/karma-nested-reporter?flat&useReferer)](https://github.com/igrigorik/ga-beacon)
[![Follow JamieMason on GitHub](https://img.shields.io/github/followers/JamieMason.svg?style=social&label=Follow)](https://github.com/JamieMason)
[![Follow fold_left on Twitter](https://img.shields.io/twitter/follow/fold_left.svg?style=social&label=Follow)](https://twitter.com/fold_left)

![screenshot of karma nested reporter](https://github.com/JamieMason/karma-nested-reporter/blob/master/karma-nested-reporter.png)

## Installation

The easiest way is to keep `karma-nested-reporter` as a devDependency in your `package.json`:

```json
{
  "devDependencies": {
    "karma": ">=0.9",
    "karma-nested-reporter": "0.1.5"
  }
}
```

You can simply do it with:

```
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
[chalk's colors and styles](https://github.com/chalk/chalk).

### Icons

If the **✘** for example isn't your thing, or it doesn't display in your Terminal, this and the
other icons can be substituted for others.

## The Karma Test Runner

For more information on Karma see the [homepage](http://karma-runner.github.com).
