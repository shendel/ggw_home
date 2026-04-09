export default function FlipCoin() {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="glass-surface neon-outline rounded-3xl p-6 md:p-8">
        <div className="text-xs mono text-cyan-300 mb-3">GAME MODULE</div>
        <h1 className="text-3xl md:text-4xl font-semibold">FlipCoin</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">
          New interface shell is ready. Next step is wiring this layout to live game controls, odds settings, and history stream.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-3 text-sm">
          <div className="rounded-xl p-4 border border-white/10 bg-white/5">Fast 50/50 rounds</div>
          <div className="rounded-xl p-4 border border-white/10 bg-white/5">Wallet-native payouts</div>
          <div className="rounded-xl p-4 border border-white/10 bg-white/5">Session analytics</div>
        </div>
      </div>
    </section>
  )
}
