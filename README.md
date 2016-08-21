# Promise practice

単なる練習コードです。なんでもない。以下メモ。

1. `npm install` 実行。
2. `npm run webpack` 実行。
3. 別ターミナルで `npm run start` 実行。

で起動する。

ポート`3000`でアクセス。動き；

1. 2000ms待つ。
2. サーバへ非同期なGETリクエストを送信。
3. レスポンスのJSON文字列をオブジェクトに変換。
4. オブジェクトの情報を加工して画面に描画。