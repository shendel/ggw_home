import { useState } from 'react'

import { ConnectWalletButton } from '@/web3/ConnectWalletButton'
import { getShortAddress } from '@/helpers/etherscan'

const mainMenu = [
  { label: 'News', href: '#/' },
  { label: 'FlipCoin', href: '#/flipcoin' },
  { label: 'CrashGame', href: '#/crashgame' },
]

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <>
      <header className="h-14 px-3 md:px-5 shrink-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="h-full w-full flex items-center justify-between gap-3">
          <a href="#/" className="text-xl md:text-2xl font-semibold tracking-tight">
            GGW
            <span className="text-orange-400">.arena</span>
          </a>

          <nav className="hidden md:flex items-center gap-2 text-sm">
            {mainMenu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <ConnectWalletButton
              connectView={(isConnecting, openConnectModal) => {
                return (
                  <button
                    disabled={isConnecting}
                    onClick={openConnectModal}
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-orange-400 to-cyan-300 hover:from-orange-300 hover:to-cyan-200 transition shadow-lg shadow-orange-500/20"
                  >
                    Connect Wallet
                  </button>
                )
              }}
              connectedView={(walletAddress, _ensName, openModal) => {
                return (
                  <>
                    <button
                      onClick={openModal}
                      className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg glass-surface neon-outline text-sm"
                    >
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="mono">{getShortAddress(walletAddress)}</span>
                    </button>
                    <button
                      onClick={openModal}
                      className="sm:hidden px-3 py-1.5 rounded-lg glass-surface text-xs mono"
                    >
                      {getShortAddress(walletAddress)}
                    </button>
                  </>
                )
              }}
              wrongChainView={(openChainModal) => {
                return (
                  <button
                    onClick={openChainModal}
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-red-500/90 hover:bg-red-400 text-white transition"
                  >
                    Wrong Chain
                  </button>
                )
              }}
            />

            <button
              onClick={() => { setMenuOpened(!menuOpened) }}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              <span className="hamburger-line w-5 h-0.5 bg-white block"></span>
              <span className="hamburger-line w-5 h-0.5 bg-white block"></span>
              <span className="hamburger-line w-5 h-0.5 bg-white block"></span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`overlay ${(menuOpened) ? 'visible' : 'hidden'} fixed inset-0 bg-black/60 backdrop-blur-sm z-40`}
        onClick={() => { setMenuOpened(false) }}
      ></div>

      <div className={`mobile-menu ${(menuOpened) ? 'open' : 'closed'} fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] glass-surface z-50 overflow-y-auto`}>
        <div className="sticky top-0 bg-slate-950/90 border-b border-white/10 p-4 flex items-center justify-between">
          <div className="text-lg font-semibold">GGW<span className="text-orange-400">.arena</span></div>
          <button
            onClick={() => { setMenuOpened(false) }}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="p-4 space-y-2">
          {mainMenu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => { setMenuOpened(false) }}
              className="block px-3 py-3 rounded-xl text-slate-200 hover:bg-white/10 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header
