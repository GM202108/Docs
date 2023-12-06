import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { brand } from "@prismatic-io/theme";
import BrowserOnly from "@docusaurus/BrowserOnly";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
  },
  padding: {
    paddingTop: "calc(100% * 9 / 16)", // make 16 x 9 videos properly proportioned
    position: "relative",
  },
  vimeoIframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  expandVideoLink: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    cursor: "pointer",
    color: brand.bluePurple[500],
    "& span": {
      marginLeft: ".2em",
    },
  },
}));

const Vimeo = ({ video, title, timestamp, collapsed, maxWidth = "600px" }) => {
  const [clicked, setClicked] = useState(false);
  const classes = useStyles();
  const vimeoSource = `https://player.vimeo.com/video/${video}${
    timestamp ? `#t=${timestamp}` : ""
  }`;

  return (
    <BrowserOnly>
      {() => (
        <div className={classes.root} style={{ maxWidth }}>
          {collapsed && (
            <p
              className={classes.expandVideoLink}
              onClick={() => setClicked(!clicked)}
            >
              <VideoLibraryIcon fontSize="small" />
              <span>{title}</span>
            </p>
          )}
          {(clicked || !collapsed) && (
            <div className={classes.padding}>
              <iframe
                src={vimeoSource}
                className={classes.vimeoIframe}
                title={title}
                allowFullScreen
                data-ready={true}
              />
            </div>
          )}
        </div>
      )}
    </BrowserOnly>
  );
};

export default Vimeo;
