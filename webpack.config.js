const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('css/[name]-css.css');
const extractSASS = new ExtractTextPlugin('css/[name]-sass.css');
const CleanWebpackPlugin = require('clean-webpack-plugin');
 
module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: extractCSS.extract({                     
                      use: "css-loader",
                      fallback: "style-loader"
                })
            },
            {
                test:/\.scss$/,
                use: extractSASS.extract({
                    use: [
                        {loader: "css-loader"}, 
                        {loader: "sass-loader"}
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        cacheDirectory:true // Enable cache
                    }
                }
            },
            {
               test: /\.(png|jpg|gif|jpeg)$/,
               use: [
                 {
                   loader: 'url-loader',
                   options: {
                     limit: 8192,
                     name:'img/[name].[ext]',
                     publicPath:'../'
                   }
                 }
               ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
        {          
            template: './src/index.html',       
            filename: 'index.html'
        }
        ),
        new CopyWebpackPlugin([
            {from:'./src/img',to:'./img'}
        ]),
        extractCSS,
        extractSASS,
        new CleanWebpackPlugin(['dist','build'],{
            verbose:false,
            exclude:['img'] // Exclude image
        })
    ]
}
