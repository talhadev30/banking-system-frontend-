import { Moon, Sun } from 'lucide-react'
import React from 'react'

const Togglebutton = () => {

    const [dark, setDark] = React.useState(false)
    if (dark) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }


  return (
    <button
      onClick={() => setDark(!dark)}
      className={`relative flex border items-center w-12 h-9 rounded-full p-1 transition-all duration-300 ${
        dark ? "bg-slate-800" : "bg-blue-100"
      }`}
    >
      <div
        className={`absolute w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${
          dark ? "translate-x-5" : "translate-x-0"
        }`}
      >
        {dark ? (
          <Moon size={16} className="text-slate-700" />
        ) : (
          <Sun size={16} className="text-yellow-500" />
        )}
      </div>
    </button>
  )
}

export default Togglebutton