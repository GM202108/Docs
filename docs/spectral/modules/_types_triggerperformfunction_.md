---
id: "_types_triggerperformfunction_"
title: "types/TriggerPerformFunction"
sidebar_label: "types/TriggerPerformFunction"
---

[@prismatic-io/spectral](../index.md) › ["types/TriggerPerformFunction"](_types_triggerperformfunction_.md)

## Index

### Type aliases

* [TriggerPerformFunction](_types_triggerperformfunction_.md#triggerperformfunction)

## Type aliases

###  TriggerPerformFunction

Ƭ **TriggerPerformFunction**: *function*

*Defined in [packages/spectral/src/types/TriggerPerformFunction.ts:10](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerPerformFunction.ts#L10)*

Definition of the function to perform when a Trigger is invoked.

#### Type declaration:

▸ (`context`: [ActionContext](../interfaces/_types_actionperformfunction_.actioncontext.md), `payload`: [TriggerPayload](../interfaces/_types_triggerpayload_.triggerpayload.md), `params`: [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹T›): *Promise‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [ActionContext](../interfaces/_types_actionperformfunction_.actioncontext.md) |
`payload` | [TriggerPayload](../interfaces/_types_triggerpayload_.triggerpayload.md) |
`params` | [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹T› |
