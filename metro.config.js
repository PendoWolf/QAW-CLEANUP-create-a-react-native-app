const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const defaultMinifierConfig = defaultConfig.transformer.minifierConfig;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    // Keep class and function names in production bundles so the Pendo
    // codeless solution can still identify components after minification.
    minifierConfig: {
      ...defaultMinifierConfig,
      keep_classnames: true,
      keep_fnames: true,
      mangle: {
        ...defaultMinifierConfig.mangle,
        keep_classnames: true,
        keep_fnames: true,
      },
    },
  },
};

module.exports = mergeConfig(defaultConfig, config);
