const componentCatalogSidebar = require("./sidebars-component-catalog");
const spectralSidebar = require("./sidebars-spectral");
const prismaticApiSidebar = require("./sidebars-prismatic-api-schema");

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  gettingStarted: [
    {
      type: "category",
      label: "What is?",
      collapsed: false,
      items: ["getting-started/docs-overview", "getting-started/core-concepts"],
    },
    {
      type: "category",
      label: "Your First Integration",
      collapsed: false,
      items: [
        "getting-started/first-integration/build-first-integration",
        "getting-started/first-integration/deploy-first-integration",
        "getting-started/first-integration/prepare-for-marketplace",
      ],
    },
    {
      type: "category",
      label: "Advanced Integration",
      collapsed: false,
      items: ["getting-started/advanced-integration/advanced-integration"],
    },
    {
      type: "category",
      label: "Your First Custom Component",
      collapsed: false,
      items: [
        "getting-started/first-custom-component/set-up-environment",
        "getting-started/first-custom-component/hello-prismatic",
        "getting-started/first-custom-component/wrap-an-api",
      ],
    },
  ],
  articles: [
    {
      type: "category",
      label: "Articles",
      collapsed: false,
      items: [
        "organization",
        "customers",
        "users",
        {
          type: "category",
          label: "Components",
          collapsed: false,
          items: [
            "components",
            "custom-components/code-vs-custom-components",
            "code-component-usage",
            "custom-components/writing-custom-components",
          ],
        },
        {
          type: "category",
          label: "Integrations",
          collapsed: false,
          items: [
            "integrations",
            {
              type: "category",
              label: "Building Integrations",
              collapsed: false,
              items: [
                "building-integrations",
                "configuration-wizard",
                "jsonforms",
                "connections",
              ],
            },
            {
              type: "category",
              label: "Integration Triggers",
              collapsed: false,
              items: ["integration-triggers", "endpoint-configuration"],
            },
            "testing-integrations",
            "troubleshooting",
            "integration-runner-environment-limits",
          ],
        },
        "instances",
        "integration-marketplace",
        {
          type: "category",
          label: "Embedded",
          collapsed: false,
          items: [
            "installing-embedded",
            "embedding-marketplace",
            "embedded-designer",
            "embedded-api-requests",
          ],
        },

        "logging",
        "monitoring-and-alerting",
        "integrations-multiple-regions",
        "user-level-configuration",
      ],
    },
    {
      type: "category",
      label: "Best Practices",
      collapsed: false,
      items: [
        "best-practices/common-integration-patterns",
        "best-practices/drive-integrations-with-config-variables",
        "best-practices/create-webhooks-in-your-core-product",
        "best-practices/wrap-core-product-api-in-component",
        "best-practices/tap-into-power-flows",
        "best-practices/retry-replay-save-time",
        "best-practices/use-alert-monitors",
        "best-practices/consolidate-your-logs",
        "best-practices/secure-webhook-endpoints-hmac",
        "best-practices/version-your-components-integrations",
        "best-practices/enable-easy-self-activation",
      ],
    },
    {
      type: "category",
      label: "Quickstarts",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Code Component",
          items: [
            "quickstarts/code-component-to-transform-data",
            "quickstarts/generating-a-pdf-with-a-code-component",
          ],
        },
        {
          type: "category",
          label: "Custom Components",
          items: [
            "quickstarts/field-mapping-json-forms-datasource",
            "quickstarts/first-custom-component",
            "quickstarts/building-the-s3-component",
            "quickstarts/unit-testing-custom-components",
            "quickstarts/writing-a-trigger",
            "quickstarts/wrapping-an-api-in-a-component",
          ],
        },
        {
          type: "category",
          label: "Integrations",
          items: [
            "quickstarts/configuration-driven-integration",
            "quickstarts/looping-over-files",
            "quickstarts/looping-over-a-paginated-api",
            "quickstarts/building-an-integration-with-multiple-flows",
            "quickstarts/fifo-queue",
          ],
        },
        {
          type: "category",
          label: "Webhooks",
          items: [
            "quickstarts/using-shared-webhooks-and-preprocess-flows",
            "quickstarts/custom-trigger-with-hmac",
          ],
        },
        {
          type: "category",
          label: "API Development",
          items: [
            "quickstarts/syncing-customers-to-prismatic",
            "quickstarts/replaying-failed-executions",
          ],
        },
      ],
    },
    "changelog",
  ],
  componentDevelopment: [
    {
      type: "category",
      label: "Custom Component Library",
      collapsed: false,
      items: [
        "spectral/custom-component-library",
        {
          type: "category",
          label: "Upgrade Guides",
          collapsed: false,
          items: [
            "spectral/spectral-2-upgrade-guide",
            "spectral/spectral-3-upgrade-guide",
            "spectral/spectral-4-upgrade-guide",
            "spectral/spectral-5-upgrade-guide",
            "spectral/spectral-6-upgrade-guide",
            "spectral/spectral-7-upgrade-guide",
          ],
        },
        {
          type: "category",
          label: "Previous Spectral Docs",
          collapsed: false,
          items: [
            "spectral/writing-custom-components-spectral-1",
            "spectral/writing-custom-components-spectral-2",
            "spectral/writing-custom-components-spectral-3",
            "spectral/writing-custom-components-spectral-4",
            "spectral/writing-custom-components-spectral-5",
            "spectral/writing-custom-components-spectral-6",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Spectral",
      collapsed: false,
      items: [
        "spectral/index",
        {
          type: "category",
          label: "Modules",
          items: [...new Set(spectralSidebar.docs.Modules)].map(
            (i) => `spectral/${i}`
          ),
        },
        {
          type: "category",
          label: "Interfaces",
          items: [...new Set(spectralSidebar.docs.Interfaces)].map(
            (i) => `spectral/${i}`
          ),
        },
        {
          type: "category",
          label: "Classes",
          items: [...new Set(spectralSidebar.docs.Classes)].map(
            (i) => `spectral/${i}`
          ),
        },
        {
          type: "category",
          label: "Enums",
          items: [...new Set(spectralSidebar.docs.Enums)].map(
            (i) => `spectral/${i}`
          ),
        },
      ],
    },
  ],
  prismaticAPI: [
    "api/api-overview",
    "api/using-prismatic-api",
    { type: "link", label: "API Explorer", href: "/docs/explorer/" },
    {
      type: "category",
      label: "API",
      collapsed: false,
      items: [prismaticApiSidebar],
    },
  ],
  components: [
    "components/component-catalog",
    {
      type: "link",
      label: "Build Your Own Components",
      href: "/docs/custom-components/writing-custom-components/",
    },
  ].concat(
    componentCatalogSidebar?.length
      ? [
          {
            type: "category",
            label: "Components",
            collapsed: false,
            items: componentCatalogSidebar,
          },
        ]
      : []
  ),
  cliAndSdk: {
    "CLI": ["cli/cli-usage", "cli/prism"],
  },
};

module.exports = sidebars;
