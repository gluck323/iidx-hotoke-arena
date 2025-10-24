import Layout from './components/layout/Layout';
import Section from './components/common/Section';
import Card from './components/common/Card';
import Button from './components/common/Button';

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-iidx-blue/10 via-transparent to-iidx-magenta/10 animate-gradient" />
        <div className="relative z-10 text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-display font-black text-gradient">
            IIDX仏アリーナ
          </h1>
          <p className="text-3xl md:text-5xl font-display text-iidx-gold">
            Season 2
          </p>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            全身で感じる、仏曲のAwesomeさ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg">詳細を見る</Button>
            <Button size="lg" variant="outline">
              お問い合わせ
            </Button>
          </div>
        </div>
      </Section>

      {/* Test Components Section */}
      <Section id="about" background="dark">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gradient mb-4">
            デザインシステムテスト
          </h2>
          <p className="text-iidx-text-gray">
            Phase 1で作成したコンポーネントの表示テスト
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="default">
            <h3 className="text-2xl font-bold text-white mb-3">Default Card</h3>
            <p className="text-iidx-text-gray">
              デフォルトスタイルのカードコンポーネント
            </p>
          </Card>

          <Card variant="glass">
            <h3 className="text-2xl font-bold text-white mb-3">Glass Card</h3>
            <p className="text-iidx-text-gray">
              グラスモーフィズム効果のカード
            </p>
          </Card>

          <Card variant="gradient">
            <h3 className="text-2xl font-bold text-white mb-3">Gradient Card</h3>
            <p className="text-iidx-text-gray">
              グラデーション背景のカード
            </p>
          </Card>
        </div>

        <div className="mt-12 space-y-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      </Section>

      {/* Event Info Section */}
      <Section id="history" background="gradient">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-gradient mb-8 text-center">
            イベント情報
          </h2>

          <Card variant="glass" hover={false} className="p-8">
            <div className="space-y-6 text-white">
              <div>
                <h3 className="text-xl font-bold text-iidx-blue mb-2">開催場所</h3>
                <p className="text-lg">イミグランデ日吉店（一部スペース貸し切り予定）</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-iidx-blue mb-2">対象ゲーム</h3>
                <p className="text-lg">beatmania IIDX 33 Sparkle Shower</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-iidx-blue mb-2">主催</h3>
                <p className="text-lg">
                  KBD（早稲田大学BBD × 慶應義塾大学KBM合同）
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-iidx-blue mb-2">企画者</h3>
                <p className="text-lg">みりんさん（OB）</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </Layout>
  );
}

export default App;
