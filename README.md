# karma-nested-reporter

> A Karma plugin. Report results with each describe indented ([screenshot](https://github.com/JamieMason/karma-nested-reporter/blob/master/karma-nested-reporter.png)).

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

