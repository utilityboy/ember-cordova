module.exports = function getPlatform(config, options) {
  var platform, defaultPlatform;
  defaultPlatform = config && config.cordova && config.cordova.platform;
  defaultPlatform ? platform = defaultPlatform : platform = options.platform;

  return platform;
}
