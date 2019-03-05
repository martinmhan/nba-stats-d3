const path = require('path');

module.exports = env => ({
  mode: env.NODE_ENV,
  entry: ['@babel/polyfill', './client/src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/dist/'),
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        include: path.join(__dirname, 'client'),
        query: {
          modules: true,
          localIdentName: '[name]__[local]__[hash:base64:5]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
});
