# IIDX HOTOKE ARENA SEASON2

IIDX HOTOKE ARENA SEASON2の公式イベント告知サイトです。

## イベント概要

- **開催日**: 2026年2月下旬予定
- **会場**: イミグランデ日吉店
- **参加人数**: 約40名
- **形式**: 4台同時再生による音楽イベント

## 技術スタック

- **フレームワーク**: React 18 + TypeScript
- **ビルドツール**: Vite
- **ルーティング**: React Router DOM
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion

## 開発環境のセットアップ

### 必要な環境

- Node.js 18以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 環境変数の設定
cp .env.example .env
# .env ファイルを編集してDiscord Webhook URLを設定

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# ビルドのプレビュー
npm run preview
```

### Discord Webhook の設定

お問い合わせフォームからの送信をDiscordサーバーに通知するには、以下の手順で設定します：

1. **Discord Webhookの作成**
   - Discordサーバーの設定を開く
   - 「連携サービス」→「ウェブフック」→「新しいウェブフック」をクリック
   - 名前を設定（例：IIDX HOTOKE ARENA お問い合わせ）
   - 通知を送信するチャンネルを選択
   - 「ウェブフックURLをコピー」をクリック

2. **環境変数の設定**
   - `.env.example` を `.env` にコピー
   - `VITE_DISCORD_WEBHOOK_URL` にコピーしたWebhook URLを設定

```bash
# .env
VITE_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
```

3. **Vercelでの環境変数設定**
   - Vercelダッシュボードのプロジェクト設定を開く
   - 「Settings」→「Environment Variables」
   - `VITE_DISCORD_WEBHOOK_URL` を追加し、Webhook URLを設定
   - 再デプロイを実行

## デプロイ

### Vercelへのデプロイ（推奨）

1. [Vercel](https://vercel.com)にログイン
2. GitHubリポジトリを接続
3. プロジェクト設定:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. デプロイ実行

### Netlifyへのデプロイ

1. [Netlify](https://netlify.com)にログイン
2. GitHubリポジトリを接続
3. ビルド設定:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. デプロイ実行

## ライセンス

このプロジェクトは KBD IIDX HOTOKE ARENA製作委員会 によって管理されています。

## お問い合わせ

イベントに関するお問い合わせは、Webサイトの[お問い合わせフォーム](/contact)からお願いします。
