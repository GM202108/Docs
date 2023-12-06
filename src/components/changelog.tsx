import React from "react";
import dateFormat from "dateformat";
import { makeStyles } from "@mui/styles";
import { Card, CardContent } from "@mui/material";
import { brand } from "@prismatic-io/theme";
import BrowserOnly from "@docusaurus/BrowserOnly";

const useStyles = makeStyles({
  root: {
    marginBottom: "16px",
  },
  titleBar: {
    backgroundColor: brand.gray[40],
    color: brand.gray[90],
    display: "flex",
    padding: "16px",
  },
  cardContent: {
    paddingBottom: "0 !important",
  },
});

export const ChangeLogEntry = ({ children, date }) => {
  const classes = useStyles();
  const formattedDate = dateFormat(
    new Date(date),
    "mmmm dd, yyyy",
    true // Account for timezones
  ).toUpperCase();

  return (
    <BrowserOnly>
      {() => (
        <div>
          <Card className={classes.root}>
            <div className={classes.titleBar}>
              <span>{formattedDate}</span>
            </div>
            <CardContent className={classes.cardContent}>
              {children}
            </CardContent>
          </Card>
        </div>
      )}
    </BrowserOnly>
  );
};
