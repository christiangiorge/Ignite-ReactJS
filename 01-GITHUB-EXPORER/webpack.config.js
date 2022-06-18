const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE.ENV !== 'production';

module.exports = {
    mode: isDevelopment? 'development' : 'production',
    devtool: isDevelopment? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devServer: {
          contentBase: path.resolve(__dirname, 'public'),
          //hot: true,
      },

    plugins: [
        //isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlwebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),

    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }
}