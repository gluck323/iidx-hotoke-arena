import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    handleName: '',
    email: '',
    organization: 'BBD',
    generation: '',
    category: 'general',
    subject: '',
    message: '',
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          handleName: '',
          email: '',
          organization: 'BBD',
          generation: '',
          category: 'general',
          subject: '',
          message: '',
          agreeToTerms: false,
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
            お問い合わせ
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6">
            ご質問・ご要望はこちらからお気軽にどうぞ
          </p>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-classic-slate to-iidx-blue mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {/* サイドバー情報 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            {/* お問い合わせ内容 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-iidx-blue/30 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">
                お問い合わせ内容
              </h2>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                <li className="flex items-start">
                  <span className="text-iidx-blue mr-2">•</span>
                  <span>イベント参加方法について</span>
                </li>
                <li className="flex items-start">
                  <span className="text-iidx-magenta mr-2">•</span>
                  <span>イベント内容に関する質問</span>
                </li>
                <li className="flex items-start">
                  <span className="text-classic-slate mr-2">•</span>
                  <span>その他ご質問・ご要望</span>
                </li>
              </ul>
            </div>

            {/* 連絡先情報 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-iidx-magenta/30 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">
                その他の連絡方法
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-300">
                <div>
                  <h3 className="font-bold text-iidx-blue mb-1 sm:mb-2 text-sm sm:text-base">Discord</h3>
                  <p className="text-xs sm:text-sm">
                    コミュニティサーバーで直接質問も可能です
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-iidx-magenta mb-1 sm:mb-2 text-sm sm:text-base">Twitter/X</h3>
                  <p className="text-xs sm:text-sm">
                    最新情報はSNSでも発信中
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* お問い合わせフォーム */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-classic-slate/30">
              {submitStatus === 'success' ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">✓</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                    送信完了
                  </h2>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                    お問い合わせありがとうございます。
                    <br />
                    内容を確認次第、ご返信させていただきます。
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="bg-classic-slate hover:bg-iidx-blue text-white font-bold py-2 sm:py-3 px-5 sm:px-6 rounded-lg transition-colors text-sm sm:text-base"
                  >
                    新しいお問い合わせを送る
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* ハンドルネーム */}
                  <div>
                    <label htmlFor="handleName" className="block text-white font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                      ハンドルネーム <span className="text-iidx-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="handleName"
                      name="handleName"
                      value={formData.handleName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:border-iidx-blue focus:outline-none focus:ring-2 focus:ring-iidx-blue/50"
                      placeholder="あなたのハンドルネーム"
                    />
                  </div>

                  {/* メールアドレス */}
                  <div>
                    <label htmlFor="email" className="block text-white font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                      メールアドレス <span className="text-iidx-gold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:border-iidx-blue focus:outline-none focus:ring-2 focus:ring-iidx-blue/50"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* 所属団体 */}
                  <div>
                    <label htmlFor="organization" className="block text-white font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                      所属団体 <span className="text-iidx-gold">*</span>
                    </label>
                    <select
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:border-iidx-blue focus:outline-none focus:ring-2 focus:ring-iidx-blue/50"
                    >
                      <option value="BBD">BBD（早稲田大学）</option>
                      <option value="KBM">KBM（慶應義塾大学）</option>
                    </select>
                  </div>

                  {/* 期生・OBOG */}
                  <div>
                    <label htmlFor="generation" className="block text-white font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                      期生・OBOG <span className="text-iidx-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="generation"
                      name="generation"
                      value={formData.generation}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:border-iidx-blue focus:outline-none focus:ring-2 focus:ring-iidx-blue/50"
                      placeholder="例: 16期 または OBOG"
                    />
                  </div>

                  {/* お問い合わせカテゴリ */}
                  <div>
                    <label htmlFor="category" className="block text-white font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                      お問い合わせ種類 <span className="text-iidx-gold">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:border-iidx-blue focus:outline-none focus:ring-2 focus:ring-iidx-blue/50"
                    >
                      <option value="general">一般的なお問い合わせ</option>
                      <option value="participation">イベント参加について</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  {/* 件名 */}
                  <div>
                    <label htmlFor="subject" className="block text-white font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                      件名 <span className="text-iidx-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:border-iidx-blue focus:outline-none focus:ring-2 focus:ring-iidx-blue/50"
                      placeholder="イベント参加方法について"
                    />
                  </div>

                  {/* お問い合わせ内容 */}
                  <div>
                    <label htmlFor="message" className="block text-white font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                      お問い合わせ内容 <span className="text-iidx-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={8}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:border-iidx-blue focus:outline-none focus:ring-2 focus:ring-iidx-blue/50 resize-none"
                      placeholder="お問い合わせ内容を詳しくご記入ください"
                    />
                  </div>

                  {/* プライバシーポリシー同意 */}
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      required
                      className="mt-1 mr-3 w-5 h-5"
                    />
                    <label htmlFor="agreeToTerms" className="text-gray-300 text-sm">
                      個人情報の取り扱いに同意します <span className="text-iidx-gold">*</span>
                    </label>
                  </div>

                  {/* エラーメッセージ */}
                  {submitStatus === 'error' && (
                    <div className="bg-red-900/30 border border-red-500 rounded-lg p-4 text-red-300">
                      送信に失敗しました。もう一度お試しください。
                    </div>
                  )}

                  {/* 送信ボタン */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreeToTerms}
                    className="w-full bg-gradient-to-r from-classic-slate to-iidx-blue hover:from-classic-slate/80 hover:to-iidx-blue/80 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all transform hover:scale-105 disabled:transform-none shadow-lg text-sm sm:text-base"
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* FAQ セクション */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 sm:mt-12 md:mt-16 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            よくある質問
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                q: 'イベントに参加するにはどうすればいいですか？',
                a: '詳細が決まり次第、Webサイトやコミュニティで告知いたします。',
              },
              {
                q: '参加費用はかかりますか？',
                a: 'プレイ料金以外の参加費用については、現在検討中です。決定次第お知らせします。',
              },
              {
                q: '初心者でも参加できますか？',
                a: 'もちろんです！beatmaniaIIDXをプレイされている方なら、レベルに関係なくどなたでも歓迎します。',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 border border-gray-700"
              >
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-start">
                  <span className="text-iidx-blue mr-2 flex-shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-300 ml-6 sm:ml-6">
                  <span className="text-iidx-magenta mr-2">A.</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
