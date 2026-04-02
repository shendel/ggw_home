
import { useEffect, useState, Component } from "react"

import { useInjectedWeb3 } from '@/web3/InjectedWeb3Provider'

import ConnectWalletButton from '@/components/ConnectWalletButton'

import LoadingPlaceholder from '@/components/LoadingPlaceholder'

export default function CrashGame(props) {
  const {
    gotoPage,
    params,
    on404
  } = props

  const {
    isConnected,
    injectedAccount
  } = useInjectedWeb3()


  return (
    <>
      CrashGame
    </>
  )
}
