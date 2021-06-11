import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#474F60",
    },
    secondary: {
      main: "#E65757",
    },
  },
  typography: {
    fontFamily: ["Poppins"],
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 30,
      },
    },
  },
});

theme.props = {
  MuiButton: {
    disableElevation: true,
  },
};

export default theme;
