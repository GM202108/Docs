---
id: "_types_actionperformfunction_"
title: "types/ActionPerformFunction"
sidebar_label: "types/ActionPerformFunction"
---

[@prismatic-io/spectral](../index.md) › ["types/ActionPerformFunction"](_types_actionperformfunction_.md)

## Index

### Interfaces

* [ActionContext](../interfaces/_types_actionperformfunction_.actioncontext.md)

### Type aliases

* [ActionPerformFunction](_types_actionperformfunction_.md#actionperformfunction)

## Type aliases

###  ActionPerformFunction

Ƭ **ActionPerformFunction**: *function*

*Defined in [packages/spectral/src/types/ActionPerformFunction.ts:12](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionPerformFunction.ts#L12)*

Definition of the function to perform when an Action is invoked.

#### Type declaration:

▸ (`context`: [ActionContext](../interfaces/_types_actionperformfunction_.actioncontext.md), `params`: [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›): *Promise‹TReturn›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [ActionContext](../interfaces/_types_actionperformfunction_.actioncontext.md) |
`params` | [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs› |
