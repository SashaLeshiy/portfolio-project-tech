import { useState, useMemo, FC } from "react";
import { Theme, ThemeContext } from "../lib/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY} from "../lib/ThemeContext"; 

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;


const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defautProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defautProps}>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeProvider