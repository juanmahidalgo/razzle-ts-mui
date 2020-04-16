import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e5efff',
      main: '#366ca5',
    },
    secondary: blueGrey,
  },
});

export default theme;
