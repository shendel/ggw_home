export default function CrashGame() {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="glass-surface neon-outline rounded-3xl p-6 md:p-8">
        <div className="text-xs mono text-orange-300 mb-3">GAME MODULE</div>
        <h1 className="text-3xl md:text-4xl font-semibold">CrashGame</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">
          Interface has been modernized to match the new GGW style. Live crash chart and bet panel can now be dropped into this container.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-3 text-sm">
          <div className="rounded-xl p-4 border border-white/10 bg-white/5">Real-time multiplier</div>
          <div className="rounded-xl p-4 border border-white/10 bg-white/5">Auto cashout presets</div>
          <div className="rounded-xl p-4 border border-white/10 bg-white/5">Risk profile controls</div>
        </div>
      </div>
    </section>
  )
}
