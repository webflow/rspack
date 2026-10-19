export default {
  target: 'node',
  cache: true,
  experiments: { css: true },
  module: {
    rules: [
      {
        test: /\.css$/,
        type: 'css/module',
        generator: {
          exportsOnly: false,
          localIdentName: '[local]-[hash:8]',
          localIdentHashDigest: 'hex',
          localIdentHashDigestLength: 8,
        },
      },
    ],
  },
  optimization: { concatenateModules: false },
  output: { cssFilename: 'style.css' },
};
