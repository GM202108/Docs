---
id: "_servertypes_index_"
title: "serverTypes/index"
sidebar_label: "serverTypes/index"
---

[@prismatic-io/spectral](../index.md) › ["serverTypes/index"](_servertypes_index_.md)

## Index

### Enumerations

* [OAuth2Type](../enums/_servertypes_index_.oauth2type.md)

### Interfaces

* [Action](../interfaces/_servertypes_index_.action.md)
* [ActionContext](../interfaces/_servertypes_index_.actioncontext.md)
* [ActionLogger](../interfaces/_servertypes_index_.actionlogger.md)
* [Component](../interfaces/_servertypes_index_.component.md)
* [Connection](../interfaces/_servertypes_index_.connection.md)
* [ConnectionValue](../interfaces/_servertypes_index_.connectionvalue.md)
* [DataSource](../interfaces/_servertypes_index_.datasource.md)
* [DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md)
* [DisplayDefinition](../interfaces/_servertypes_index_.displaydefinition.md)
* [HttpResponse](../interfaces/_servertypes_index_.httpresponse.md)
* [Input](../interfaces/_servertypes_index_.input.md)
* [InputFieldChoice](../interfaces/_servertypes_index_.inputfieldchoice.md)
* [ServerPerformBranchingDataReturn](../interfaces/_servertypes_index_.serverperformbranchingdatareturn.md)
* [ServerPerformBranchingDataStructureReturn](../interfaces/_servertypes_index_.serverperformbranchingdatastructurereturn.md)
* [ServerPerformDataReturn](../interfaces/_servertypes_index_.serverperformdatareturn.md)
* [ServerPerformDataStructureReturn](../interfaces/_servertypes_index_.serverperformdatastructurereturn.md)
* [Trigger](../interfaces/_servertypes_index_.trigger.md)
* [TriggerBaseResult](../interfaces/_servertypes_index_.triggerbaseresult.md)
* [TriggerBranchingResult](../interfaces/_servertypes_index_.triggerbranchingresult.md)
* [TriggerPayload](../interfaces/_servertypes_index_.triggerpayload.md)

### Type aliases

* [ActionLoggerFunction](_servertypes_index_.md#actionloggerfunction)
* [ActionPerformFunction](_servertypes_index_.md#actionperformfunction)
* [ActionPerformReturn](_servertypes_index_.md#actionperformreturn)
* [DataSourcePerformFunction](_servertypes_index_.md#datasourceperformfunction)
* [DataSourceResult](_servertypes_index_.md#datasourceresult)
* [TriggerOptionChoice](_servertypes_index_.md#triggeroptionchoice)
* [TriggerPerformFunction](_servertypes_index_.md#triggerperformfunction)
* [TriggerResult](_servertypes_index_.md#triggerresult)

## Type aliases

###  ActionLoggerFunction

Ƭ **ActionLoggerFunction**: *function*

*Defined in [packages/spectral/src/serverTypes/index.ts:42](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/serverTypes/index.ts#L42)*

#### Type declaration:

▸ (...`args`: unknown[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | unknown[] |

___

###  ActionPerformFunction

Ƭ **ActionPerformFunction**: *function*

*Defined in [packages/spectral/src/serverTypes/index.ts:235](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/serverTypes/index.ts#L235)*

#### Type declaration:

▸ (`context`: [ActionContext](../interfaces/_servertypes_index_.actioncontext.md), `params`: Record‹string, unknown›): *Promise‹[ActionPerformReturn](_servertypes_index_.md#actionperformreturn)›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [ActionContext](../interfaces/_servertypes_index_.actioncontext.md) |
`params` | Record‹string, unknown› |

___

###  ActionPerformReturn

Ƭ **ActionPerformReturn**: *[ServerPerformDataStructureReturn](../interfaces/_servertypes_index_.serverperformdatastructurereturn.md) | [ServerPerformBranchingDataStructureReturn](../interfaces/_servertypes_index_.serverperformbranchingdatastructurereturn.md) | [ServerPerformDataReturn](../interfaces/_servertypes_index_.serverperformdatareturn.md) | [ServerPerformBranchingDataReturn](../interfaces/_servertypes_index_.serverperformbranchingdatareturn.md) | undefined*

*Defined in [packages/spectral/src/serverTypes/index.ts:228](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/serverTypes/index.ts#L228)*

___

###  DataSourcePerformFunction

Ƭ **DataSourcePerformFunction**: *function*

*Defined in [packages/spectral/src/serverTypes/index.ts:153](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/serverTypes/index.ts#L153)*

#### Type declaration:

▸ (`context`: [DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md), `params`: Record‹string, unknown›): *Promise‹[DataSourceResult](_servertypes_index_.md#datasourceresult)›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md) |
`params` | Record‹string, unknown› |

___

###  DataSourceResult

Ƭ **DataSourceResult**: *object*

*Defined in [packages/spectral/src/serverTypes/index.ts:148](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/serverTypes/index.ts#L148)*

#### Type declaration:

* **result**: *[DataSourceResultType](_types_datasourceresult_.md#datasourceresulttype)*

* **supplementalData**? : *undefined | object*

___

###  TriggerOptionChoice

Ƭ **TriggerOptionChoice**: *"invalid" | "valid" | "required"*

*Defined in [packages/spectral/src/serverTypes/index.ts:70](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/serverTypes/index.ts#L70)*

___

###  TriggerPerformFunction

Ƭ **TriggerPerformFunction**: *function*

*Defined in [packages/spectral/src/serverTypes/index.ts:120](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/serverTypes/index.ts#L120)*

#### Type declaration:

▸ (`context`: [ActionContext](../interfaces/_servertypes_index_.actioncontext.md), `payload`: [TriggerPayload](../interfaces/_servertypes_index_.triggerpayload.md), `params`: Record‹string, unknown›): *Promise‹[TriggerResult](_servertypes_index_.md#triggerresult)›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [ActionContext](../interfaces/_servertypes_index_.actioncontext.md) |
`payload` | [TriggerPayload](../interfaces/_servertypes_index_.triggerpayload.md) |
`params` | Record‹string, unknown› |

___

###  TriggerResult

Ƭ **TriggerResult**: *[TriggerBranchingResult](../interfaces/_servertypes_index_.triggerbranchingresult.md) | [TriggerBaseResult](../interfaces/_servertypes_index_.triggerbaseresult.md) | undefined*

*Defined in [packages/spectral/src/serverTypes/index.ts:115](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/serverTypes/index.ts#L115)*
