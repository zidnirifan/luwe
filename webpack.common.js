const WebpackPwaManifest = require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images',
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      name: 'Luwe',
      short_name: 'Luwe',
      description: 'Catalog Restaurants',
      theme_color: '#48811a',
      background_color: '#ffffff',
      start_url: '/',
      orientation: 'portrait',
      display: 'standalone',
      inject: true,
      ios: {
        'apple-mobile-web-app-title': 'Luwe',
        'apple-mobile-web-app-status-bar-style': '#48811a',
      },
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/images/icons/icon.png'),
          sizes: [72, 96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve(__dirname, 'src/public/images/icons/ios-icon.png'),
          size: 192,
          ios: true,
        },
      ],
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
  ],
};
