import { useEffect, useMemo, useState } from 'react'

import { useInjectedWeb3 } from '@/web3/InjectedWeb3Provider'

const statConfig = [
  { label: '24h Bet Volume', target: 2410000, prefix: '$', compact: true },
  { label: 'Active Players', target: 12842 },
  { label: 'Avg Settlement', target: 1.4, suffix: 's', decimals: 1 },
]

const games = [
  {
    title: 'Crash Arena',
    desc: 'Live multiplier with instant on-chain cashout and configurable risk profiles.',
    accent: 'from-orange-400/30 to-orange-900/10',
    href: '#/crashgame',
  },
  {
    title: 'FlipCoin Duel',
    desc: 'Head-to-head coin flips with wallet-native settlement and leaderboard tracking.',
    accent: 'from-cyan-400/30 to-cyan-900/10',
    href: '#/flipcoin',
  },
  {
    title: 'Reward Engine',
    desc: 'Dynamic airdrop multipliers based on activity, streaks, and liquidity actions.',
    accent: 'from-emerald-400/30 to-emerald-900/10',
    href: '#/',
  },
]

const bullets = [
  'Provably fair logic and transparent on-chain execution',
  'Non-custodial wallet flow, no account deposits held by platform',
  'Fast rounds, low latency UI, and mobile-optimized controls',
]

const feedTemplates = [
  { user: 'alpha.whale', action: 'cashed out Crash at', value: '2.18x', tone: 'text-emerald-300' },
  { user: 'flip.master', action: 'won FlipCoin', value: '+$84', tone: 'text-cyan-300' },
  { user: 'zero2hero', action: 'opened high-risk Crash bet', value: '$120', tone: 'text-orange-300' },
  { user: 'mika.chain', action: 'stacked streak bonus', value: '+12%', tone: 'text-teal-300' },
  { user: 'lunarbyte', action: 'joined table', value: 'FlipCoin', tone: 'text-sky-300' },
]

const createFeedEvent = (idOffset = 0) => {
  const item = feedTemplates[Math.floor(Math.random() * feedTemplates.length)]
  return {
    id: `${Date.now()}-${idOffset}`,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    ...item,
  }
}

const formatValue = (value, options = {}) => {
  const {
    prefix = '',
    suffix = '',
    compact = false,
    decimals,
  } = options

  const formatted = compact
    ? new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 2 }).format(value)
    : new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals ?? 0,
      maximumFractionDigits: decimals ?? 0,
    }).format(value)

  return `${prefix}${formatted}${suffix}`
}

const AnimatedCounter = ({ target, ...opts }) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const duration = 900
    const start = performance.now()
    let raf = 0

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target])

  return <span className="counter-glow">{formatValue(value, opts)}</span>
}

const TiltCard = ({ href, className, children, style }) => {
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)')

  const onMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const relativeX = (event.clientX - rect.left) / rect.width
    const relativeY = (event.clientY - rect.top) / rect.height

    const rotateY = (relativeX - 0.5) * 8
    const rotateX = (0.5 - relativeY) * 8

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`)
  }

  return (
    <a
      href={href}
      className={`tilt-card ${className}`}
      style={{ ...style, transform }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)')}
    >
      {children}
    </a>
  )
}

const LiveFeed = () => {
  const initialFeed = useMemo(() => {
    return [0, 1, 2, 3].map((idx) => createFeedEvent(idx))
  }, [])

  const [feed, setFeed] = useState(initialFeed)

  useEffect(() => {
    const interval = setInterval(() => {
      setFeed((prev) => [createFeedEvent(), ...prev].slice(0, 5))
    }, 2300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="rounded-xl p-3 bg-white/5 border border-white/10">
      <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
        <span className="mono">LIVE FEED</span>
        <span className="inline-flex items-center gap-1 text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          live
        </span>
      </div>

      <div className="space-y-2">
        {feed.map((event) => (
          <div key={event.id} className="text-xs text-slate-300 rounded-lg px-2 py-1.5 bg-slate-950/40 border border-white/5 feed-item-in">
            <div className="flex justify-between items-center gap-2">
              <span className="text-slate-400 mono">{event.time}</span>
              <span className={`mono ${event.tone}`}>{event.value}</span>
            </div>
            <div>
              <span className="text-white">{event.user}</span>
              {' '}
              <span>{event.action}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HomeInteractive() {
  const { isConnected, injectedAccount } = useInjectedWeb3()

  return (
    <section className="max-w-7xl mx-auto space-y-8 md:space-y-10">
      <div className="glass-surface neon-outline rounded-3xl p-6 md:p-9 relative overflow-hidden fade-up">
        <div className="absolute -right-20 -top-24 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full" />
        <div className="absolute -left-20 -bottom-28 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full" />

        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          <div className="flex-1 space-y-4 md:space-y-5">
            <p className="inline-flex items-center gap-2 text-xs md:text-sm mono text-slate-300 bg-white/10 px-3 py-1 rounded-full">
              LIVE WEB3 GAMING LOBBY
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Bet faster.
              <br />
              <span className="text-orange-300">Settle instantly.</span>
              <br />
              Keep custody.
            </h1>
            <p className="text-slate-300 max-w-2xl text-sm md:text-base">
              A modern gaming surface inspired by real-time Solana-style products, rebuilt for GGW with cleaner hierarchy, stronger contrast, and richer motion.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#/crashgame"
                className="px-5 py-3 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-orange-400 to-amber-300 hover:from-orange-300 hover:to-amber-200 transition"
              >
                Launch Crash
              </a>
              <a
                href="#/flipcoin"
                className="px-5 py-3 rounded-xl font-semibold glass-surface hover:bg-white/10 transition"
              >
                Try FlipCoin
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[360px] p-4 md:p-5 rounded-2xl bg-slate-950/60 border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 mono">
              <span>Wallet Status</span>
              <span className={isConnected ? 'text-emerald-300' : 'text-amber-300'}>
                {isConnected ? 'CONNECTED' : 'DISCONNECTED'}
              </span>
            </div>

            <div className="rounded-xl p-4 bg-white/5 border border-white/10">
              <div className="text-slate-400 text-xs mb-1">Address</div>
              <div className="mono text-sm break-all text-slate-100">
                {injectedAccount || 'Connect your wallet to start betting'}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {statConfig.map((item) => (
                <div key={item.label} className="rounded-lg bg-white/5 border border-white/10 p-2.5">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wide">{item.label}</div>
                  <div className="mt-1 text-sm font-semibold">
                    <AnimatedCounter
                      target={item.target}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      decimals={item.decimals}
                      compact={item.compact}
                    />
                  </div>
                </div>
              ))}
            </div>

            <LiveFeed />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
        {games.map((game, idx) => (
          <TiltCard
            href={game.href}
            key={game.title}
            className={`fade-up rounded-2xl border border-white/10 overflow-hidden p-5 bg-gradient-to-br ${game.accent} hover:translate-y-[-4px] transition duration-300`}
            style={{ animationDelay: `${120 + (idx * 100)}ms` }}
          >
            <div className="text-xs mono text-slate-300 mb-3">FEATURED MODE</div>
            <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
            <p className="text-sm text-slate-200/90 leading-relaxed">{game.desc}</p>
            <div className="mt-4 text-cyan-200 text-sm">Open Mode -&gt;</div>
          </TiltCard>
        ))}
      </div>

      <div className="glass-surface rounded-2xl p-5 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold">Why this redesign direction</h2>
        <div className="mt-3 space-y-2">
          {bullets.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-slate-200">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
