const path = require('path');
module.exports = {
    // 指定できる値は、ファイル名の文字列や、それを並べた配列やオブジェクト
    // 下記はオブジェクトとして指定した例 
    entry: {
        bundle: './src/app.ts'
    },  
    output: {
        // "__dirname"はこのファイルが存在するディレクトリを表す node.js で定義済みの定数
        path: path.join(__dirname,'dist'),
        filename: '[name].js'  // [name]はentryで記述した名前(この例ではbundle）が入る
    },
    // 例えば「 import Foo from './foo' 」と記述すると "foo.ts" という名前のファイルをモジュールとして探す
    // デフォルトは['.js', '.json']
    resolve: {
        extensions:['.ts', '.js']
    },
    devServer: {
        static: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                // 拡張子が .ts で終わるファイルに対して TypeScript コンパイラを適用する
                test:/\.ts$/,loader: 'ts-loader'
            }
        ]
    }
}