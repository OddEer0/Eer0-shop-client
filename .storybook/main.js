const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-addon-next-router'
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/app': path.resolve(__dirname, "../src/application"),
      '@/processes': path.resolve(__dirname, "../src/processes"),
      '@/views': path.resolve(__dirname, "../src/views"),
      '@/widgets': path.resolve(__dirname, "../src/widgets"),
      '@/features': path.resolve(__dirname, "../src/features"),
      '@/entities': path.resolve(__dirname, "../src/entities"),
      '@/shared': path.resolve(__dirname, "../src/shared"),
    };

    return config;
  }
}
