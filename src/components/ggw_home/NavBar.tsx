import { useHashRouterContext } from '@/contexts/HashRouterProvider'

const NavBar = (props) => {
  const {
    chatIsOpened = false,
    handleOpenChat = () => {},
  } = props
  const {
    hash: activePage
  } = useHashRouterContext()

  const menuItems = {
    '/': 'News',
    '/flipcoin': 'FlipCoin',
    '/crashgame': 'CrashGame'
  }

  const classNormal = 'px-6 py-4 text-slate-400 hover:text-white hover:bg-slate-700 transition whitespace-nowrap'
  const classActive = 'px-6 py-4 text-purple-400 border-b-2 border-purple-400 font-bold bg-slate-800/50 whitespace-nowrap'
  const OpenChatButton = () => {
    return (
      <div className="px-4 hidden md:block">
        <button 
          onClick={handleOpenChat}
          className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700/50 hover:border-purple-500/30"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
          {`Social Chat`}
        </button>
      </div>
    )
  }
  
  return (
    <div className="bg-slate-800/80 backdrop-blur border-b border-slate-700 flex items-center overflow-x-auto no-scrollbar shrink-0 z-10">
      {!chatIsOpened && (
        <OpenChatButton />
      )}
      {Object.keys(menuItems).map((path) => {
        return (
          <a href={`#${path}`}
            key={path}
            className={(activePage && path.toLowerCase() == activePage.toLowerCase()) ? classActive : classNormal}
          >
            {menuItems[path]}
          </a>
        )
      })}
    </div>
  )
}

export default NavBar