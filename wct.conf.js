module.exports = {
  suites: ['.test/'],
  plugins: {
    sauce: {
      disabled: true,
      browsers: [
        'mac/chrome',
        'windows/chrome',
        'mac/firefox',
        'windows/firefox',
        'mac/safari',
        'any/iPhone',
        'android/chrome',
        'windows 10/internet explorer',
        'windows 10/MicrosoftEdge',
      ]
    }
  }
};
