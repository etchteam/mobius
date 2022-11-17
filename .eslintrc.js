module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'plugin:storybook/recommended'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: './',
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/function-component-definition': 0,
    'jsx-a11y/label-has-associated-control': [2, {
      assert: 'either',
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  overrides: [{
    files: ['scripts/**/*.js', 'src/**/*.stories.tsx'],
    rules: {
      'react/no-array-index-key': 0,
    },
  }, {
    files: ['scripts/**/*.js'],
    rules: {
      'global-require': 0,
    },
  }],
};
