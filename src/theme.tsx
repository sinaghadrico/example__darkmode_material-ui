import {createMuiTheme} from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import common from '@material-ui/core/colors/common';
export const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: common.black,
            light: common.black,
          },
          secondary:{
            main: amber[500],
          },
          background:{
            default:common.white
        }
      },
    
});

export const darkTheme = createMuiTheme({
   palette: {
    type: 'dark',
    primary: {
      main: common.white,
      dark:common.white,
    },
    secondary:{
        main: amber[500],
      },
    background:{
        default:common.black
    }
  },

});
