import { red } from '@mui/material/colors';
import { createTheme} from '@mui/material/styles';
import './Fonts/Blender Pro/stylesheet.css';
import './Fonts/Tomorrow/stylesheet.css';

const mainColor = 'rgba(50,255,50,1.0)'
const mainColorDarker = 'rgba(0,255,0,1.0)'
const mainColorDisabled = 'rgba(0,100,0,0.6)'
const textWhite = '#FFFFFFFF'
// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: 'Blender Pro',
    color: textWhite,
    subtitle1: {
      fontSize: 20,
      align: 'left',
    },
    h1: {
      letterSpacing: '3px',
      align: "center",
      fontSize: 90,
      fontFamily: 'Tomorrow',
      color: mainColor,
    },
    h2: {
      letterSpacing: '3px',
      align: "justified",
      fontWeight: 400,
      fontSize: 45,
      fontFamily: 'Tomorrow',
      textTransform: "uppercase"
    },
    h3: {
      letterSpacing: '1.1px',
      align: "justified",
      fontWeight: 400,
      fontSize: 24,
      fontFamily: 'Blender Pro',
    },
    h4: {
      letterSpacing: '1.1px',
      align: "justified",
      fontWeight: 400,
      fontSize: 30,
      fontFamily: 'Tomorrow',
    },
    h5: {
      letterSpacing: '1.3px',
      align: "center",
      fontWeight: 400,
      fontSize: 20,
      fontFamily: 'Blender Pro',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: mainColor,
      darker: mainColorDarker,
    },
    secondary: {
      main: mainColorDisabled,
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
    // Typography: {
    //   styleOverrides: {
    //     root: ({ ownerState, theme}) => ({
    //       textShadow: '1px 1px 4px #00000066',
    //       ...(ownerState.variant === 'h1' &&
    //         ownerState.variant === 'h2' ? {
    //         fontFamily: 'Tomorrow',
    //         } :{
    //           fontFamily: 'Blender Pro',
    //         }),
    //     })
    //   }
    // },
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
      styleOverrides: {
        // Name of the slot
        root: ({ ownerState, theme }) => ({
            borderColor: theme.palette.primary,
            fontSize: '1.25rem',
            padding: '0.8rem 2.7rem',
            borderWidth: '4px',
            borderRadius: 0,
            '&:hover': {
              backgroundColor: mainColor,
              borderWidth: '4px',
              color: '#000000',
              borderRadius: 0,
           }
        }),
      },
    },
  },
});

export default theme;
