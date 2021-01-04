import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => ({
  root: {
    margin: "auto",
    height: "80%",
    [theme.breakpoints.down("xl")]: {
      width: "30%",
    },
    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },

    minWidth: "300px",
    borderRadius: "47px",
    background: "#fcf5ff",
    boxShadow: "5px -5px 8px #ffffff,-5px 5px 8px #e8e1eb",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
}));
export default style;
