const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
                // exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract( {
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                         'sass-loader'
                        ]
                } )
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader',
                ]
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    'file-loader'
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         name: '[name].[ext]',
                    //         outputPath: 'img/',
                    //         publicPath: 'img/'
                    //     }
                    // }
                ]
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new VueLoaderPlugin(),
        new htmlWebpackPlugin()
    ]
}

module.exports = ( env, options ) => {

    let production = options.mode === 'production';
    conf.devtool = production
                        // ? 'sourcemap'
                        ? false
                        : 'eval-sourcemap';
    return conf;

}
