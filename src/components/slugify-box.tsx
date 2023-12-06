import React, { useState } from "react";
import { TextField, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BrowserOnly from "@docusaurus/BrowserOnly";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "1em",
    textAlign: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const slugify = (value) =>
  value
    ?.replace(/[^0-9a-zA-Z]+/gi, " ")
    .trim()
    .split(/\s+/)
    .map((item, index) =>
      index === 0
        ? item.toLowerCase()
        : item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
    )
    .join("") || "";

const SlugifyBox = (props) => {
  const classes = useStyles();
  const [stepName, setStepName] = useState(props.defaultStepName);

  return (
    <BrowserOnly>
      {() => (
        <Paper elevation={1} className={classes.root}>
          <TextField
            label="Step Name"
            value={stepName}
            variant="outlined"
            onChange={(event) => setStepName(event.target.value)}
          />
          <TextField
            label="Reference Name / Step ID"
            value={slugify(stepName)}
            variant="outlined"
            disabled
          />
        </Paper>
      )}
    </BrowserOnly>
  );
};
export default SlugifyBox;
