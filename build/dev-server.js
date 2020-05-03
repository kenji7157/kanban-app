// Node.jsのrequireスタイルでインポート
const boodyParser = require('body-parser')

// Expressアプリケーションインスタンスを受け取る関数をエクスポート
module.exports = app => {
  // HTTPリクエストのbodyの内容をJSONとして解析するミドルウェアをエクスポート
  app.use(boodyParser.json())

  // ここ以降にAPIの実装内容を記載していく
}