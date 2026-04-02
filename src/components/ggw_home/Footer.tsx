const Footer = (props) => {
  return (
    <footer className="h-10 bg-slate-900 border-t border-slate-800 flex items-center justify-center text-xs text-slate-500 shrink-0">
      <span>
        {`© Powered by`}
        {` `}
        <a
          href="https://whitelotto.com/"
          target="_blank"
          className="hover:text-purple-400"
        >
          {`WhiteLotto.com`}
        </a>
        {` - Lottery White Label and Turnkey Platform Provider.`}
      </span>
    </footer>
  )
}

export default Footer