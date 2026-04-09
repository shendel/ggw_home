import { useHashRouterContext } from '@/contexts/HashRouterProvider'

const menuItems = {
  '/': 'News Feed',
  '/flipcoin': 'FlipCoin',
  '/crashgame': 'CrashGame'
}

const infoCards = [
  { label: 'Players Online', value: '12,842' },
  { label: 'Live Volume', value: '$2.41M' },
  { label: 'Payout Speed', value: '1.4s' },
]

const NavBar = (props) => {
  const {
    chatIsOpened = false,
    handleOpenChat = () => {},
    mode = 'top',
  } = props

  const {
    hash: activePage
  } = useHashRouterContext()

  if (mode === 'sidebar') {
    return (
      <div className="h-full flex flex-col gap-4">
        <div>
          <div className="text-xs mono text-slate-400 mb-2">GAME LOBBY</div>
          <div className="space-y-2">
            {Object.keys(menuItems).map((path) => {
              const isActive = activePage && path.toLowerCase() === activePage.toLowerCase()
              return (
                <a
                  href={`#${path}`}
                  key={path}
                  className={isActive
                    ? 'block px-4 py-3 rounded-xl text-slate-950 bg-gradient-to-r from-orange-400 to-cyan-300 font-semibold shadow-lg shadow-orange-500/20'
                    : 'block px-4 py-3 rounded-xl text-slate-200 bg-white/5 hover:bg-white/10 transition'}
                >
                  {menuItems[path]}
                </a>
              )
            })}
          </div>
        </div>

        {!chatIsOpened && (
          <button
            onClick={handleOpenChat}
            className="w-full px-4 py-3 rounded-xl text-slate-200 bg-cyan-400/15 hover:bg-cyan-400/25 transition text-sm"
          >
            Open Social Chat
          </button>
        )}

        <div className="space-y-2 mt-2">
          {infoCards.map((item) => (
            <div key={item.label} className="rounded-xl bg-white/5 border border-white/10 p-3">
              <div className="text-[11px] text-slate-400">{item.label}</div>
              <div className="text-sm font-semibold mono">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center overflow-x-auto no-scrollbar gap-2">
      {!chatIsOpened && (
        <button
          onClick={handleOpenChat}
          className="px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition text-sm"
        >
          Social Chat
        </button>
      )}

      {Object.keys(menuItems).map((path) => {
        const isActive = activePage && path.toLowerCase() === activePage.toLowerCase()
        return (
          <a href={`#${path}`}
            key={path}
            className={isActive
              ? 'px-4 py-2 text-slate-950 bg-gradient-to-r from-orange-400 to-cyan-300 font-semibold whitespace-nowrap rounded-xl shadow-lg shadow-orange-500/20'
              : 'px-4 py-2 text-slate-300 hover:text-white hover:bg-white/10 transition whitespace-nowrap rounded-xl'}
          >
            {menuItems[path]}
          </a>
        )
      })}
    </div>
  )
}

export default NavBar
