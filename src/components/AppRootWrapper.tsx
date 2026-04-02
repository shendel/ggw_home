import { useState, useEffect } from 'react'
import AppRoot from './AppRoot'

export default function AppRootWrapper(props) {
  const {
    children,
  } = props
  return (
    <div className="bg-slate-900 text-slate-200 font-sans h-screen flex flex-col overflow-hidden">
      <AppRoot>
        {children}
      </AppRoot>
    </div>
  )
}