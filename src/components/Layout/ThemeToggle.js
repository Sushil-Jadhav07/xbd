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
      className={`p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${className}`}
    >
      <FiMoon className="h-5 w-5" />
    </button>
  )

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className={`p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${className}`}
    >
      {isDark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </button>
  )
}

