import React, { useEffect, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import { Autocomplete, TextField } from "@mui/material";

const endpointOptions = [
  "https://app.prismatic.io",
  "https://app.eu-west-1.prismatic.io",
  "https://app.ap-southeast-2.prismatic.io",
  "https://app.us-gov-west-1.prismatic.io",
];

function Explorer() {
  const title = "GraphiQL Explorer";
  const description =
    "GraphiQL explorer tests API queries against the Prismatic API. Sign up and start running GraphQL API queries with your account's data now.";
  const [endpoint, setEndpoint] = useState("https://app.prismatic.io");
  const [fullEndpoint, setFullEndpoint] = useState(
    "https://app.prismatic.io/explorer"
  );
  const [options, setOptions] = useState(endpointOptions);

  useEffect(() => {
    try {
      const newFullEndpoint = new URL(`explorer/`, endpoint);
      setFullEndpoint(newFullEndpoint.toString());
    } catch (e) {
      return null;
    }
  }, [endpoint]);

  return (
    <Layout title={title} description={description}>
      <BrowserOnly>
        {() => {
          const queryParams = new URLSearchParams(window.location.search);

          return (
            <div style={{ padding: "3em 2em 3em 2em" }}>
              <Autocomplete
                options={options}
                noOptionsText="Hit enter to enter a custom domain or private cloud URL"
                onInputChange={(e, newValue) => setEndpoint(newValue)}
                defaultValue={endpointOptions[0]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Prismatic App Endpoint"
                    variant="outlined"
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" &&
                        options.findIndex((o) => o === endpoint) === -1
                      ) {
                        setOptions((o) => o.concat(endpoint));
                      }
                    }}
                  />
                )}
                sx={{ marginBottom: "1em" }}
              />

              <iframe
                title="GraphQL Explorer"
                style={{
                  width: "100%",
                  minHeight: 1250,
                  border: "1px solid #e0e0e0",
                  borderRadius: 4,
                }}
                id="graphiql"
                className="graphql-explorer"
                src={`${fullEndpoint}?${queryParams.toString()}`}
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

export default Explorer;
