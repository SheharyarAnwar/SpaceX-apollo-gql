import { Box, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";
const links: string[] = ["Missions", "Launches"];
const Index: React.FC = () => {
  const classes = styles();
  const [text, setText] = useState<number>(0);
  const clicked = () => {
    setText((prev) => Math.abs(prev - 1));
  };
  return (
    <>
      <Box className={classes.root}>
        <Typography variant="h1">Space X</Typography>
        <Box className={classes.navItem}>
          <div className={classes.arrowLeft} onClick={clicked} />
          <Link to={`/${links[text].toLowerCase()}`}>
            <Typography variant="h2">{links[text]}</Typography>
          </Link>
          <div className={classes.arrowRight} onClick={clicked} />
        </Box>
      </Box>
    </>
  );
};

export default Index;
