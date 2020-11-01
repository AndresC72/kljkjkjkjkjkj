import { createMuiTheme }  from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true 
    },
    palette : {
        primary: {
            main: '#ffffff'
        },
        common: {
            white : 'white'
        },
        secondary: {
            main : '#fe4914'
        }
    },
    spacing: 10
});

export default theme;
