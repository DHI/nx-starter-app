import {
  CssBaseline,
  createTheme,
  ThemeProvider,
  Color,
  darkScrollbar,
} from '@mui/material';
import { useInstance } from 'react-ioc';
import { observer } from 'mobx-react-lite';

import DHI_COLORS from './colors';
import { ThemeDataStore } from './ThemeDataStore';
import DHI_TYPOGRAPHY from './typography';

const darkTheme = createTheme({
  typography: DHI_TYPOGRAPHY,
  palette: {
    mode: 'dark',
    primary: {
      light: DHI_COLORS.PRIMARY_MAIN,
      main: DHI_COLORS.PRIMARY_LIGHT,
      dark: DHI_COLORS.PRIMARY_DARK,
      contrastText: DHI_COLORS.PRIMARY_CONTRAST,
    },
    secondary: {
      light: DHI_COLORS.SECONDARY_LIGHT,
      main: DHI_COLORS.SECONDARY_MAIN,
      dark: DHI_COLORS.SECONDARY_DARK,
      contrastText: DHI_COLORS.SECONDARY_CONTRAST,
    },
    error: {
      light: DHI_COLORS.PINK_X_LIGHT,
      main: DHI_COLORS.PINK_LIGHT,
      dark: DHI_COLORS.PINK_DEFAULT,
      contrastText: DHI_COLORS.BRANDBLUE_DARK,
    },
    warning: {
      light: DHI_COLORS.YELLOW_X_LIGHT,
      main: DHI_COLORS.YELLOW_LIGHT,
      dark: DHI_COLORS.YELLOW_DEFAULT,
      contrastText: DHI_COLORS.BRANDBLUE_DARK,
    },
    info: {
      light: DHI_COLORS.ACTIONBLUE_X_LIGHT,
      main: DHI_COLORS.ACTIONBLUE_LIGHT,
      dark: DHI_COLORS.ACTIONBLUE_DEFAULT,
      contrastText: DHI_COLORS.WHITE,
    },
    success: {
      light: DHI_COLORS.GREEN_X_LIGHT,
      main: DHI_COLORS.GREEN_LIGHT,
      dark: DHI_COLORS.GREEN_DEFAULT,
      contrastText: DHI_COLORS.BRANDBLUE_DARK,
    },

    text: {
      primary: DHI_COLORS.WHITE,
      secondary: DHI_COLORS.GREY200,
      disabled: DHI_COLORS.GREY500,
    },
    background: {
      default: DHI_COLORS.GREY800,
      paper: DHI_COLORS.GREY800,
    },
    divider: DHI_COLORS.GREY700,
    grey: {
      50: DHI_COLORS.GREY50,
      100: DHI_COLORS.GREY100,
      200: DHI_COLORS.GREY200,
      300: DHI_COLORS.GREY300,
      400: DHI_COLORS.GREY400,
      500: DHI_COLORS.GREY500,
      600: DHI_COLORS.GREY600,
      700: DHI_COLORS.GREY700,
      800: DHI_COLORS.GREY800,
      900: DHI_COLORS.GREY900,
      A100: DHI_COLORS.GREYA100,
      A200: DHI_COLORS.GREYA200,
      A400: DHI_COLORS.GREYA400,
      A700: DHI_COLORS.GREYA700,
    } as Color,
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: DHI_COLORS.GREY900,
          color: DHI_COLORS.WHITE,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
    MuiLink: {
      styleOverrides: {
        underlineHover: {
          color: DHI_COLORS.ACTIONBLUE_LIGHT,
        },
      },
    },
  },
});

const lightTheme = createTheme({
  typography: DHI_TYPOGRAPHY,
  palette: {
    mode: 'light',
    primary: {
      light: DHI_COLORS.PRIMARY_LIGHT,
      main: DHI_COLORS.PRIMARY_MAIN,
      dark: DHI_COLORS.PRIMARY_DARK,
      contrastText: DHI_COLORS.PRIMARY_CONTRAST,
    },
    secondary: {
      light: DHI_COLORS.SECONDARY_LIGHT,
      main: DHI_COLORS.SECONDARY_MAIN,
      dark: DHI_COLORS.SECONDARY_DARK,
      contrastText: DHI_COLORS.SECONDARY_CONTRAST,
    },
    error: {
      light: DHI_COLORS.PINK_LIGHT,
      main: DHI_COLORS.PINK_DEFAULT,
      dark: DHI_COLORS.PINK_DARK,
      contrastText: DHI_COLORS.WHITE,
    },
    warning: {
      light: DHI_COLORS.YELLOW_LIGHT,
      main: DHI_COLORS.YELLOW_DEFAULT,
      dark: DHI_COLORS.YELLOW_DARK,
      contrastText: DHI_COLORS.WHITE,
    },
    info: {
      light: DHI_COLORS.ACTIONBLUE_LIGHT,
      main: DHI_COLORS.ACTIONBLUE_DEFAULT,
      dark: DHI_COLORS.ACTIONBLUE_DARK,
      contrastText: DHI_COLORS.WHITE,
    },
    success: {
      light: DHI_COLORS.GREEN_LIGHT,
      main: DHI_COLORS.GREEN_DEFAULT,
      dark: DHI_COLORS.GREEN_DARK,
      contrastText: DHI_COLORS.WHITE,
    },
    text: {
      primary: DHI_COLORS.GREY900,
      secondary: DHI_COLORS.GREY700,
      disabled: DHI_COLORS.GREY200,
      // hint: DHI_COLORS.BRANDBLUE_DARK,
    },
    background: {
      default: DHI_COLORS.WHITE,
      paper: DHI_COLORS.WHITE,
    },
    divider: DHI_COLORS.GREY100,
    grey: {
      50: DHI_COLORS.GREY50,
      100: DHI_COLORS.GREY100,
      200: DHI_COLORS.GREY200,
      300: DHI_COLORS.GREY300,
      400: DHI_COLORS.GREY400,
      500: DHI_COLORS.GREY500,
      600: DHI_COLORS.GREY600,
      700: DHI_COLORS.GREY700,
      800: DHI_COLORS.GREY800,
      900: DHI_COLORS.GREY900,
      A100: DHI_COLORS.GREYA100,
      A200: DHI_COLORS.GREYA200,
      A400: DHI_COLORS.GREYA400,
      A700: DHI_COLORS.GREYA700,
    } as Color,
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: DHI_COLORS.GREY900,
          color: DHI_COLORS.WHITE,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        underlineHover: {
          color: DHI_COLORS.ACTIONBLUE_LIGHT,
        },
      },
    },
  },
});

const Theme = observer(({ children }: { children: React.ReactNode }) => {
  const themeStore = useInstance(ThemeDataStore);

  return (
    <ThemeProvider theme={themeStore.mode === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
});

export default Theme;
