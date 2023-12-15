// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require("path");

const {
  DOCUSAURUS_URLS_ROOT: rootUrl = "https://prismatic.io",
  DOCUSAURUS_URLS_APP: appUrl = "https://app.prismatic.io/",
} = process.env;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Docs",
  tagline: "Documentation",
  url: rootUrl,
  baseUrl: "/docs/",
  favicon: "img/logo-fourier.jpg",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: true,
  themeConfig: {
    navbar: {
      title: "Docs",
        logo: {
        alt: "Logo",
        src: "img/logo-fourier.svg",/*Logo Menu */
      },
      items: [
        {
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
          items: [
            {
              label: "Custom Component SDK (Spectral)",
              href: "https://github.com/prismatic-io/spectral",
            },
            {
              label: "CLI Tool (Prism)",
              href: "https://github.com/prismatic-io/prism",
            },
            {
              label: "Embedded Library",
              href: "https://github.com/prismatic-io/embedded",
            },
            {
              label: "Examples",
              href: "https://github.com/prismatic-io/examples",
            },
          ],
        },
        {
          label: "Sign Up",
          position: "right",
          className: "header-signup",
          href: `${rootUrl}/sign-up/?plan=free`,
        },
        {
          label: "Log In",
          position: "right",
          className: "header-login",
          href: appUrl,
        },
        {
          label: "Getting Started",
          to: "getting-started/docs-overview",
          position: "left",
        },
        {
          label: "Articles",
          to: "organization",
          position: "left",
        },

        {
          label: "Components",
          to: "components/component-catalog",
          position: "left",
        },
        {
          label: "CLI & SDKs",
          position: "left",
          items: [
            {
              label: "Prism CLI Tool",
              to: "cli/cli-usage",
            },
            {
              label: "Custom Component Library",
              to: "spectral/custom-component-library",
            },
          ],
        },
        {
          label: "API",
          position: "left",
          items: [
            {
              label: "API Docs",
              to: "api/api-overview",
            },
            {
              label: "API Explorer",
              to: "explorer",
            },
          ],
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        /*{
          title: "Platform",
          items: [
            {
              label: "Intuitive Integration Designer",
              to: "#",
              target: "_parent",
            },
            {
              label: "Embedded Integration Marketplace",
              to: "#",
              target: "_parent",
            },
            {
              label: "Integration Deployment & Support",
              to: "#",
              target: "_parent",
            },
            {
              label: "Purpose-Built Infrastructure",
              to: "#",
              target: "_parent",
            },
            {
              label: "Built In A Way Devs Love",
              to: "#",
              target: "_parent",
            },
            {
              label: "Connectors",
              to: "#",
              target: "_parent",
            },
          ],
        },*/
        {
          title: "Developers",
          items: [
            {
              label: "Docs Home",
              to: "/",
            },
            {
              label: "Getting Started Guide",
              to: "getting-started/docs-overview",
            },
            {
              label: "Component Docs",
              to: "components/component-catalog",
            },
            {
              label: "Building Custom Components",
              to: "custom-components/writing-custom-components",
            },
            {
              label: "API Reference",
              to: "api/api-overview",
            },
            {
              label: "CLI",
              to: "cli/cli-usage",
            },
          ],
        },
        /*{
          title: "Company",
          items: [
            {
              label: "About Us",
              to: "#",
              target: "_parent",
            },
            {
              label: "Pricing",
              to: "#",
              target: "_parent",
            },
            {
              label: "Guides",
              to: "#",
              target: "_parent",
            },
            {
              label: "Blog",
              to: "#",
              target: "_parent",
            },
            {
              label: "Legal",
              to: "#",
              target: "_parent",
            },
            {
              label: "Careers",
              to: "#",
              target: "_parent",
            },
          ],
        },*/
        {
          title: "Contact",
          items: [
            {
              label: "Contact Us",
              to: "#",
              target: "_parent",
            },
            {
              label: "Vertical Coworking Carrera 48 # 37 - 27 Medellín,Colombia",
              href: "https://www.waze.com/en/live-map/directions?to=ll.6.23834337%2C-75.57165742",
              target: "_self",
              className: "footer__link-item footer-address",
            },
            {
              label: "(604) 501-1714",
              href: "tel:604-501-1714",
            },
            {
              label: "Hello@fouriering.com",
              href: "mailto:Hello@fouriering.com",
            },
            {
              label: "Support",
              href: "mailto:Hello@fouriering.com",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} LLC. All rights reserved.`,
    },
    algolia: {
      appId: "BEWKIBOAL9",
      apiKey: "c9f49c4de3de9c665077ee289db8d014",
      indexName: "prismatic",
      algoliaOptions: {
        hitsPerPage: 10,
      },
    },
    prism: {
      theme: require("./src/prism-theme"),
      additionalLanguages: [
        "csharp",
        "hcl",
        // Liquid syntax highlighting has a bug. There is a swizzle work-around
        // if we're keen to get syntax highlighting for Liquid back
        // https://github.com/facebook/docusaurus/issues/8065
        // "liquid",
        "php",
      ],
    },
    image: "img/meta-image.png", // og:image and twitter:image for social posting
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // announcementBar: {
    //   id: "hiring",
    //   content:
    //     "Do you love automation and building scalable, resilient cloud infrastructure? <a href='https://prismatic.breezy.hr/p/397e85386dbd-senior-site-reliability-engineer-u-s' class='apply-link' style='color:var(--cyan);text-decoration:none'>We're hiring an SRE! ›</a>",
    //   backgroundColor: "var(--periwinkle)",
    //   textColor: "white",
    //   isCloseable: false,
    // },
  },
  stylesheets: [
    "/docs/fonts/material-icons.min.css",
    "/docs/fonts/roboto.min.css",
  ],
  clientModules: [require.resolve("./src/fix-anchor-scroll.js")],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars/index.js"),
          routeBasePath: "/",
          exclude: [
            "**/_*/**", // Allow for .md files prepended with underscores, like for our API
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, "src/plugins/segment"),
    path.resolve(__dirname, "src/plugins/components"),
  ],
};

module.exports = config;
