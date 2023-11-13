# Eventportal　フロントエンド

このレポジトリはEventportalのフロントエンドです。

NuxtJS（Vue）で開発されています。開発担当者がVueが好きでこれを使ってるだけなので、お好みに応じてReactなりSvelteなりViteなりに書き換えていただいて一向に構いません。

## 開発の前に ~ 必要なもの

### Bunランタイム

BunというJSランタイム・パッケージマネージャーが必要です。

以下のコマンドを実行すればインストールできます。

```zsh
curl -fsSL https://bun.sh/install | bash
```

### 各種依存関係のインストールやAPIアクセス用コードの生成

以下のコマンドを実行してください。

```zsh
bun install; bun gen:api
```

## 開発サーバーの立ち上げ

以下のコマンドを実行してください。原則的に開発モード（`bun dev`）でおおむねの挙動を再現できます。

```zsh
bun dev # 開発モード
bun preview # 本番環境モード
```

## デプロイ方法

詳細は[chuo-u-ids/docs](https://github.com/chuo-u-ids/docs.git)のドキュメントを読んでください。

![手順画像](https://github.com/chuo-u-ids/eventportal-frontend/assets/49401718/4fd14163-33f9-4ba1-b4fe-45b85619c476)

デプロイ先の管理はBE/FE一括して [@mizphses](https://mizphs.es) (尾川) が担当しています。

デプロイ先のドメイン変更など含めご確認は尾川までお願いします。
