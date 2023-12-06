import React from "react";
import { makeStyles, withStyles } from "@mui/styles";
import CodeBlock from "@theme/CodeBlock";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import Tooltip from "@mui/material/Tooltip";
import BrowserOnly from "@docusaurus/BrowserOnly";
import "./component-inputs-table.css";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  inputLabel: {
    marginBottom: "0px",
  },
  inputType: {
    color: "var(--periwinkle)",
    display: "inline",
  },
  inputKey: {
    color: "var(--deep-purple)",
    fontSize: ".8em",
  },
  inputRequired: {
    color: "var(--turquoise)",
    display: "inline",
  },
  listInput: {
    color: "var(--deep-purple)",
    fontStyle: "italic",
  },
  inputHidden: {
    color: "var(--cyan)",
    fontStyle: "italic",
  },
  inputNowrap: {
    whiteSpace: "nowrap",
  },
}));

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

const parseExample = (example) => {
  const codeBlockCaptureRegex = /^`{3}([\S]+)?\n([\s\S]+)\n`{3}/;
  if (!example || !example.startsWith("`")) {
    return example;
  }
  if (example.startsWith("```")) {
    const codeBlockCapture = example.match(codeBlockCaptureRegex);

    return (
      <CodeBlock className={`language-${codeBlockCapture[1]}`}>
        {codeBlockCapture[2]}
      </CodeBlock>
    );
  }

  return <CodeBlock>{example.replace(/`/g, "")}</CodeBlock>;
};

const ComponentInputsTable = ({ inputs }) => {
  const classes = useStyles();
  const hasDefaults = inputs.reduce(
    (acc, input) => acc || ![null, undefined, ""].includes(input.default),
    false
  );
  const hasExamples = inputs.reduce(
    (acc, input) => acc || ![null, undefined, ""].includes(input.example),
    false
  );

  if (inputs.length === 0) {
    return null;
  }

  const hiddenFieldTooltipText =
    "The value for this field never changes and will not be shown within the integration builder UI.";
  const valueListTooltipText = "This input represents a list of values.";
  const keyValueListTooltipText =
    "This input represents a list of keys and values.";

  return (
    <BrowserOnly>
      {() => (
        <div className={classes.root}>
          <Table>
            <Thead>
              <Tr>
                <Th>Input</Th>
                {hasDefaults ? <Th>Default</Th> : null}
                <Th>Notes</Th>
                {hasExamples ? <Th>Example</Th> : null}
              </Tr>
            </Thead>
            <Tbody>
              {inputs.map((input) => {
                const inputDefault =
                  input.type.toLowerCase() === "code" && input.default ? (
                    <CodeBlock>{input.default.toString()}</CodeBlock>
                  ) : (
                    input.default
                  );
                const example =
                  input.type.toLowerCase() === "code" && input.example ? (
                    <CodeBlock>{input.example.toString()}</CodeBlock>
                  ) : (
                    parseExample(input.example)
                  );

                return (
                  <Tr key={input.key}>
                    <Td>
                      <div className={classes.inputLabel}>{input.label}</div>
                      <div className={classes.inputNowrap}>
                        <div className={classes.inputType}>
                          {input.type.toLowerCase()}
                        </div>
                        {input.required ? (
                          <div className={classes.inputRequired}>
                            {" "}
                            / Required
                          </div>
                        ) : null}
                        {input.shown === false ? (
                          <StyledTooltip arrow title={hiddenFieldTooltipText}>
                            <div className={classes.inputHidden}>
                              Hidden Field
                            </div>
                          </StyledTooltip>
                        ) : null}
                        {input?.collection ? (
                          <StyledTooltip
                            arrow
                            title={
                              input.collection === "valuelist"
                                ? valueListTooltipText
                                : keyValueListTooltipText
                            }
                          >
                            <div className={classes.listInput}>
                              {input.collection === "valuelist"
                                ? "Value List"
                                : "Key Value List"}
                            </div>
                          </StyledTooltip>
                        ) : null}
                      </div>
                      <div className={classes.inputKey}>{input.key}</div>
                    </Td>
                    {hasDefaults ? <Td>{inputDefault}</Td> : null}
                    <Td>{input.comments}</Td>
                    {hasExamples ? <Td>{example}</Td> : null}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </div>
      )}
    </BrowserOnly>
  );
};

export default ComponentInputsTable;
