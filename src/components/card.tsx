import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, List, Avatar } from "@mui/material";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";
import clsx from "clsx";

import { brand } from "@prismatic-io/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 320,
    width: 347,
    margin: theme.spacing(1.5),
    background: brand.gray[10],
    borderRadius: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    boxShadow: "0px 2px 8px 1px rgba(0, 0, 0, 0.20)",
    "& > div": {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    "& a": {
      borderBottom: "none",
    },
  },
  header: {
    borderBottom: `1px solid ${brand.gray[40]}`,
    minHeight: theme.spacing(6),
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    color: brand.gray[80],
  },
  headerTitle: {
    marginRight: "auto",
    color: brand.deepPurple[500],
  },
  headerContent: {
    fontSize: "1.2em",
  },
  avatar: {
    position: "absolute",
    left: 20,
    bottom: -31,
    "& .MuiAvatar-root": {
      width: theme.spacing(7),
      height: theme.spacing(7),
      fontSize: "1.5em",
    },
  },
  content: {
    padding: theme.spacing(3, 4, 1.5, 4),
    minHeight: "8em",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  hasAvatar: {
    paddingTop: theme.spacing(5),
  },

  footer: {
    backgroundColor: brand.gray[40],
    minHeight: theme.spacing(7),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
    paddingLeft: "16px !important",
    paddingRight: "16px !important",
  },
  footerCallToAction: {
    marginLeft: "auto",
    marginRight: -7,
    display: "flex",
    "& .MuiButtonBase-root": {
      fontSize: "1.2em",
      textTransform: "unset",
    },
  },
  footerCtaHasIcon: {
    marginRight: -15,
  },
  footerContent: {
    fontSize: "1.2em",
    fontWeight: "bold",
    color: brand.gray[80],
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  description: {
    fontSize: "1.1em",
    color: brand.gray[80],
    margin: 0,
  },
  fullWidth: {
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
  },
  fauxLink: {
    display: "inline-flex",
    alignItems: "center",
    color: brand.blueIris[500],
    position: "relative",
    "&::after": {
      transition: "background-color 0.15s",
      content: `""`,
      position: "absolute",
      right: 12,
      left: 1,
      bottom: 1,
      height: 2,
    },
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
    "&:hover .faux-link::after": {
      backgroundColor: "rgb(94, 146, 225, 0.7)",
    },
  },
}));

interface CardProps {
  fullWidth?: boolean;
  primary?: string;
  secondary?: string;
  headerTitle?: string;
  headerArea?: string | JSX.Element;
  avatarName?: string;
  avatarUrl?: string;
  avatarVariant?: "rounded" | "square";
  headerText?: string;
  footerText?: string;
  footerTo?: string;
  footerCallToAction?: JSX.Element;
  footerCtaHasIcon?: boolean;
  className?: string;
  to?: string;
  linkText: string;
  list?: JSX.Element;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  children,
  fullWidth,
  primary,
  secondary,
  headerTitle,
  headerArea,
  avatarName,
  avatarUrl,
  avatarVariant = "square",
  headerText,
  footerText,
  footerTo,
  footerCallToAction,
  footerCtaHasIcon,
  className,
  linkText = "View",
  to,
  list,
  ...rest
}) => {
  const classes = useStyles();
  const hasAvatar = avatarName || avatarUrl;

  return (
    <BrowserOnly>
      {() => (
        <div
          className={clsx(
            classes.root,
            fullWidth && classes.fullWidth,
            "card",
            className
          )}
          {...rest}
        >
          <div className={classes.header}>
            {hasAvatar && (
              <div className={classes.avatar}>
                <Avatar variant={avatarVariant} src={avatarUrl} />
              </div>
            )}
            {headerTitle && (
              <Typography className={classes.headerTitle} variant="h6">
                {headerTitle}
              </Typography>
            )}
            <div>
              <div className={classes.headerContent}>{headerText}</div>
              {headerArea}
            </div>
          </div>
          <div
            data-cy="card-content"
            className={clsx(
              classes.content,
              hasAvatar && classes.hasAvatar,
              "card-content"
            )}
          >
            {(primary || secondary) && (
              <Link to={to} className={classes.link}>
                <Typography variant="h6">{primary}</Typography>
                <p className={classes.description}>
                  {secondary}{" "}
                  <span className={clsx(classes.fauxLink, "faux-link")}>
                    {linkText}{" "}
                    <ArrowForwardIosRounded style={{ fontSize: "1em" }} />
                  </span>
                </p>
              </Link>
            )}
            {list && <List>{list}</List>}
            {children}
          </div>
          {(footerText || footerCallToAction) && (
            <div className={classes.footer}>
              {footerText && (
                <Link to={footerTo}>
                  <div className={classes.footerContent}>{footerText}</div>
                </Link>
              )}
              {footerCallToAction && (
                <div
                  className={clsx(
                    classes.footerCallToAction,
                    footerCtaHasIcon && classes.footerCtaHasIcon
                  )}
                >
                  {footerCallToAction}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </BrowserOnly>
  );
};

export default Card;
