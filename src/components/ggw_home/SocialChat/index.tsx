const SocialChat = (props) => {
  const {
    handleCloseChat = () => {},
  } = props

  return (
    <aside className="chatSidebar w-80 glass-surface border-l border-white/10 flex-col hidden md:flex shrink-0">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 h-14">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="w-6 h-6 rounded bg-cyan-400/15 flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
          <span className="text-white font-semibold text-sm">Social Chat</span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[10px] text-slate-300 bg-white/10 px-1.5 py-0.5 rounded">129 Online</span>
          <button
            onClick={handleCloseChat}
            className="text-slate-400 hover:text-white transition-colors p-1 rounded hover:bg-white/10"
            title="Close Chat"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3" id="chat-messages">
        <div className="text-sm">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-cyan-300">PlayerOne</span>
            <span className="text-xs text-slate-500">10:42</span>
          </div>
          <p className="text-slate-200 break-words">That cashout was clean at 2.14x.</p>
        </div>
        <div className="text-sm">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-orange-300">CryptoKing</span>
            <span className="text-xs text-slate-500">10:43</span>
          </div>
          <p className="text-slate-200 break-words">Anyone farming the hourly drop?</p>
        </div>
        <div className="text-sm">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-emerald-300">Winner_99</span>
            <span className="text-xs text-slate-500">10:45</span>
          </div>
          <p className="text-slate-200 break-words">Flip table is hot right now.</p>
        </div>
      </div>

      <div className="p-3 border-t border-white/10 bg-slate-950/50">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full bg-slate-950/80 border border-white/15 rounded px-3 py-2 text-sm focus:outline-none focus:border-cyan-300 text-white placeholder-slate-500"
          />
          <button className="bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 px-3 rounded transition hover:from-cyan-300 hover:to-teal-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default SocialChat
