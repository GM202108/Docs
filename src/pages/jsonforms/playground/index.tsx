import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { LaunchTwoTone } from "@mui/icons-material";

function JsonFormsPlayground() {
  const title = "JSON Forms Playground";
  const description =
    "Build custom configuration experiences in the configuration wizard with JSON Forms";

  return (
    <Layout title={title} description={description}>
      <BrowserOnly>
        {() => {
          const queryParams = new URLSearchParams(window.location.search);

          return (
            <div>
              <Grid container justifyContent="center" sx={{ m: 2 }}>
                <Button
                  variant="outlined"
                  href="/docs/jsonforms/"
                  target="_blank"
                  sx={{ mr: 1 }}
                >
                  JSON Forms Docs
                </Button>
                <Button
                  variant="outlined"
                  endIcon={<LaunchTwoTone />}
                  href="https://jsonforms.io"
                  target="_blank"
                  sx={{ mr: 1, ml: 1 }}
                >
                  jsonforms.io
                </Button>
                <Button
                  variant="outlined"
                  href="/docs/custom-components/writing-custom-components/#json-forms-data-sources"
                  target="_blank"
                  sx={{ ml: 1 }}
                >
                  Custom Component Docs
                </Button>
              </Grid>
              <iframe
                title="JSON Forms Playground"
                style={{
                  width: "100%",
                  minHeight: "1600px",
                  border: "1px solid #e0e0e0",
                  borderRadius: 4,
                }}
                id="jsonforms"
                src={`https://app.prismatic.io/jsonforms/?${queryParams.toString()}`}
              >
                <p>You must have iframes enabled to use this feature.</p>
              </iframe>
            </div>
          );
        }}
      </BrowserOnly>
    </Layout>
  );
}

export default JsonFormsPlayground;
