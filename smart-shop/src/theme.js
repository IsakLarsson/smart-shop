import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#474F60",
    },
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: ["Poppins"],
  },
});

theme.props = {
  MuiButton: {
    disableElevation: true,
  },
};

export default theme;
