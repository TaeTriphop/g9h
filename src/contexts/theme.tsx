import { createContext, useEffect, useState } from 'react'

interface Theme {
  themeName: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<Theme | null>(null)

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeColorProvider = ({ children }: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState<string>('light')

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'dark' : 'light')
    });
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeColorProvider, ThemeContext }
