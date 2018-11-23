const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
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
