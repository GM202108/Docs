import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import CodeBlock from "@theme/CodeBlock";
import examples from "./examples";
import BrowserOnly from "@docusaurus/BrowserOnly";

const useStyles = makeStyles((theme) => ({
  container: {
    "&> div:nth-of-type(1) > div": {
      marginBottom: "0",
      borderBottomLeftRadius: "0",
      borderBottomRightRadius: "0",
    },
    "&> div:nth-of-type(2) > div": {
      marginBottom: "0",
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
    },
  },
  containerNoQueryVariables: {
    "&> div:nth-of-type(1) > div": {
      marginBottom: "0",
    },
  },
  variablesAndTryContainer: {
    display: "flex",
  },
  graphQlCodeBlock: {
    width: "100%",
  },
  variablesCodeBlock: {
    width: "100%",
  },
  tryItButton: {
    width: "100%",
    textAlign: "right",
  },
}));

const GraphqlExample: React.FC<{ example: string }> = ({ example }) => {
  const classes = useStyles();

  const { query, queryVariables, title } = examples[example];
  const searchParams = new URLSearchParams({
    query,
    query_variables: JSON.stringify(queryVariables || {}, null, 2),
  });

  return (
    <BrowserOnly>
      {() => (
        <div
          className={
            queryVariables
              ? classes.container
              : classes.containerNoQueryVariables
          }
        >
          <div className={classes.graphQlCodeBlock}>
            <CodeBlock title={title} className="language-graphql">
              {query}
            </CodeBlock>
          </div>
          {queryVariables ? (
            <div className={classes.variablesCodeBlock}>
              <CodeBlock title="Query Variables" className="language-json">
                {JSON.stringify(queryVariables, null, 2)}
              </CodeBlock>
            </div>
          ) : null}
          <div className={classes.tryItButton}>
            <Button href={`/docs/explorer/?${searchParams}`} target="_blank">
              Try It Out &#x276F;
            </Button>
          </div>
        </div>
      )}
    </BrowserOnly>
  );
};

export default GraphqlExample;
