import Tooltip from "@mui/material/Tooltip";
import { withStyles } from "@mui/styles";
import React from "react";

const StyledTooltip = withStyles(() => ({
  arrow: {
    color: "var(--gray09)",
  },
  tooltip: {
    backgroundColor: "var(--gray09)",
    fontSize: 11,
    padding: "6px 8px",
    borderRadius: "3px",
  },
}))(Tooltip);

const OAuthCallbackURL = () => {
  return (
    <span>
      <strong>https://oauth2.prismatic.io/callback</strong> (
      <a href="/docs/connections/#creating-an-oauth-20-app-in-a-third-party-service">
        See other region endpoints
      </a>
      )
    </span>
  );
};

export default OAuthCallbackURL;
