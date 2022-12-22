import path from "path";
import { VueLoaderPlugin } from 'vue-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';               // eslint-disable-line 

module.exports = {
    mode: "production",
    entry: path.join(__dirname, "/src/index.vue.ts"),
    output: {
        path: path.join(__dirname, "/dist"),
        filename: './[name].js'
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/public/index.html"),
            filename: "./index.html"
        }),
        new CopyPlugin({
            patterns: [
                { from: path.join(__dirname, "/src/preload.electron.ts") }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            }
        ]
    }
}
