const Footer = () => {
  return (
    <footer className="h-12 border-t border-white/10 bg-slate-950/70 backdrop-blur-xl flex items-center justify-center text-xs text-slate-400 shrink-0 px-4 text-center">
      <span>
        Powered by{' '}
        <a
          href="https://whitelotto.com/"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-300 hover:text-cyan-200 transition"
        >
          WhiteLotto
        </a>
        {' '}for provably-fair Web3 gaming.
      </span>
    </footer>
  )
}

export default Footer
