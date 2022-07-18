import { red } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Fonts/Blender Pro/stylesheet.css';
import './Fonts/Tomorrow/stylesheet.css';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: 'Blender Pro, Tomorrow',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#00FF00',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    // Name of the component
    // MuiButtonBase: {
    //   defaultProps: {
    //     // The props to change the default for.
    //     disableRipple: false, // No more ripple, on the whole application 💣!
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: ({ ownerState, theme }) => ({
          ...(ownerState.color === 'outlined' && {
            borderColor: theme.palette.primary,
            }),
        }),
      },
    },
  },
});

export default theme;
