const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const workpath = path.resolve(__dirname, '../');
module.exports = {
    entry: {
        index: [
            path.resolve(workpath, 'src/web/app.ts')
        ]
    },
    output: {
        path: path.resolve(workpath, 'dist'),
        filename: 'app.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [new CopyWebpackPlugin([{
        from: path.resolve(workpath,'src/index.html'),
        to: path.resolve(workpath,'dist/index.html')
    }])],
    module: {
        rules: [{
            test: /\.ts$/,
            use: [{
                loader: 'ts-loader'
            }]
        }]
    }
}
