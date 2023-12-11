/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { Tooltip } from "@mui/material";
import { withStyles } from "@mui/styles";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useThemeConfig } from "@docusaurus/theme-common";

const LogoTooltip = withStyles((theme) => ({
  arrow: {
    color: "var(--gray09)",
  },
  tooltip: {
    fontSize: "14px",
    fontWeight: 100,
    backgroundColor: "var(--gray09)",
    padding: "6px 8px",
    borderRadius: "3px",
  },
}))(Tooltip);

const Logo = (props): JSX.Element => {
  const {
    navbar: { logo = { src: "" } },
  } = useThemeConfig();

  const { imageClassName, titleClassName, ...propsRest } = props;
  const logoLink = useBaseUrl(logo.href || "/");
  const logoImageUrl = useBaseUrl(logo.src);

  return (
    <div {...propsRest}>
      <LogoTooltip title="Fourier Analytics" arrow>
        <a className="brand-logo-symbol" href="/">
          {logoImageUrl != null && (
            <img
              className="navbar__logo"
              src={logoImageUrl}
              alt={logo.alt}
              style={{ height: "26px" }}
            />
          )}
        </a>
      </LogoTooltip>
      <Link className="brand-logo-docs" to={logoLink}>
        <LogoTooltip title="Docs Home" arrow>
          <span>Docs</span>
        </LogoTooltip>
      </Link>
    </div>
  );
};

export default Logo;
