// サンプルウェブサイトの見出しデータ
const sampleHeadingData = {
  // サンプル1: ニュースサイト
  "https://example-news.com": [
    { tag: "H1", text: "今日のトップニュース" },
    { tag: "H2", text: "国内情勢" },
    { tag: "H3", text: "新型コロナウイルス最新情報" },
    { tag: "H3", text: "経済指標が回復傾向" },
    { tag: "H2", text: "国際ニュース" },
    { tag: "H3", text: "気候変動サミット開催へ" },
    { tag: "H3", text: "世界経済フォーラム最新レポート" },
    { tag: "H2", text: "テクノロジー" },
    { tag: "H3", text: "新型スマートフォン発表" },
    { tag: "H3", text: "AIの進化と社会への影響" },
    { tag: "H4", text: "機械学習の最新動向" },
    { tag: "H4", text: "倫理的AI開発の取り組み" }
  ],
  
  // サンプル2: 技術ブログ
  "https://tech-blog.example.org": [
    { tag: "H1", text: "Webフロントエンド開発最新トレンド2025" },
    { tag: "H2", text: "JavaScriptフレームワークの動向" },
    { tag: "H3", text: "React 19の新機能" },
    { tag: "H3", text: "Vue.jsエコシステムの拡大" },
    { tag: "H3", text: "Svelteの採用事例" },
    { tag: "H2", text: "パフォーマンス最適化テクニック" },
    { tag: "H3", text: "画像最適化の重要性" },
    { tag: "H3", text: "レンダリングパフォーマンス改善方法" },
    { tag: "H4", text: "ブラウザレンダリングの仕組み" },
    { tag: "H4", text: "メモリリーク防止策" },
    { tag: "H2", text: "アクセシビリティ対応" },
    { tag: "H3", text: "WAI-ARIAの適切な使用方法" },
    { tag: "H3", text: "キーボード操作対応の重要性" }
  ],
  
  // サンプル3: ECサイト
  "https://shop.example.net": [
    { tag: "H1", text: "季節のおすすめ商品" },
    { tag: "H2", text: "新着アイテム" },
    { tag: "H3", text: "夏物コレクション" },
    { tag: "H3", text: "限定デザイン商品" },
    { tag: "H2", text: "カテゴリー別商品" },
    { tag: "H3", text: "メンズファッション" },
    { tag: "H4", text: "トップス" },
    { tag: "H4", text: "ボトムス" },
    { tag: "H3", text: "レディースファッション" },
    { tag: "H4", text: "ワンピース" },
    { tag: "H4", text: "アクセサリー" },
    { tag: "H2", text: "セール情報" },
    { tag: "H3", text: "期間限定割引" },
    { tag: "H3", text: "会員限定特典" }
  ],
  
  // サンプル4: 企業サイト
  "https://corporate.example.co.jp": [
    { tag: "H1", text: "企業情報" },
    { tag: "H2", text: "会社概要" },
    { tag: "H3", text: "ビジョンと使命" },
    { tag: "H3", text: "沿革" },
    { tag: "H2", text: "事業内容" },
    { tag: "H3", text: "主要サービス" },
    { tag: "H3", text: "技術研究開発" },
    { tag: "H2", text: "IR情報" },
    { tag: "H3", text: "決算情報" },
    { tag: "H3", text: "株主総会" },
    { tag: "H2", text: "採用情報" },
    { tag: "H3", text: "新卒採用" },
    { tag: "H3", text: "中途採用" },
    { tag: "H2", text: "お問い合わせ" }
  ],
  
  // サンプル5: 個人ブログ
  "https://personal-blog.example.com": [
    { tag: "H1", text: "旅行記録ブログ" },
    { tag: "H2", text: "ヨーロッパ旅行2025" },
    { tag: "H3", text: "フランス・パリの魅力" },
    { tag: "H4", text: "モンマルトルの丘からの眺め" },
    { tag: "H4", text: "ルーブル美術館訪問記" },
    { tag: "H3", text: "イタリア・ローマでの体験" },
    { tag: "H4", text: "コロッセオと古代遺跡" },
    { tag: "H4", text: "現地で出会った人々" },
    { tag: "H2", text: "アジア旅行記" },
    { tag: "H3", text: "タイ・バンコクのグルメ" },
    { tag: "H3", text: "ベトナム・ハノイの街並み" },
    { tag: "H2", text: "旅行のコツと準備" },
    { tag: "H3", text: "効率的な荷物の詰め方" },
    { tag: "H3", text: "海外旅行保険の選び方" },
    { tag: "H3", text: "おすすめの旅行アプリ" }
  ]
};

export default sampleHeadingData;
