const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './template/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {// CSS处理
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            // {
            //   loader: 'pxrem-loader',
            //   options: {
            //     root: 75,
            //     fixed: 6
            //   }
            // }
          ],
        }),
      },
      {

        test: /(\.scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  path: 'postcss.config.js'  // 这个得在项目根目录创建此文件
                }
              }
            },
          ],
        }),

      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: { // 这里的options选项参数可以定义多大的图片转换为base64
            name: '[name].[ext]',
            limit: 50000, // 表示小于50kb的图片转为base64,大于50kb的是路径
            outputPath: 'images' // 定义输出的图片文件夹
          }
        },
          {	// 压缩图片要在file-loader之后使用
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true
            }
          }
        ]
      }, {
        test: /\.(css|scss)$/,
        use: [{
          loader: 'webpack-px-to-rem',
          //这个配置是可选的
          query: {
            // 1rem=npx 默认为 10
            basePx: 16,
            //只会转换大于min的px 默认为0
            //因为很小的px（比如border的1px）转换为rem后在很小的设备上结果会小于1px，有的设备就会不显示
            min: 1,
            //转换后的rem值保留的小数点后位数 默认为3
            floatWidth: 3
          }
        }]
      },]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('[name].css')
        // if (pro) {
        //   return getPath('[name].[hash:8].css')
        // } else {
        //
        // }
      },
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './template/start.html',
    }),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production'),
    // }),
  ],
  devServer: {
    inline: true,
    hot: true,
    port: 3003,
    host: '0.0.0.0',

  }
}
