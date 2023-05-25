import { createContext, useEffect, useState } from 'react'
import {encode, decode} from 'string-encode-decode'

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
    // const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    // setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
    // darkMediaQuery.addEventListener('change', (e) => {
    //   setThemeName(e.matches ? 'dark' : 'light')
    // });

    const storedThemeName = localStorage.getItem('themeName');
    if (storedThemeName) {
      // not null
      const stringDecode = decodeString(storedThemeName);
      setThemeName(stringDecode)
    }

  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'

    const themeSet: object = { valueTheme: name };
    const stringEncode = encodeString(JSON.stringify(themeSet));
    localStorage.setItem('themeName', stringEncode)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}


function encodeString(data: string) {
  const encodedDataBtoa = encode(data); // encode a string
  return encodedDataBtoa;
}

function decodeString(data: string) {
  const decodedDataBtoa = JSON.parse(decode(data)); // encode a string
  return decodedDataBtoa.valueTheme;
}

export { ThemeColorProvider, ThemeContext }
