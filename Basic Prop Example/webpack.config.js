'use strict';

const fs = require('fs');
const webpack = require("webpack");
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
console.log(__dirname);

module.exports = {
 devtool: 'cheap-module-source-map',
 context: __dirname,
 entry: {
   app: [
     'react-hot-loader/patch',
     // activate HMR for React

     "webpack-dev-server/client?http://localhost:8080/",

     'webpack/hot/only-dev-server',
     // bundle the client for hot reloading
     // only- means to only hot reload for successful updates

     // the entry point of our app
     "./src/App.js"
   ]
 },

 output: {
   crossOriginLoading: 'anonymous',
   path: __dirname + "/dist",
   filename: "App.js",
   publicPath: "http://localhost:8080/src"
 },
 profile: true,
 module: {
   loaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react'],
         plugins: ['react-hot-loader/babel']
       }
     },
     {
       test: /\.(eot|woff|ttf|svg|woff2|gif|png)$/,
       loader: "file-loader?name=/fonts/lvr-[hash].[ext]"
     },
     {
       test: /\.(css|scss)$/,
       loader: "style-loader!css-loader!sass-loader"
     },
     {
       test: /bootstrap\/dist\/js\/umd\//,
       loader: 'imports-loader?jQuery=jquery,Tether=tether'
     }
   ]
 },

 // Below devServer configuration should be re visited
 devServer: {
   headers: {
     "Access-Control-Allow-Origin": "http://localhost:3000",
     "Access-Control-Allow-Credentials": "true"
   },
   publicPath: "http://localhost:8080",
   contentBase: "./",
   historyApiFallback: true,
   hot: true,
   inline: true,
 },

 plugins: [
   new webpack.HotModuleReplacementPlugin(),
   // enable HMR globally

   new webpack.NamedModulesPlugin(),
   // prints more readable module names in the browser console on HMR updates

   new webpack.NoEmitOnErrorsPlugin(),
   // do not emit compiled assets that include errors

   new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

   function() {
     // delete previous outputs
     this.plugin("compile", function() {
       let basepath = __dirname + "/public";
       let paths = ["/javascripts", "/stylesheets"];

       for (let x=0; x<paths.length; x++) {
         const asset_path = basepath + paths[x];

         fs.readdir(asset_path, function(err, files) {
           if (files === undefined) {
             return;
           }

           for (let i=0; i<files.length; i++) {
             fs.unlinkSync(asset_path + "/" + files[i]);
           }
         });
       }
     });
   },
   new ProvidePlugin({
     jQuery: 'jquery',
     $: 'jquery',
     jquery: 'jquery',
     "Tether": 'tether',
     "window.Tether": "tether",
   })
 ]
};
