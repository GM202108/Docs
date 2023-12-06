import React, { useState, useEffect } from "react";
import {
  AccountTreeRounded,
  AssignmentTurnedInRounded,
  BuildRounded,
  CategoryRounded,
  CodeRounded,
  DirectionsRunRounded,
  FactCheckRounded,
  KeyboardRounded,
  ListAltRounded,
  PictureAsPdfRounded,
  RepeatRounded,
  SettingsInputComponentRounded,
  PeopleRounded,
  VpnKeyRounded,
  WebRounded,
} from "@mui/icons-material";
import clsx from "clsx";

import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import FeatureCard from "../components/feature-card";
import "./styles.css";

const HomePage = () => {
  const [showItems, setShowItems] = useState(false);
  const title = "Documentation and Embedded iPaaS Tools";
  const description =
    "Get started building integrations with Docs. Walk through our quick start guides, use our CLI, query our API, and browse our component catalog.";

  useEffect(() => {
    const timeoutId = setTimeout(() => setShowItems(true), 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Layout title={title} description={description}>
      <BrowserOnly>
        {() => (
          <div className="home-page">
            <div className="hero">
              <div className="hero__container">
                <div className="content">
                  <h1 className="hero__title">Docs</h1>
                  <p className="hero__subtitle">
                    Gives you the tools you need to get the job done,
                    and the flexibility to tackle any problem your industry
                    throws at you.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-background">
              <div className="top-section page-content get-started">
                <div className="container call_to_action_container margin-bottom--lg">
                  <div
                    style={{ opacity: showItems ? 1 : 0 }}
                    className={clsx(
                      "feature-group",
                      showItems && "show-feature-group"
                    )}
                  >
                    <FeatureCard
                      Avatar={DirectionsRunRounded}
                      avatarColor="var(--cyan)"
                      description="Walk through building a simple integration using low-code designer."
                      to="getting-started/docs-overview/"
                      title="Get Building"
                      fixedWidth
                      largeIcon
                      darkBackground
                    />
                    <FeatureCard
                      Avatar={CategoryRounded}
                      avatarColor="var(--blue-iris)"
                      description="Check out the built-in components that provides, including connectors to common SaaS apps."
                      to="components/component-catalog/"
                      title="Explore Components"
                      fixedWidth
                      largeIcon
                      darkBackground
                    />
                    <FeatureCard
                      Avatar={CodeRounded}
                      avatarColor="var(--blue-purple)"
                      description="Build a component using our Typescript SDK that handles complex logic or connects to apps your customers use."
                      to="custom-components/writing-custom-components/"
                      title="Write Your Own"
                      fixedWidth
                      largeIcon
                      darkBackground
                    />
                    <FeatureCard
                      Avatar={KeyboardRounded}
                      avatarColor="var(--periwinkle)"
                      description="Use GraphQL-based API or CLI tool to sync customers, monitor and deploy instances, and more using your favorite language."
                      to="api/api-overview/"
                      title="Extend the Platform"
                      fixedWidth
                      largeIcon
                    />
                    <FeatureCard
                      Avatar={FactCheckRounded}
                      avatarColor="var(--blue-purple)"
                      description="Review integration logs and send alerts if problems arise. Or, stream logs and alert events to a third-party service you already use."
                      to="monitoring-and-alerting/"
                      title="Monitor Your Integrations"
                      fixedWidth
                      largeIcon
                    />
                    <FeatureCard
                      Avatar={WebRounded}
                      avatarColor="var(--mint-green)"
                      description="Add an integration marketplace to your app with just a few lines of JavaScript, so your customers can enable integrations for themselves."
                      to="embedding-marketplace/"
                      title="Embed Marketplace"
                      fixedWidth
                      largeIcon
                    />
                  </div>
                </div>
              </div>
              <div className="section-content">
                <h2>Explore these quickstarts</h2>
                <div className="card-group group-spacer">
                  <FeatureCard
                    Avatar={BuildRounded}
                    avatarColor="var(--blue-iris)"
                    description="Write a simple Slack component from scratch to illustrate how readily you can write custom code for an integration."
                    to="quickstarts/first-custom-component/"
                    title="Writing Your First Custom Component"
                    categories={["Custom Components"]}
                  />
                  <FeatureCard
                    Avatar={VpnKeyRounded}
                    avatarColor="var(--blue-iris)"
                    description="Learn how to leverage config variables to drive the logic in your integration"
                    to="quickstarts/configuration-driven-integration/"
                    title="Configuration-Driven Integration"
                    categories={["Integrations", "Config Vars"]}
                  />
                  <FeatureCard
                    Avatar={BuildRounded}
                    avatarColor="var(--blue-iris)"
                    description="Examine how the S3 component handles binary data inputs and outputs, manages credentials, and uses DRY (don't repeat yourself) coding principles."
                    to="quickstarts/building-the-s3-component/"
                    title="Building Advanced Components"
                    categories={["Custom Components"]}
                  />
                  <FeatureCard
                    Avatar={PictureAsPdfRounded}
                    avatarColor="var(--blue-iris)"
                    description="Learn how to generate a PDF within a code component."
                    to="quickstarts/generating-a-pdf-with-a-code-component/"
                    title="Generating PDFs with a Code Component"
                    categories={["Code Component", "Binary Data"]}
                  />
                  <FeatureCard
                    Avatar={CodeRounded}
                    avatarColor="var(--blue-iris)"
                    description="See how to transform data using a code component."
                    to="quickstarts/code-component-to-transform-data/"
                    title="Transforming Data with a Code Component"
                    categories={["Code Component"]}
                  />
                  <FeatureCard
                    Avatar={ListAltRounded}
                    avatarColor="var(--blue-iris)"
                    description="Pull down a list of files and execute a series of steps on each one."
                    to="quickstarts/looping-over-files/"
                    title="Looping Over Files"
                    categories={["Integrations", "Looping"]}
                  />
                  <FeatureCard
                    Avatar={AssignmentTurnedInRounded}
                    avatarColor="var(--blue-iris)"
                    description="Use the Jest JavaScript testing framework to ensure that your custom components works properly."
                    to="quickstarts/unit-testing-custom-components/"
                    title="Testing Custom Components With Jest"
                    categories={["Custom Components", "Unit Testing"]}
                  />
                  <FeatureCard
                    Avatar={SettingsInputComponentRounded}
                    avatarColor="var(--blue-iris)"
                    description="Create an integration with multiple flows, including a flow that executes at deploy time."
                    to="quickstarts/building-an-integration-with-multiple-flows/"
                    title="Building an Integration with Multiple Flows"
                    categories={["Integrations", "Flows"]}
                  />
                  <FeatureCard
                    Avatar={PeopleRounded}
                    avatarColor="var(--blue-iris)"
                    description="Learn to sync customers from an external system to using our GraphQL API."
                    to="quickstarts/syncing-customers-to-prismatic/"
                    title="Syncing Customers to Prismatic"
                    categories={["Prismatic API"]}
                  />
                  <FeatureCard
                    Avatar={AccountTreeRounded}
                    avatarColor="var(--blue-iris)"
                    description="Learn how to use a shared webhook URL for multiple customers, and route webhook invocations to specific customers and flows."
                    to="quickstarts/using-shared-webhooks-and-preprocess-flows/"
                    title="Shared Webhooks and Preprocess Flows"
                    categories={["Integrations", "Webhooks"]}
                  />
                  <FeatureCard
                    Avatar={BuildRounded}
                    avatarColor="var(--blue-iris)"
                    description="Learn how to write a trigger for a custom component by examining how our Salesforce trigger handles webhook requests."
                    to="quickstarts/writing-a-trigger/"
                    title="Writing a Trigger"
                    categories={["Custom Components", "Triggers"]}
                  />
                  <FeatureCard
                    Avatar={BuildRounded}
                    avatarColor="var(--blue-iris)"
                    description="Learn how to write a custom component that wraps an HTTP-base third-party API"
                    to="quickstarts/wrapping-an-api-in-a-component/"
                    title="Wrapping an API in a Component"
                    categories={["Custom Components"]}
                  />
                  <FeatureCard
                    Avatar={RepeatRounded}
                    avatarColor="var(--blue-iris)"
                    description='Learn to loop over an API that returns one "page" of results at a time.'
                    to="quickstarts/looping-over-a-paginated-api/"
                    title="Looping Over a Paginated API"
                    categories={["Integrations", "Loops"]}
                  />
                  <FeatureCard
                    Avatar={BuildRounded}
                    avatarColor="var(--blue-iris)"
                    description="Learn how to build a custom webhook trigger with HMAC validation."
                    to="quickstarts/custom-trigger-with-hmac/"
                    title="Custom Webhook Triggers and HMAC"
                    categories={["Webhooks", "Custom Components"]}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </BrowserOnly>
    </Layout>
  );
};

export default HomePage;
