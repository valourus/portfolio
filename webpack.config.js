const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: '#root'
});

module.exports = {
    entry: './src/main.tsx',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve('dist'),
        filename: 'main.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    'css-loader',
                ],

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [HtmlWebpackPluginConfig],
    devServer: {
        compress: true,
        port: 8080,
        hot: true,
        historyApiFallback: true,
    },
}