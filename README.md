# B.o.Y.K

ブログアプリです。プログラミングの技術ブログとして、今後活用していきます。

# アプリ作成の目的

- TypeScript+React+Redux の構成でアプリケーションを開発するスキル
- ReduxToolkit を用いた状態遷移機能の実装スキル
- TODO アプリよりも少しリッチな CRUD 機能の実装スキル
- ページ遷移機能の実装スキル
- バックエンドとの API 連携スキル（JSONServer）

# アプリイメージ

### ログイン画面

![FCE1B8EB-75AB-4F45-AB37-F09D8A5D71C7_1_201_a](https://user-images.githubusercontent.com/71750637/129868020-7770b2a4-1980-41c2-a7c1-34e07d539da8.jpeg)

### 記事一覧

![7783C0F2-6F93-4709-B35E-229FA8EC50BF_1_201_a](https://user-images.githubusercontent.com/71750637/129868036-8f328c60-0c13-4dd6-8974-1090abe86caf.jpeg)

### 新規投稿画面

![465C124F-C7F9-49AF-B290-27C6D307560A_1_201_a](https://user-images.githubusercontent.com/71750637/129868045-1a8fa551-c2db-4048-a2fb-eb999da1aa1f.jpeg)

### 記事詳細

![66E06632-DF3C-4FA4-A68A-86E86E2C1020_1_201_a](https://user-images.githubusercontent.com/71750637/129868052-dafd1dec-0e1d-4a9b-963e-297f65cc2267.jpeg)

# 起動方法

```
//アプリ起動方法
git clone https://github.com/yoseei/B.o.Y.K.git
yarn start

//JSON server起動方法
cd api
yarn start
```

# 使用技術

- React
- Redux Tool Kit
- Create Async Thunk
- TypeScript
- highlight.js
- JSON server
- firebase
- sass

# 機能一覧

#### ゲストユーザー

- 記事一覧（R）
- 記事詳細（R）
- いいねボタン（U）

#### 管理者

- 新規投稿（C）
- 記事一覧（R）
- 記事詳細（R）
- 投稿編集（U）
- 投稿削除（D）

# 今後の拡張予定

- Firestore でデータの管理
- Firebase Hosting によるデプロイ
- 読者によるコメント投稿
- 管理者へのメッセージ送信
