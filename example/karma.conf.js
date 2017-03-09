module.exports = function(config) {
  config.set({
    autoWatch: false,
    basePath: '',
    browsers: [
      'Chrome'
    ],
    colors: true,
    concurrency: Infinity,
    exclude: [],
    files: [
      'src/**/*.js',
      'src/**/*.spec.js'
    ],
    frameworks: [
      'jasmine'
    ],
    logLevel: config.LOG_INFO,
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-nested-reporter'
    ],
    port: 9876,
    preprocessors: {},
    reporters: [
      'nested'
    ],
    singleRun: true
  });
};
