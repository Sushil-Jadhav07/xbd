'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme, mounted } = useTheme()
  const isDark = theme === 'dark'

  // Avoid icon mismatch before hydration
  if (!mounted) return (
    <button
      aria-label="Toggle theme"
      className={`p-2.5 rounded-lg !bg-[#c1a35e] dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gradient-to-br hover:from-[#9d7035] hover:to-[#c1a35e] hover:text-white hover:border-transparent transition-all duration-300 ${className}`}
    >
      <FiMoon className="h-5 w-5" />
    </button>
  )

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className={`p-2.5 rounded-lg !bg-[#c1a35e] dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gradient-to-br hover:from-[#9d7035] hover:to-[#c1a35e] hover:text-white hover:border-transparent transition-all duration-300 ${className}`}
    >
      {isDark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </button>
  )
}

