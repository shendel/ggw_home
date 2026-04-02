import type { AppProps } from "next/app"
import Head from 'next/head'
import getConfig from 'next/config'
import { useEffect, useState } from "react"

import HashRouterViews from '@/components/HashRouterViews'

import AppRootWrapper from '@/components/AppRootWrapper'
import Home from '@/views/Home'
import Page404 from '@/pages/404'

import Header from '@/components/ggw_home/Header'
import TokenInfoBar from '@/components/ggw_home/TokenInfoBar'

import {
  TITLE,
  SEO_DESC,
} from '@/config'
function MyApp(pageProps) {
  const viewsPaths = {
    '/': Home,
  }

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={SEO_DESC} />
      </Head>
      <AppRootWrapper>
        <Header />
        <TokenInfoBar />
        <HashRouterViews
          views={{
            ...viewsPaths,
          }}
          props={{
          }}
          on404={Page404}
        />
      </AppRootWrapper>
    </>
  )
}

export default MyApp;
