---
id: "_types_actioninputparameters_"
title: "types/ActionInputParameters"
sidebar_label: "types/ActionInputParameters"
---

[@prismatic-io/spectral](../index.md) › ["types/ActionInputParameters"](_types_actioninputparameters_.md)

## Index

### Interfaces

* [KeyValuePair](../interfaces/_types_actioninputparameters_.keyvaluepair.md)

### Type aliases

* [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)
* [ExtractValue](_types_actioninputparameters_.md#extractvalue)

## Type aliases

###  ActionInputParameters

Ƭ **ActionInputParameters**: *object*

*Defined in [packages/spectral/src/types/ActionInputParameters.ts:10](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionInputParameters.ts#L10)*

Collection of input parameters.
Inputs can be static values, references to config variables, or
references to previous steps' outputs.

#### Type declaration:

___

###  ExtractValue

Ƭ **ExtractValue**: *TCollection extends "keyvaluelist" ? KeyValuePair‹TType›[] : TCollection extends "valuelist" ? TType[] : TType*

*Defined in [packages/spectral/src/types/ActionInputParameters.ts:23](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionInputParameters.ts#L23)*
