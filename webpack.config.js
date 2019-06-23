const path = require('path');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./example/src/index.html"),
    filename: "./index.html"
});

module.exports = {
    entry: path.join(__dirname, "./index.js"),
    output: {
        path: path.join(__dirname, "example/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: "babel-loader",
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: [".js"]
    },
    devServer: {
        port: 3001
    }
};
