const TokenInfoBar = () => {
  return (
    <div className="h-11 px-3 md:px-5 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl shrink-0">
      <div className="h-full w-full flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 md:gap-5 text-xs text-slate-300 overflow-x-auto no-scrollbar whitespace-nowrap">
          <span className="px-2 py-1 rounded-md bg-white/10 text-orange-300 mono">GGC / BSC</span>
          <span>Supply: <span className="mono text-white">756,011,159.93</span></span>
          <span>Price: <span className="mono text-cyan-300">$0.0201</span></span>
          <span className="hidden md:inline">24h Volume: <span className="mono text-white">$381,420</span></span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-xs font-medium glass-surface hover:bg-white/15 transition">
            Token Details
          </button>
          <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-orange-500 to-amber-400 text-slate-950 hover:from-orange-400 hover:to-amber-300 transition shadow-lg shadow-orange-500/20">
            Add To MetaMask
          </button>
        </div>
      </div>
    </div>
  )
}

export default TokenInfoBar
