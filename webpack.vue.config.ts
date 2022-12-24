import path from "path";
import { VueLoaderPlugin } from 'vue-loader';
import CopyPlugin from 'copy-webpack-plugin';               // eslint-disable-line

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "/src/vue/index.ts"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: './index.js'
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, "/src/electron/preload.ts") },
        { from: path.join(__dirname, "/public/index.html") }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.[s]?css$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|\.webpack)/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.png$/,
        type: "asset",
        generator: {
          filename: "./image/[hash].[ext]"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src/vue/'),
    },
  },
}
