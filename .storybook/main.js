const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "storybook-addon-styled-component-theme/dist/preset"
  ],
  "framework": "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve = {
      ...(config.resolve || {}),
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        "components": path.resolve(__dirname, '../src', 'components'),
      },
    }
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    config.module.rules.push({
      test: /\.(tsx|ts)?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    });
    
    return config;
  }
}