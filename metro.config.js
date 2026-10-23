const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { minifierConfig } = defaultConfig.transformer;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    // Keep class and function names in minified bundles so Pendo's codeless
    // solution can identify components. Metro's default minifier settings are
    // spread in because mergeConfig replaces minifierConfig as a whole.
    minifierConfig: {
      ...minifierConfig,
      keep_classnames: true,
      keep_fnames: true,
      mangle: {
        ...minifierConfig.mangle,
        keep_classnames: true,
        keep_fnames: true,
      },
    },
  },
};

module.exports = mergeConfig(defaultConfig, config);
