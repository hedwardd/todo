import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from './components/TaskList';
import { ThemeProvider } from 'styled-components';
import { originalTheme, lightTheme, darkTheme, classyTheme } from './styles/theme';
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
    case 'nature':
      themeObject = darkTheme;
      break;
    case 'floral':
      themeObject = darkTheme;
      break;
    case 'classy':
      themeObject = classyTheme;
      break;
    default:
      themeObject = originalTheme;
  }

  return (
    <ThemeProvider theme={themeObject}>
      <GlobalStyles />
      <TaskList />
    </ThemeProvider>
  );
}

export default App;
