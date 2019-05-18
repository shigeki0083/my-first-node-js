// HTMLに組み込む場合は匿名関数で囲む必要があるが、Node.jsで動かす場合はモジュール内で動かすため
// 匿名関数は不要。

// JavaScriptをstrict(厳密な)モードで始める宣言。
'use strict';

// コマンドライン引数の3つ目を取得。
// (1:node.js 2:実行ファイル 3:使用可能な最初の引数)
const number = process.argv[2] || 0;

// let:{ }内がスコープとなる変数の宣言。
// varは関数全体がスコープとなるので、使うならletの方が良い。
let sum = 0;
for (let i = 1; i <= number; i++){
    sum = sum + i;
}
console.log(sum);

