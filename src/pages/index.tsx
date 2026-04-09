import Head from 'next/head'
import { useState } from 'react'

import HashRouterViews from '@/components/HashRouterViews'
import AppRootWrapper from '@/components/AppRootWrapper'
import Home from '@/views/Home'
import FlipCoin from '@/views/FlipCoin'
import CrashGame from '@/views/CrashGame'
import Page404 from '@/pages/404'

import Header from '@/components/ggw_home/Header'
import TokenInfoBar from '@/components/ggw_home/TokenInfoBar'
import SocialChat from '@/components/ggw_home/SocialChat/'
import NavBar from '@/components/ggw_home/NavBar'
import { TITLE, SEO_DESC } from '@/config'

function MyApp() {
  const viewsPaths = {
    '/': Home,
    '/flipcoin': FlipCoin,
    '/crashgame': CrashGame,
  }

  const [chatIsOpened, setChatIsOpened] = useState(true)

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={SEO_DESC} />
      </Head>
      <AppRootWrapper>
        <div className="relative h-screen flex flex-col overflow-hidden text-slate-100">
          <div className="hero-glow" />
          <Header />
          <TokenInfoBar />

          <div className={`flex-1 min-h-0 p-3 md:p-4 ${(chatIsOpened) ? '' : 'chat-hidden'}`}>
            <div className="h-full flex gap-3 md:gap-4">
              <aside className="hidden lg:block w-64 min-w-[16rem] glass-surface neon-outline rounded-2xl p-3 overflow-y-auto">
                <NavBar
                  mode="sidebar"
                  chatIsOpened={chatIsOpened}
                  handleOpenChat={() => { setChatIsOpened(true) }}
                />
              </aside>

              <main className="flex-1 min-w-0 glass-surface neon-outline rounded-2xl overflow-hidden flex flex-col">
                <div className="lg:hidden border-b border-white/10 p-2">
                  <NavBar
                    mode="top"
                    chatIsOpened={chatIsOpened}
                    handleOpenChat={() => { setChatIsOpened(true) }}
                  />
                </div>

                <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                  <HashRouterViews
                    views={{ ...viewsPaths }}
                    props={{}}
                    on404={Page404}
                  />
                </div>
              </main>

              <SocialChat
                chatIsOpened={chatIsOpened}
                handleCloseChat={() => { setChatIsOpened(false) }}
              />
            </div>
          </div>
        </div>
      </AppRootWrapper>
    </>
  )
}

export default MyApp
