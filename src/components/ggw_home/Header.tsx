import { ConnectWalletButton } from '@/web3/ConnectWalletButton'
import { DisconnectWalletButton } from '@/web3/DisconnectWalletButton'
import { useInjectedWeb3 } from '@/web3/InjectedWeb3Provider'
import { getShortAddress } from '@/helpers/etherscan'
import { useState, useEffect } from 'react'

const Header = (props) => {
  const {
    injectedAccount,
    isConnected,
    injectedChainId,
    balance
  } = useInjectedWeb3()

  const [ menuOpened, setMenuOpened ] = useState(false)
  
  const ArrowSvg = () => {
    return (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
    )
  }
  const Logo = () => {
    return (
      <div className="text-2xl font-bold text-purple-400 tracking-wider">GG<span className="text-white">WORLD</span></div>
    )
  }
  return (
    <>
      <header className="h-16 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-4 shrink-0 z-40">
        {/*<!-- Логотип и Меню -->*/}
        <div className="flex items-center gap-6">
          <Logo />
          
          {/*<!-- Десктопное меню -->*/}
          <nav className="hidden md:flex items-center gap-4">
            <div className="relative group">
              <a href="#" className="flex items-center gap-1 hover:text-purple-400 transition" onClick={() => {}}>
                {`Menu`}
                <ArrowSvg />
              </a>
              <div className="absolute left-0 top-full w-full h-2 bg-transparent"></div>
              <div className="absolute left-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded shadow-xl hidden group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-slate-700 text-sm">Profile</a>
                <a href="#" className="block px-4 py-2 hover:bg-slate-700 text-sm">Settings</a>
              </div>
            </div>
            <div className="relative group">
                <a href="#" className="flex items-center gap-1 hover:text-purple-400 transition" onClick={() => {}}>
                  {`Games`}
                  <ArrowSvg />
                </a>
                <div className="absolute left-0 top-full w-full h-2 bg-transparent"></div>
                <div className="absolute left-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded shadow-xl hidden group-hover:block">
                  <a href="#" className="block px-4 py-2 hover:bg-slate-700 text-sm">History</a>
                  <a href="#" className="block px-4 py-2 hover:bg-slate-700 text-sm">Leaderboard</a>
                </div>
            </div>
          </nav>
        </div>

        {/*<!-- Правая часть: Кошелек + Гамбургер -->*/}
        <div className="flex items-center gap-3">
          <ConnectWalletButton
            connectView={(isConnecting, openConnectModal) => {
              return (
                <button
                  disabled={isConnecting}
                  onClick={openConnectModal}
                  className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded font-bold transition shadow-lg shadow-purple-900/50"
                >
                  <span className="hidden md:block">
                    {`Connect Wallet`}
                  </span>
                  <span className="md:hidden">
                    {`Connect`}
                  </span>
                </button>
              )
            }}
            connectedView={(walletAddress, nms, openModal) => {
              return (
                <>
                  <button 
                    onClick={openModal}
                    className="hidden sm:flex items-center gap-2 bg-slate-800 border border-slate-600 hover:border-purple-400 text-purple-400 px-4 py-2 rounded font-mono text-sm transition"
                  >
                    {/*<span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>*/}
                    {getShortAddress(walletAddress)}
                    <span className="bg-slate-700 text-white px-2 py-0.5 rounded text-xs ml-2">1,250 GGC</span>
                  </button>


                  <button
                    onClick={openModal}
                    className="sm:hidden sm:flex items-center gap-2 text-purple-400 rounded font-mono text-sm transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="bg-slate-700 text-white px-2 py-0.5 rounded text-xs ml-2">1,250 GGC</span>
                      <div className="relative w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                        </svg>
                        {/*<span className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full border-2 border-slate-900"></span>*/}
                      </div>
                    </div>
                  </button>
                </>
              )
            }}
            wrongChainView={(openChainModal) => {
              return (
                <button
                  onClick={openChainModal}
                  className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded font-bold transition shadow-lg shadow-purple-900/50"
                >
                  <span className="hidden md:block">
                    {`Wrong Chain`}
                  </span>
                </button>
              )
            }}
          />
            
          {/*<!-- Гамбургер (для мобильных) -->*/}
          <button
            onClick={() => { setMenuOpened(!menuOpened) }}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <span className="hamburger-line w-5 h-0.5 bg-white block"></span>
            <span className="hamburger-line w-5 h-0.5 bg-white block"></span>
            <span className="hamburger-line w-5 h-0.5 bg-white block"></span>
          </button>
        </div>
      </header>
      {/*<!-- OVERLAY (затемнение фона) -->*/}
      <div
        className={`overlay ${(menuOpened) ? '' : 'hidden'} fixed inset-0 bg-black/60 backdrop-blur-sm z-40`}
        onClick={() => { setMenuOpened(false) }}
      ></div>
      {/*<!-- MOBILE MENU (выезжает слева) -->*/}
      <div className={`mobile-menu ${(menuOpened) ? 'open' : 'closed'} fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-slate-900 border-r border-slate-700 z-50 overflow-y-auto`}>
          
        {/*<!-- Header меню с кнопкой закрытия -->*/}
        <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
          <Logo />
          <button
            onClick={() => { setMenuOpened(false) }}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-800 transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/*<!-- Контент мобильного меню -->*/}
        <div className="p-4">
          {/*<!-- Баланс -->*/}
          {isConnected && injectedAccount && (
            <div className="mb-6 bg-gradient-to-r from-purple-900/50 to-slate-800 border border-purple-500/30 rounded-xl p-4">
              <div className="text-slate-400 text-xs mb-1">Your Balance</div>
              <div className="text-2xl font-bold text-white font-mono">1,250 <span className="text-purple-400">GGC</span></div>
              <div className="text-xs text-slate-400 mt-1">≈ $150.00 USD</div>
            </div>
          )}

          {/*<!-- Games -->*/}
          <div className="mb-6">
            <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">Games</h3>
            <div className="space-y-1">
              <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors group">
                <span className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-125 transition-transform"></span>
                <span className="text-white font-medium">Keno</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors group">
                <span className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-125 transition-transform"></span>
                <span className="text-white font-medium">Crash Game</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors group">
                <span className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-125 transition-transform"></span>
                <span className="text-white font-medium">Coin Flip</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors group">
                <span className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-125 transition-transform"></span>
                <span className="text-white font-medium">Pick 2 Mini</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors group">
                <span className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-125 transition-transform"></span>
                <span className="text-white font-medium">Pick 2</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors group">
                <span className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-125 transition-transform"></span>
                <span className="text-white font-medium">Pick 6</span>
              </a>
            </div>
          </div>

          {/*<!-- Разделитель -->*/}
          <div className="border-t border-slate-800 my-4"></div>

          {/*<!-- Дополнительные ссылки -->*/}
          <div className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span>Profile</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>Settings</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Support</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header