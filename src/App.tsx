import { StyleSheetManager } from 'styled-components';
import GlobalStyles from './layout';

import muiTheme from './theme/theme.mui';
import { CssBaseline, ThemeProvider } from '@mui/material';

import NavBar from './sections/navbar';
import Intro from './sections/intro';
import About from './sections/about';
import Course from './sections/course';

function App() {
  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <StyleSheetManager enableVendorPrefixes>
          <GlobalStyles />
          <NavBar />
          <div className="wrapper">
            <Intro />
            <About />
            <Course />
          </div>
        </StyleSheetManager>
      </ThemeProvider>
    </>
  );
}

export default App;
