const NavBar = (props) => {
  const pages = {
    '#': 'News',
    '#/flipcoin': 'FlipCoin',
    '#/crashgame': 'CrashGame'
  }
  const active = '#'
  
  const classNormal = 'px-6 py-4 text-slate-400 hover:text-white hover:bg-slate-700 transition whitespace-nowrap'
  const classActive = 'px-6 py-4 text-purple-400 border-b-2 border-purple-400 font-bold bg-slate-800/50 whitespace-nowrap'
  return (
    <div className="bg-slate-800/80 backdrop-blur border-b border-slate-700 flex items-center overflow-x-auto no-scrollbar shrink-0 z-10">
      <a href="#" className="px-6 py-4 text-slate-400 hover:text-white hover:bg-slate-700 transition whitespace-nowrap">News</a>
      <a href="#" className="px-6 py-4 text-purple-400 border-b-2 border-purple-400 font-bold bg-slate-800/50 whitespace-nowrap">FlipCoin</a>
      <a href="#" className="px-6 py-4 text-slate-400 hover:text-white hover:bg-slate-700 transition whitespace-nowrap">CrashGame</a>
      <a href="#" className="px-6 py-4 text-slate-400 hover:text-white hover:bg-slate-700 transition whitespace-nowrap">Bingo</a>
      <a href="#" className="px-6 py-4 text-slate-400 hover:text-white hover:bg-slate-700 transition whitespace-nowrap">Lotto</a>
      <a href="#" className="px-6 py-4 text-slate-400 hover:text-white hover:bg-slate-700 transition whitespace-nowrap">Dice</a>
    </div>
  )
}

export default NavBar