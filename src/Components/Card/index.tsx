import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./styles";

interface CardProps {
  topLeft: any;
  topLeftBottom: any;
  topRight: any;
  center: any;

  identifier: any;
}
const Index: React.FC<CardProps> = ({
  topLeft,
  topLeftBottom,
  topRight,
  center,

  identifier,
}) => {
  const classes = styles();
  return (
    <Box className={classes.root}>
      <Box
        padding="12%"
        display="flex"
        justifyContent="space-between"
        width="100%"
        alignItems="center"
      >
        <Typography variant="h2">{topLeft}</Typography>
        <Typography variant="subtitle1">{topRight}</Typography>
      </Box>
      <Box
        padding="5% 10%"
        display="flex"
        justifyContent="center"
        width="100%"
        alignItems="center"
        textAlign="center"
      >
        <Typography variant="subtitle2">{topLeftBottom}</Typography>
      </Box>
      <Box
        padding="12%"
        display="flex"
        justifyContent="center"
        width="100%"
        alignItems="center"
      >
        <Typography variant="h3">{center}</Typography>
      </Box>
    </Box>
  );
};

export default Index;
