const path = require('path');

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/preset-scss',
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ],
  'framework': '@storybook/react',
  staticDirs: [path.resolve(__dirname, '../src/assets')],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, '../src/components'),
      lib: path.resolve(__dirname, '../src/lib'),
    }

    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg')
    );

    fileLoaderRule.exclude = /svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  }
}
