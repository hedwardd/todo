import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import TaskList from './components/TaskList';
import themes from './styles/themes';
import { GlobalStyles } from './styles/global';

const fontFamilies = Object.values(themes).map(e => e.fontFamily).filter(e => !!e);

function App() {

  const { theme } = useSelector(state => state.theme);

  useEffect(() => {
    WebFont.load({
      google: {
        families: fontFamilies,
      }
    })
  })

  let themeObject;
  switch (theme) {
    case 'light':
      themeObject = themes.light;
      break;
    case 'dark': 
      themeObject = themes.dark;
      break;
    case 'classy':
      themeObject = themes.classy;
      break;
    case 'nature':
      themeObject = themes.nature;
      break;
    case 'floral':
      themeObject = themes.floral;
      break;
    default:
      themeObject = themes.classy;
  }

  return (
    <ThemeProvider theme={themeObject}>
      <GlobalStyles />
      <TaskList />
    </ThemeProvider>
  );
}

export default App;
