import type { AppProps } from "next/app"
import Head from 'next/head'
import getConfig from 'next/config'
import { useEffect, useState } from "react"

import HashRouterViews from '@/components/HashRouterViews'

import AppRootWrapper from '@/components/AppRootWrapper'
import Home from '@/views/Home'
import FlipCoin from '@/views/FlipCoin'
import CrashGame from '@/views/CrashGame'

import Page404 from '@/pages/404'

import Header from '@/components/ggw_home/Header'
import Footer from '@/components/ggw_home/Footer'
import TokenInfoBar from '@/components/ggw_home/TokenInfoBar'
import SocialChat from '@/components/ggw_home/SocialChat/'
import NavBar from '@/components/ggw_home/NavBar'
import {
  TITLE,
  SEO_DESC,
} from '@/config'
function MyApp(pageProps) {
  const viewsPaths = {
    '/': Home,
    '/flipcoin': FlipCoin,
    '/crashgame': CrashGame,
  }

  const [ chatIsOpened, setChatIsOpened ] = useState(false)
  
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={SEO_DESC} />
      </Head>
      <AppRootWrapper>
        <div className="bg-slate-900 text-slate-200 font-sans h-screen flex flex-col overflow-hidden">
          <Header />
          <TokenInfoBar />
          <div className={`flex flex-1 overflow-hidden relative ${(chatIsOpened) ? '' : 'chat-hidden'}`}>
            <SocialChat
              chatIsOpened={chatIsOpened}
              handleCloseChat={() => { setChatIsOpened(false) }}
            />
            <main className="flex-1 flex flex-col relative bg-slate-900">
              <NavBar
                chatIsOpened={chatIsOpened}
                handleOpenChat={() => { setChatIsOpened(true) }}
              />
              <div className="flex-1 overflow-y-auto p-4 md:p-8 relative">
                <HashRouterViews
                  views={{
                    ...viewsPaths,
                  }}
                  props={{
                  }}
                  on404={Page404}
                />
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </AppRootWrapper>
    </>
  )
}

export default MyApp;
