---
id: "_types_actioninputparameters_.keyvaluepair"
title: "KeyValuePair"
sidebar_label: "KeyValuePair"
---

[@prismatic-io/spectral](../index.md) › ["types/ActionInputParameters"](../modules/_types_actioninputparameters_.md) › [KeyValuePair](_types_actioninputparameters_.keyvaluepair.md)

KeyValuePair input parameter type.
This allows users to input multiple keys / values as an input.
To see an example of how this can be used, see the `tagging` input
of the `putObject` action of the AWS S3 component:
https://github.com/prismatic-io/examples/blob/main/components/aws-s3/src/actions.ts

## Type parameters

▪ **V**

## Hierarchy

* **KeyValuePair**

## Index

### Properties

* [key](_types_actioninputparameters_.keyvaluepair.md#key)
* [value](_types_actioninputparameters_.keyvaluepair.md#value)

## Properties

###  key

• **key**: *string*

*Defined in [packages/spectral/src/types/ActionInputParameters.ts:41](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionInputParameters.ts#L41)*

Key of the KeyValuePair

___

###  value

• **value**: *V*

*Defined in [packages/spectral/src/types/ActionInputParameters.ts:43](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionInputParameters.ts#L43)*

Value of the KeyValuePair
