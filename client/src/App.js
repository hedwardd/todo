import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from './components/TaskList';
import { ThemeProvider } from 'styled-components';
import { originalTheme, lightTheme, darkTheme, classyTheme, natureTheme, floralTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';

function App() {

  const { theme } = useSelector(state => state.theme);
  let themeObject;

  switch (theme) {
    case 'original':
      themeObject = originalTheme;
      break;
    case 'light':
      themeObject = lightTheme;
      break;
    case 'dark': 
      themeObject = darkTheme;
      break;
    case 'classy':
      themeObject = classyTheme;
      break;
    case 'nature':
      themeObject = natureTheme;
      break;
    case 'floral':
      themeObject = floralTheme;
      break;
    default:
      themeObject = lightTheme;
  }

  return (
    <ThemeProvider theme={themeObject}>
      <GlobalStyles />
      <TaskList />
    </ThemeProvider>
  );
}

export default App;
