import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => ({
  root: {
    overflowX: "hidden",
  },
  arrowRight: {
    cursor: "pointer",
    width: "20px",
    height: "20px",
    border: `solid rgba(112,112,112,.56)`,
    borderWidth: "2px 2px 0px 0px",
    transform: "rotate(45deg)",
    transition: "all 0.4s ease-in-out",
    "&:hover": {
      borderColor: theme.palette.blue,
    },
  },
  arrowLeft: {
    cursor: "pointer",
    width: "20px",
    height: "20px",
    border: `solid rgba(112,112,112,.56)`,
    borderWidth: "2px 2px 0px 0px",
    transform: "rotate(-135deg)",
    transition: "all 0.4s ease-in-out",
    "&:hover": {
      borderColor: theme.palette.blue,
    },
  },
}));
export default style;
