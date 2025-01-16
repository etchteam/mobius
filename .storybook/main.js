const path = require('path');

module.exports = {
  'stories': [
    '../src/docs/**/*.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: {
            auto: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },

        }
      }
    },
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-webpack5-compiler-babel'
  ],
  'framework': {
    name: '@storybook/react-webpack5',
    options: {}
  },
  staticDirs: [path.resolve(__dirname, '../src/assets')],
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

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    })

    return config;
  },
  previewHead: (head) => (`
    ${head}
    ${process.env.NODE_ENV === 'production' ? `
      <script
        defer
        src="https://eu.umami.is/script.js"
        data-website-id="270a6507-0235-449a-93bd-5523021ac817"
      ></script>
    ` : ''}
  `),
  docs: {}
}
