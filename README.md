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

## Configuration

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['nested'],
  });
};
```

You can pass list of reporters as a CLI argument too:

```bash
karma start --reporters nested
```

For more information on Karma see the [homepage](http://karma-runner.github.com).

