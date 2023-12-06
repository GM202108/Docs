import React from "react";
import { makeStyles } from "@mui/styles";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { common, brand } from "@prismatic-io/theme";
import clsx from "clsx";
import { SvgIcon, Chip } from "@mui/material";

type SvgIconComponent = typeof SvgIcon;

const useStyles = makeStyles(() => ({
  root: {
    margin: "1em 0",
    background: common.white,
    borderRadius: 5,
    boxShadow: "0px 3px 6px 1px rgba(0, 0, 0, 0.08)",
    border: `1px solid ${brand.gray[50]}`,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "box-shadow 0.5s, border-color 0.3s",
    "&:hover": {
      textDecoration: "none",
      boxShadow: "1px 3px 11px 1px rgba(74, 147, 174, 0.4)",
      borderColor: brand.turquoise[500],
    },
  },
  darkBackground: {
    "&:hover": {
      boxShadow: "1px 3px 11px 1px rgba(0, 0, 0, 0.4)",
    },
  },
  container: {
    padding: "1em 2em",
    display: "flex",
    flexDirection: "column",
  },
  largeIconContainer: {
    margin: "10px 0",
  },
  flexWidth: {
    width: "calc(33% - 1em)",
  },
  fixedWidth: {
    width: 300,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.6,
    paddingBottom: ".5em",
  },
  title: {
    fontWeight: 500,
    fontSize: 18,
    marginBottom: 0,
    lineHeight: 1.6,
  },
  description: {
    color: "var(--website-text-color)",
    fontSize: 15,
  },
  imageContainer: {
    height: 220,
  },
  categoryChipContainer: {
    marginRight: ".5em",
    float: "right",
  },
}));

interface FeatureCardProps {
  title: string;
  description: string;
  to: string;
  Avatar?: SvgIconComponent;
  avatarColor: string;
  fixedWidth?: boolean;
  largeIcon?: boolean;
  cardImage?: string;
  darkBackground?: boolean;
  categories?: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  to,
  Avatar,
  avatarColor,
  fixedWidth,
  largeIcon,
  cardImage,
  darkBackground,
  categories = [],
}) => {
  const classes = useStyles();
  const url = useBaseUrl(to);
  const cardImageUrl = useBaseUrl(`img/${cardImage}`);

  return (
    <BrowserOnly>
      {() => (
        <Link
          key={title}
          to={url}
          className={clsx(
            "feature-card",
            classes.root,
            fixedWidth ? classes.fixedWidth : classes.flexWidth,
            darkBackground && classes.darkBackground
          )}
        >
          <div
            className={clsx(
              classes.container,
              largeIcon && classes.largeIconContainer
            )}
          >
            <div>
              <Avatar
                style={{
                  color: avatarColor,
                  fontSize: largeIcon ? "3em" : "2em",
                }}
              />

              {categories.map((category) => (
                <div
                  className={classes.categoryChipContainer}
                  key={`${title}${category}`}
                >
                  <Chip
                    label={category}
                    variant="outlined"
                    style={{ color: "var(--blue-iris)" }}
                  />
                </div>
              ))}
            </div>
            <div className={classes.content}>
              <h4 className={classes.title}>{title}</h4>
              <div className={classes.description}>{description}</div>
            </div>
          </div>
          {cardImage && (
            <div className={classes.imageContainer}>
              <img src={cardImageUrl} alt="" />
            </div>
          )}
        </Link>
      )}
    </BrowserOnly>
  );
};

export default FeatureCard;
