module.exports = function config(api) {
  api.cache(true);

  const plugins = [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-export-default-from',
  ];

  const env = {
    development: {
      presets: ['next/babel'],
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            ssr: true,
            displayName: true,
            preprocess: false,
          },
        ],
      ],
    },
    production: {
      presets: ['next/babel'],
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            ssr: true,
            displayName: false,
            preprocess: false,
          },
        ],
      ],
    },
    test: {
      presets: [['next/babel', { 'preset-env': { modules: 'commonjs' } }]],
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            ssr: false,
            displayName: false, // must be false for .toHaveStyleRule() in tests to work due to string prefix
            preprocess: false,
          },
        ],
      ],
    },
  };

  return {
    env,
    plugins,
  };
};
