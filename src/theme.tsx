import { createMuiTheme } from "@material-ui/core";

const gray: string = "#e1eefc";
const blue: string = "#003a78";
const black: string = "#212529";
const navyBlue: string = "#245991";
const slate: string = "#4b4b4b";
const lightBlue: string = "#fcf5ff";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    gray?: string;
    blue?: string;
    black?: string;
    navyBlue?: string;
    slate?: string;
    lightBlue?: string;
  }
  interface PaletteOptions {
    gray?: string;
    blue?: string;
    black?: string;
    navyBlue?: string;
    slate?: string;
    lightBlue?: string;
  }
}

let theme = createMuiTheme({
  palette: {
    gray,
    blue,
    black,
    navyBlue,
    slate,
    lightBlue,
  },
});
theme.typography.h1 = {
  fontFamily: "Julius Sans One, sans-serif",
  fontSize: "calc(1.9rem + 1.5vw)",
  letterSpacing: "5px",
};
theme.typography.h2 = {
  fontFamily: "Raleway,sans-serif",
  fontSize: "calc((1.9rem + 1.5vw)/2.8)",
  letterSpacing: "5px",
  transition: "all 0.3s linear",
  "&:hover": {
    color: blue,
  },
};
theme.typography.h3 = {
  fontFamily: "Julius Sans One, sans-serif",
  fontSize: "calc(1rem + 1.5vw)",
  letterSpacing: "5px",
};
theme.typography.subtitle1 = {
  fontFamily: "Raleway,sans-serif",
  fontSize: "calc((2.2rem + 1vw)/3)",
  fontWeight: "lighter",
  letterSpacing: "2px",
};
theme.typography.subtitle2 = {
  fontFamily: "Julius Sans One,sans-serif",
  fontSize: "calc((0.8rem))",
  letterSpacing: "4px",
};
export default theme;
