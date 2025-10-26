import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-iidx-black relative">
      {/* 仏像背景 - 固定 */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0">
        <img
          src="/buddha-statue.jpg"
          alt=""
          className="w-full h-full object-cover mix-blend-luminosity"
        />
      </div>
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 relative z-10">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
            WHAT IS "仏アリーナ"
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-iidx-red via-white to-iidx-red mx-auto"></div>
        </motion.div>

        {/* イベント概要 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <div className="bg-black/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/20">
            <div className="flex items-center mb-4 md:mb-6">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-iidx-red mr-3 md:mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                イベント概要
              </h2>
            </div>
            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-white">IIDX HOTOKE ARENA SEASON2</strong>は、beatmaniaIIDXプレイヤーが集まり、好きな曲を筐体の良い音響で流し合う音楽イベントです。
              </p>
              <p>
                スコアで競い合う競技性を重視したイベントではなく、参加者各々が好きな曲をプレイして楽しむエキシビションとしての側面が強いことが特徴です。
              </p>
              <p>
                前回の仏アリーナでは総勢40名程度の参加者が集まり、Actを2つに分け開催されました。
              </p>
            </div>
          </div>
        </motion.section>

        {/* 起源 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <div className="bg-black/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/20">
            <div className="flex items-center mb-4 md:mb-6">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-iidx-red mr-3 md:mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                オリジン
              </h2>
            </div>
            <div className="text-gray-300 text-sm sm:text-base leading-relaxed bg-black/30 rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 border-l-4 border-iidx-red/50">
              <p className="mb-3 sm:mb-4">
                2019年5月5日、タイトーステーション BIGBOX高田馬場店の閉店時間の少し前、静まり返った店内にて当時在籍のBBDメンバー（KBMの部員も居たという説あり）が4人でアリーナモードに入ったところ、全身を包む大爆音と仏曲（当時、某iidx系YouTuberの影響でいわゆる神曲はこのように呼称されていた）のAwesomeさに脳髄を焼かれ、「好きな仏曲を爆音で鳴らすこの遊び神すぎる」と、この行為は"仏アリーナ"と誰からともなく呼ばれるようになった。
              </p>
              <p className="mb-3 sm:mb-4">
                この仏アリーナは今もなお不定期かつ突発的に発生し、その度にKBDのメンバーを多幸感の沼に引きずりこんでいる。
              </p>
              <p className="text-right text-xs sm:text-sm text-gray-400">
                （2024・みりん）
              </p>
            </div>
          </div>
        </motion.section>

        {/* 開催形式 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 md:mb-16"
        >
          <div className="bg-black/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/20">
            <div className="flex items-center mb-4 md:mb-6">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-iidx-red mr-3 md:mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                開催形式
              </h2>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-black/50 rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 border border-white/20">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 md:mb-3">オフライン開催</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 md:mb-4">
                  現地参加のみのイベントです。配信等は行わない予定です。
                </p>
                <div className="space-y-2 text-sm sm:text-base text-gray-400">
                  <p className="flex items-start flex-wrap">
                    <span className="text-white mr-2 flex-shrink-0">•</span>
                    <span className="flex-1">
                      開催場所：
                      <a
                        href="https://maps.app.goo.gl/PMjT4ftyPpeXx7vD9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-iidx-red hover:text-iidx-red-light transition-colors underline"
                      >
                        イミグランデ日吉店
                      </a>
                      <span className="inline sm:inline">（一部スペース貸し切り予定）</span>
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-white mr-2 flex-shrink-0">•</span>
                    <span>開催時期：2026年2月下旬を想定<span className="inline sm:inline">（詳細日時は未定）</span></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 参加について */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <div className="bg-black/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/20">
            <div className="flex items-center mb-4 md:mb-6">
              <svg className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 text-iidx-red mr-3 md:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                参加について
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-iidx-red/20 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-iidx-red"></div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">参加人数</h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    現在、参加希望者のアンケートを実施中です。前回は総勢40名程度の方にご参加いただきました。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-iidx-red/20 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-iidx-red"></div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">どなたでも歓迎</h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    beatmaniaIIDXをプレイしている方なら、レベルに関係なくどなたでも参加できます。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-iidx-red/20 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-iidx-red"></div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">楽しむことが第一</h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    競技性よりも、好きな曲を良い音響で楽しむことを重視したイベントです。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* イベントの雰囲気 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <div className="bg-black/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/20">
            <div className="flex items-center mb-4 sm:mb-6 md:mb-8">
              <svg className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 text-iidx-red mr-3 md:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                イベントの特徴
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-5 md:p-6 bg-black/30 rounded-lg md:rounded-xl border border-white/20">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-iidx-red mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">好きな曲を共有</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  参加者それぞれが好きな曲をプレイして楽しめます。
                </p>
              </div>
              <div className="text-center p-4 sm:p-5 md:p-6 bg-black/30 rounded-lg md:rounded-xl border border-white/20">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-iidx-red mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">仏音響</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  筐体の仏音響で、IIDXの楽曲を存分に楽しめます。
                </p>
              </div>
              <div className="text-center p-4 sm:p-5 md:p-6 bg-black/30 rounded-lg md:rounded-xl border border-white/20 sm:col-span-2 md:col-span-1">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-iidx-red mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">和やかな雰囲気</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  競技性よりも交流を重視した、リラックスした雰囲気です。
                </p>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 p-4 sm:p-5 md:p-6 bg-white/5 rounded-lg md:rounded-xl border border-white/20">
              <div className="flex items-start">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-iidx-red mr-3 sm:mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">初心者の方も安心</h4>
                  <p className="text-sm sm:text-base text-gray-300">
                    初めての参加で不安なことがあっても大丈夫です。運営スタッフが丁寧にサポートいたしますので、お気軽にご参加ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* プレゼント・お菓子 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="flex items-center mb-4 md:mb-6">
              <svg className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 text-iidx-red mr-3 md:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                プレゼント（予定）
              </h2>
            </div>
            <div className="text-gray-200 space-y-4">
              <p className="text-lg">
                参加者の投票により、得票数が一番多かった受賞者にプレゼントを贈呈します。
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-center">
                  <span className="text-white mr-3">•</span>
                  <span>お菓子の詰め合わせ</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>2,000〜3,000円程度を想定</span>
                </li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                ※詳細は未定です。決定次第お知らせします。
              </p>
            </div>
          </div>
        </motion.section>

        {/* 主催情報 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <div className="bg-black/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/20">
            <div className="flex items-center mb-4 md:mb-6">
              <svg className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 text-iidx-red mr-3 md:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                主催情報
              </h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">主催</h3>
                <p className="text-lg">KBD IIDX HOTOKE ARENA製作委員会</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">企画・原案</h3>
                <p className="text-lg">みりん</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">対象ゲーム</h3>
                <div className="flex justify-start">
                  <img src="/sparkle-shower-logo.png" alt="beatmania IIDX 33 Sparkle Shower" className="h-20 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-iidx-red to-iidx-red-dark hover:from-iidx-red-light hover:to-iidx-red text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-iidx-red/50 border border-iidx-red/50"
          >
            お問い合わせはこちら
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
