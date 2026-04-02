const SocialChat = (props) => {
  const {
    chatIsOpened = false,
    handleCloseChat = () => {},
  } = props
  return (
    <>
      <aside className="chatSidebar w-80 bg-slate-800 border-r border-slate-700 flex flex-col hidden md:flex shrink-0">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 h-14">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <span className="text-white font-semibold text-sm">Social Chat</span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-[10px] text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">129 On</span>
            <button
              onClick={handleCloseChat}
              className="text-slate-500 hover:text-white transition-colors p-1 rounded hover:bg-slate-800" title="Close Chat"
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
                  <span className="font-bold text-blue-400">PlayerOne</span>
                  <span className="text-xs text-slate-500">10:42</span>
              </div>
              <p className="text-slate-300 break-words">...</p>
          </div>
          <div className="text-sm">
              <div className="flex items-baseline gap-2">
                  <span className="font-bold text-purple-400">CryptoKing</span>
                  <span className="text-xs text-slate-500">10:43</span>
              </div>
              <p className="text-slate-300 break-words">...</p>
          </div>
          <div className="text-sm">
              <div className="flex items-baseline gap-2">
                  <span className="font-bold text-emerald-400">Winner_99</span>
                  <span className="text-xs text-slate-500">10:45</span>
              </div>
              <p className="text-slate-300 break-words">...</p>
          </div>
          <div className="text-sm opacity-50"><p>...</p></div>
          <div className="text-sm opacity-50"><p>...</p></div>
        </div>
        <div className="p-3 border-t border-slate-700 bg-slate-800">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm focus:outline-none focus:border-purple-500 text-white placeholder-slate-500"
            />
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-3 rounded transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default SocialChat