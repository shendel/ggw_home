const TokenInfoBar = (props) => {
  return (
    <div className="bg-gradient-to-r from-purple-900/40 via-purple-800/30 to-purple-900/40 border-y border-purple-700/50 backdrop-blur-sm shrink-0">
        <div className="mx-auto px-4 py-3">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                {/*<!-- Left: Smart Contract Info -->*/}
                <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-purple-300 font-semibold">SMART CONTRACT</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-slate-300">
                        <div className="flex items-center gap-2">
                            <span className="text-purple-400 font-bold">GGC</span>
                        </div>
                        <div className="h-6 w-px bg-purple-700/50"></div>
                        <div className="flex items-center gap-2">
                            <span className="text-purple-300">SUPPLY</span>
                            <span className="font-mono text-white">756 011 159,93</span>
                        </div>
                        <div className="h-6 w-px bg-purple-700/50"></div>
                        <div className="flex items-center gap-2">
                            <span className="text-purple-300">PRICE</span>
                            <span className="font-mono text-white">0.0201$</span>
                        </div>
                    </div>
                </div>

                {/*<!-- Right: Buttons -->*/}
                <div className="flex items-center gap-3">
                    <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-4 py-2 rounded font-medium transition-all shadow-lg shadow-emerald-900/50 text-sm">
                        More Info About Token
                    </button>
                    <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-4 py-2 rounded font-medium transition-all shadow-lg shadow-emerald-900/50 text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        GGC Add GGC to MetaMask
                    </button>
                </div>
            </div>
            
            {/*<!-- Mobile: Supply and Price (shown only on small screens) -->*/}
            <div className="sm:hidden mt-3 pt-3 border-t border-purple-700/30 flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                    <span className="text-purple-300">SUPPLY</span>
                    <span className="font-mono text-white text-xs">756 011 159,93</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-purple-300">PRICE</span>
                    <span className="font-mono text-white text-xs">0.0201$</span>
                </div>
            </div>
        </div>
    </div>
  )
}
export default TokenInfoBar