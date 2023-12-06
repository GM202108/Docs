import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ModalImage from "react-modal-image";
import { makeStyles } from "@mui/styles";
import BrowserOnly from "@docusaurus/BrowserOnly";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    textAlign: "center",
    marginBottom: ".5em",
  },
  image: {
    boxShadow: "rgb(135 135 135) 0px 0px 8px 0px",
    borderRadius: "0.7em",
  },
}));

interface ScreenshotProps {
  filename: string;
  maxWidth?: string;
  dropShadow?: boolean;
  alt?: string;
  appFrame?: boolean;
  video?: boolean;
  caption?: string;
}

const Screenshot: React.FC<ScreenshotProps> = ({
  filename,
  maxWidth,
  dropShadow,
  alt,
  appFrame = true,
  video = false,
  caption = "",
}) => {
  const src = useBaseUrl(`img/${filename}`);
  const classes = useStyles();

  const imageContainerStyle = {
    display: "inline-block",
    maxWidth: maxWidth || "100%",
    margin: "0",
    boxShadow: dropShadow
      ? "0 4px 8px 0 var(--gray06), 0 6px 20px 0 var(--gray05)"
      : null,
  };

  return (
    <BrowserOnly>
      {() => (
        <div className={classes.root}>
          <figure style={imageContainerStyle}>
            {video ? (
              <video
                className={appFrame ? classes.image : null}
                autoPlay
                loop
                muted
                src={src}
                width="100%"
              />
            ) : (
              <ModalImage
                className={appFrame ? classes.image : null}
                small={src}
                large={src}
                hideDownload="true"
                hideZoom="true"
                alt={alt}
              />
            )}
            {caption ? <figcaption>{caption}</figcaption> : null}
          </figure>
        </div>
      )}
    </BrowserOnly>
  );
};

export default Screenshot;
