import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import TaskList from './components/TaskList/TaskList';
import HomeScreen from './components/HomeScreen/HomeScreen';
import themes from './styles/themes';
import { TaskListGlobalStyles } from './styles/TaskList/TaskList';

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
    <Router>
        <Switch>
          <Route path="/tasks/:listAlias">
            <ThemeProvider theme={themeObject}>
              <TaskListGlobalStyles />
              <TaskList />
            </ThemeProvider>
          </Route>
          
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
