import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // カウントダウンタイマー
  useEffect(() => {
    const targetDate = new Date('2026-02-07T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // パララックススクロール効果
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.documentElement.style.setProperty('--scroll', scrolled.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-iidx-black relative overflow-hidden">
      {/* 仏像背景 - 固定 */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0">
        <img
          src="/buddha-statue.jpg"
          alt=""
          className="w-full h-full object-cover mix-blend-luminosity"
        />
      </div>

      {/* 装飾レイヤー - パララックス効果 */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        {/* 左側 - 細いライン群 */}
        <div className="absolute top-[15vh] left-0 w-[1px] h-[250px] bg-gradient-to-b from-transparent via-white/[0.18] to-transparent"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.15px))' }}></div>
        <div className="absolute top-[60vh] left-8 w-[1px] h-[180px] bg-gradient-to-b from-transparent via-white/[0.15] to-transparent"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.25px))' }}></div>
        <div className="absolute top-[110vh] left-4 w-[1px] h-[200px] bg-gradient-to-b from-transparent via-white/[0.16] to-transparent"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.1px))' }}></div>
        <div className="absolute top-[5vh] left-16 w-[1px] h-[150px] bg-gradient-to-b from-transparent via-white/[0.12] to-transparent"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.32px))' }}></div>

        {/* 右側 - 細いライン群 */}
        <div className="absolute top-[25vh] right-0 w-[1px] h-[220px] bg-gradient-to-b from-transparent via-white/[0.18] to-transparent"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.2px))' }}></div>
        <div className="absolute top-[75vh] right-8 w-[1px] h-[200px] bg-gradient-to-b from-transparent via-white/[0.15] to-transparent"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.18px))' }}></div>
        <div className="absolute top-[125vh] right-4 w-[1px] h-[180px] bg-gradient-to-b from-transparent via-white/[0.16] to-transparent"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.28px))' }}></div>
        <div className="absolute top-[50vh] right-16 w-[1px] h-[160px] bg-gradient-to-b from-transparent via-white/[0.12] to-transparent"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.11px))' }}></div>

        {/* 左上 - 幾何学形状（正方形） */}
        <div className="absolute top-[10vh] left-12 w-[80px] h-[80px] border border-white/[0.1] rotate-45"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.12px))' }}></div>

        {/* 左上 - 小さな幾何学形状 */}
        <div className="absolute top-[8vh] left-20 w-[40px] h-[40px] border border-white/[0.08] rotate-[60deg]"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.18px))' }}></div>

        {/* 左中 - 幾何学形状（六角形風） */}
        <div className="absolute top-[45vh] left-16 w-[60px] h-[60px] border border-white/[0.08] rotate-30"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.22px))' }}></div>

        {/* 左下 - 幾何学形状 */}
        <div className="absolute top-[105vh] left-20 w-[70px] h-[50px] border border-white/[0.09] -rotate-12"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.33px))' }}></div>

        {/* 右上 - 幾何学形状（矩形） */}
        <div className="absolute top-[20vh] right-16 w-[50px] h-[70px] border border-white/[0.09] rotate-12"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.16px))' }}></div>

        {/* 右上 - 小さな円形風 */}
        <div className="absolute top-[18vh] right-24 w-[35px] h-[35px] border border-white/[0.07] rotate-45 rounded-full"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.27px))' }}></div>

        {/* 右中 - 幾何学形状 */}
        <div className="absolute top-[65vh] right-20 w-[55px] h-[55px] border border-white/[0.08] rotate-[25deg]"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.19px))' }}></div>

        {/* 右下 - 幾何学形状（正方形） */}
        <div className="absolute top-[90vh] right-12 w-[60px] h-[60px] border border-white/[0.1] rotate-12"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.3px))' }}></div>

        {/* 斜めの細いライン - 左上 */}
        <div className="absolute top-[40vh] left-0 w-[150px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent rotate-45 origin-left"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.35px))' }}></div>

        {/* 斜めの細いライン - 左下 */}
        <div className="absolute top-[95vh] left-0 w-[130px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent -rotate-[30deg] origin-left"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.13px))' }}></div>

        {/* 斜めの細いライン - 右上 */}
        <div className="absolute top-[30vh] right-0 w-[140px] h-[1px] bg-gradient-to-l from-transparent via-white/[0.11] to-transparent -rotate-[40deg] origin-right"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.24px))' }}></div>

        {/* 斜めの細いライン - 右下 */}
        <div className="absolute top-[100vh] right-0 w-[120px] h-[1px] bg-gradient-to-l from-transparent via-white/[0.12] to-transparent -rotate-45 origin-right"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.25px))' }}></div>

        {/* 水平の細いライン */}
        <div className="absolute top-[80vh] left-0 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.4px))' }}></div>

        {/* 左側 - ぼかした大きな矩形 */}
        <div className="absolute top-[35vh] -left-40 w-[200px] h-[300px] bg-white/[0.04] rotate-12 filter blur-3xl"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.08px))' }}></div>

        {/* 右側 - ぼかした大きな矩形 */}
        <div className="absolute top-[55vh] -right-40 w-[180px] h-[280px] bg-white/[0.04] -rotate-12 filter blur-3xl"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.22px))' }}></div>

        {/* 下部 - ぼかした矩形 */}
        <div className="absolute top-[120vh] -left-32 w-[180px] h-[250px] bg-white/[0.035] rotate-6 filter blur-3xl"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.14px))' }}></div>

        {/* 右下 - ぼかした矩形 */}
        <div className="absolute top-[115vh] -right-36 w-[170px] h-[240px] bg-white/[0.03] -rotate-8 filter blur-3xl"
             style={{ transform: 'translateY(calc(var(--scroll) * 0.29px))' }}></div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative md:min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-8 sm:pt-12 md:pt-0 pb-8 md:pb-0">

        <div className="container mx-auto px-3 py-0 md:py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-4 sm:mb-5 md:mb-6 flex justify-center">
              <img src="/Logo.png" alt="IIDX HOTOKE ARENA SEASON 2" className="w-full max-w-md sm:max-w-2xl md:max-w-4xl h-auto" />
            </div>
            <div className="w-40 sm:w-48 h-0.5 sm:h-1 md:h-2 bg-gradient-to-r from-transparent via-iidx-red to-transparent mx-auto mb-4 sm:mb-5 md:mb-12 opacity-80"></div>

            {/* イベント告知バナー */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-black/80 backdrop-blur-sm border-2 border-iidx-red/60 rounded-lg md:rounded-2xl p-3 sm:p-5 md:p-8 mb-0 md:mb-12 max-w-4xl mx-auto"
            >
              <div className="text-white text-[11px] sm:text-sm font-bold mb-1 sm:mb-2">次回開催予定</div>
              <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-white mb-1.5 sm:mb-3 md:mb-4">
                2026年2月7日
              </h2>
              <p className="text-[11px] sm:text-sm md:text-base text-gray-300 mb-2.5 sm:mb-4 md:mb-6">
                詳細時間は未定 | 参加希望アンケート公開中！
              </p>

              {/* カウントダウン */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-3 md:gap-4 max-w-2xl mx-auto mb-2 sm:mb-3 md:mb-6">
                {[
                  { value: countdown.days, label: '日' },
                  { value: countdown.hours, label: '時間' },
                  { value: countdown.minutes, label: '分' },
                  { value: countdown.seconds, label: '秒' },
                ].map((item, index) => (
                  <div key={index} className="bg-black/50 rounded-md sm:rounded-xl p-2 sm:p-3 md:p-4 border border-white/20">
                    <div className="text-xl sm:text-2xl md:text-4xl font-bold text-white">{item.value}</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc9H1xO4eNFwjEOaprUjeEVRNUWXrZaz41gECJmkOHOyTG5Fg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-iidx-red to-iidx-red-dark hover:from-iidx-red-light hover:to-iidx-red text-white font-bold py-2 sm:py-3 md:py-5 px-6 sm:px-8 md:px-12 rounded-full transition-all transform hover:scale-110 shadow-2xl text-sm sm:text-base md:text-xl border-2 border-iidx-red/50 hover:border-iidx-red animate-pulse hover:animate-none"
              >
                参加はこちら
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* スクロールインジケーター */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* イベント詳細情報セクション */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              イベント詳細
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-iidx-red via-white to-iidx-red mx-auto"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-iidx-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: '開催時期',
                description: '2026年2月7日',
                detail: '詳細は決定次第お知らせします',
                borderColor: 'border-white/20',
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-iidx-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: '開催場所',
                description: (
                  <a
                    href="https://maps.app.goo.gl/PMjT4ftyPpeXx7vD9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-iidx-red-light transition-colors underline"
                  >
                    イミグランデ日吉店
                  </a>
                ),
                detail: '一部スペース貸し切り予定',
                borderColor: 'border-white/20',
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-iidx-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                ),
                title: '対象機種',
                description: (
                  <div className="flex justify-center mt-4">
                    <img src="/sparkle-shower-logo.png" alt="Sparkle Shower" className="h-20 w-auto" />
                  </div>
                ),
                detail: '',
                borderColor: 'border-white/20',
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-iidx-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'イベント形式',
                description: '4台同時再生',
                detail: '仏曲を仏音響で',
                borderColor: 'border-white/20',
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-iidx-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: '参加者',
                description: 'アンケート公開予定',
                detail: '前回は総勢40名程度',
                borderColor: 'border-white/20',
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-iidx-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                ),
                title: 'プレゼント',
                description: 'お菓子等を予定',
                detail: '得票数1位の受賞者に贈呈',
                borderColor: 'border-white/20',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`bg-black/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border ${item.borderColor} hover:border-white/40 transition-all`}
              >
                <div className="mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-2">{item.description}</p>
                <p className="text-sm sm:text-base text-gray-400">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* 主催情報 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-iidx-red/60 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              主催情報
            </h3>
            <div className="text-gray-300 space-y-2">
              <p className="text-sm sm:text-base md:text-lg">
                <span className="text-white font-bold">主催：</span>
                KBD IIDX HOTOKE ARENA製作委員会
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                <span className="text-white font-bold">企画・原案：</span>
                みりん
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8">
              多幸感を、全身で。
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              好きな曲を筐体の良い音響で流し合う
              <br />
              Awesomeイベントに参加しませんか？
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                to="/about"
                className="inline-block bg-gray-800 border border-white/20 hover:bg-gray-700 hover:border-white/40 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base md:text-lg"
              >
                イベント概要を見る
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-gray-800 border border-white/20 hover:bg-gray-700 hover:border-white/40 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all transform hover:scale-105 text-sm sm:text-base md:text-lg"
              >
                お問い合わせ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
