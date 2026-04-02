const SocialChat = (props) => {
  return (
    <>
      <aside className="w-80 bg-slate-800 border-r border-slate-700 flex flex-col hidden md:flex shrink-0">
        <div className="p-3 border-b border-slate-700 bg-slate-800/50 backdrop-blur font-bold text-slate-300 flex justify-between items-center">
          <span>Social Chat</span>
          <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">129 Online</span>
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