import { deepOrange } from '@material-ui/core/colors';

const { createMuiTheme } = require('@material-ui/core');

const globalTheme = createMuiTheme({
    // overrides: {
    //     MuiCssBaseline: {
    //         '@global': {
    //             html: {
    //                 WebkitFontSmoothing: 'auto',
    //             },
    //         },
    //     },
    // },
    palette: {
        primary: {
            main: deepOrange,
        },
    },
});

export default globalTheme;
