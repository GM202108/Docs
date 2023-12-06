---
id: "_types_datasourceperformfunction_"
title: "types/DataSourcePerformFunction"
sidebar_label: "types/DataSourcePerformFunction"
---

[@prismatic-io/spectral](../index.md) › ["types/DataSourcePerformFunction"](_types_datasourceperformfunction_.md)

## Index

### Interfaces

* [DataSourceContext](../interfaces/_types_datasourceperformfunction_.datasourcecontext.md)

### Type aliases

* [DataSourcePerformFunction](_types_datasourceperformfunction_.md#datasourceperformfunction)

## Type aliases

###  DataSourcePerformFunction

Ƭ **DataSourcePerformFunction**: *function*

*Defined in [packages/spectral/src/types/DataSourcePerformFunction.ts:19](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/DataSourcePerformFunction.ts#L19)*

Definition of the function to perform when a Data Source is invoked.

#### Type declaration:

▸ (`context`: [DataSourceContext](../interfaces/_types_datasourceperformfunction_.datasourcecontext.md), `params`: [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›): *Promise‹[DataSourceResult](_types_datasourceresult_.md#datasourceresult)‹TDataSourceType››*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [DataSourceContext](../interfaces/_types_datasourceperformfunction_.datasourcecontext.md) |
`params` | [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs› |
