import { createTheme } from '@mui/material/styles';
import light from '../assets/fonts/Nunito-Light.ttf';
import bold from '../assets/fonts/Nunito-Bold.ttf';

import theme from './theme.main';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
    accent: Palette['primary'];
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary'];
    accent?: PaletteOptions['primary'];
  }
}

let muiTheme = createTheme({
  palette: {
    // contrastThreshold: 3,
    tonalOffset: 0.08,
    secondary: {
      main: '#ffa500',
    },
    primary: {
      main: theme.colors.accent,
    },
    warning: {
      main: theme.colors.dark,
    },
  },
  typography: {
    fontFamily: 'Nunito Light',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Nunito Light';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Nunito Light'), url(${light});
        }
        @font-face {
          font-family: 'Nunito Bold';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Nunito Bold'), url(${bold});
        }
        body {
          background-color: ${theme.colors.primaryText};
          color: ${theme.colors.primaryText}
        }
      `,
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'white',
        size: 'large',
        style: {
          // textTransform: 'none',
          fontFamily: 'Nunito Light',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: 'Nunito Light',
          fontWeight: '300',
        },
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        disableShrink: true,
        color: 'error',
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: theme.colors.background,
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        backdrop: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(5px)',
        },
      },
      defaultProps: {
        closeAfterTransition: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 3,
      },

      styleOverrides: {
        root: {
          color: 'unset',
          backgroundColor: theme.colors.cardBackground,
        },
      },
    },
  },
});
muiTheme = createTheme(muiTheme, {
  palette: {
    white: muiTheme.palette.augmentColor({
      color: {
        main: theme.colors.background,
      },
      name: 'white',
    }),
    accent: muiTheme.palette.augmentColor({
      color: {
        main: theme.colors.accent,
      },
      name: 'accent',
    }),
  },
});

export default muiTheme;
