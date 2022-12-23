import path from "path";
import { VueLoaderPlugin } from 'vue-loader';
import CopyPlugin from 'copy-webpack-plugin';               // eslint-disable-line

module.exports = {
    mode: "production",
    entry: path.join(__dirname, "/src/index.vue.ts"),
    output: {
        path: path.join(__dirname, "/dist"),
        filename: './index.js'
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                { from: path.join(__dirname, "/src/preload.electron.ts") },
                { from: path.join(__dirname, "/public/index.html") }
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
