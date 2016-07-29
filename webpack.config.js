var msops = require('msops-css');
var rucksack = require('rucksack-css');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, './client'),
  entry: {
    // jsx: './index.js',
    // html: './index.html',
    bundle: [
      './index.js',
      './index.html',
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
    ],
  },
  output: {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js',
    // filename: '[name].js',
    // chunkFilename: '[chunkhash].js',
  },
  module: {
    // preloaders: [
    //   {
    //     test: /\.(js|jsx)$/,
    //     exclude: [/node_modules/],
    //     loader: 'eslint',
    //   },
    // ],

    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.(woff2?|eot|ttf|jpe?g|png|gif|svg)$/,
        exclude: /node_modules/,
        loader: 'url?limit=10000&name=[sha512:hash:base64:5].[ext]',
      },
      {
        test: /\.css$/,
        include: /client/,
        loaders: [
          'style-loader',
          // Temporary we don't use CSS modules for now.
          // TODO: Should use best practice to have separate css attached to individual component.
          // 'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', // eslint-disable-line
          'css-loader?sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', // eslint-disable-line
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /client/,
        loader: 'style!css',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  postcss: [
    // Use our own postcss plugins collection: msops-css
    msops({
      addDependencyTo: 'webpack',
    }),
    rucksack({
      autoprefixer: true,
    }),
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),

    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') },
    }),
  ],
  devServer: {
    contentBase: './client',
    hot: true,
    host: '0.0.0.0',
  },
};
