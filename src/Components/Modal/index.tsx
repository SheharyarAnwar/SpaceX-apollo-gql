import { Box, Typography } from "@material-ui/core";
import React from "react";
import { ReactComponent as LinkIcon } from "../../Assets/link.svg";
import { ReactComponent as YoutubeIcon } from "../../Assets/youtube.svg";
import styles from "./styles";
interface ModalProps {
  details?: any;
  rocketName?: any;
  articleLink?: any;
  videoLink?: any;
}
const Index: React.FC<ModalProps> = ({
  details,
  rocketName,
  articleLink,
  videoLink,
}) => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Typography variant="h2">{rocketName}</Typography>
      <Box width="80%" textAlign="center">
        <Typography
          variant="subtitle2"
          style={{ lineHeight: "1.8", letterSpacing: "2px" }}
        >
          {details}
        </Typography>
      </Box>
      <Box width="30%" display="flex" justifyContent="space-between">
        <a href={articleLink} target="__blank">
          <LinkIcon width={30} />
        </a>
        <a href={videoLink} target="__blank">
          <YoutubeIcon width={40} />
        </a>
      </Box>
    </div>
  );
};

export default Index;
