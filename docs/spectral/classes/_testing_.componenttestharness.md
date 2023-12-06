---
id: "_testing_.componenttestharness"
title: "ComponentTestHarness"
sidebar_label: "ComponentTestHarness"
---

[@prismatic-io/spectral](../index.md) › ["testing"](../modules/_testing_.md) › [ComponentTestHarness](_testing_.componenttestharness.md)

## Type parameters

▪ **TComponent**: *[Component](../interfaces/_servertypes_index_.component.md)*

## Hierarchy

* **ComponentTestHarness**

## Index

### Constructors

* [constructor](_testing_.componenttestharness.md#constructor)

### Properties

* [component](_testing_.componenttestharness.md#component)

### Methods

* [action](_testing_.componenttestharness.md#action)
* [buildContext](_testing_.componenttestharness.md#private-buildcontext)
* [buildParams](_testing_.componenttestharness.md#private-buildparams)
* [connectionValue](_testing_.componenttestharness.md#connectionvalue)
* [dataSource](_testing_.componenttestharness.md#datasource)
* [trigger](_testing_.componenttestharness.md#trigger)

## Constructors

###  constructor

\+ **new ComponentTestHarness**(`component`: TComponent): *[ComponentTestHarness](_testing_.componenttestharness.md)*

*Defined in [packages/spectral/src/testing.ts:237](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`component` | TComponent |

**Returns:** *[ComponentTestHarness](_testing_.componenttestharness.md)*

## Properties

###  component

• **component**: *TComponent*

*Defined in [packages/spectral/src/testing.ts:237](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L237)*

## Methods

###  action

▸ **action**(`key`: string, `params?`: Record‹string, unknown›, `context?`: Partial‹[ActionContext](../interfaces/_servertypes_index_.actioncontext.md)›): *Promise‹[ActionPerformReturn](../modules/_types_actionperformreturn_.md#actionperformreturn)›*

*Defined in [packages/spectral/src/testing.ts:290](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L290)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`params?` | Record‹string, unknown› |
`context?` | Partial‹[ActionContext](../interfaces/_servertypes_index_.actioncontext.md)› |

**Returns:** *Promise‹[ActionPerformReturn](../modules/_types_actionperformreturn_.md#actionperformreturn)›*

___

### `Private` buildContext

▸ **buildContext**‹**TContext**›(`baseContext`: TContext, `context?`: Partial‹TContext›): *TContext*

*Defined in [packages/spectral/src/testing.ts:243](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L243)*

**Type parameters:**

▪ **TContext**

**Parameters:**

Name | Type |
------ | ------ |
`baseContext` | TContext |
`context?` | Partial‹TContext› |

**Returns:** *TContext*

___

### `Private` buildParams

▸ **buildParams**(`inputs`: [Input](../interfaces/_servertypes_index_.input.md)[], `params?`: Record‹string, unknown›): *Record‹string, unknown›*

*Defined in [packages/spectral/src/testing.ts:250](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L250)*

**Parameters:**

Name | Type |
------ | ------ |
`inputs` | [Input](../interfaces/_servertypes_index_.input.md)[] |
`params?` | Record‹string, unknown› |

**Returns:** *Record‹string, unknown›*

___

###  connectionValue

▸ **connectionValue**(`__namedParameters`: object): *[ConnectionValue](../interfaces/_servertypes_index_.connectionvalue.md)*

*Defined in [packages/spectral/src/testing.ts:264](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L264)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[ConnectionValue](../interfaces/_servertypes_index_.connectionvalue.md)*

___

###  dataSource

▸ **dataSource**(`key`: string, `params?`: Record‹string, unknown›, `context?`: Partial‹[DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md)›): *Promise‹[DataSourceResult](../modules/_types_datasourceresult_.md#datasourceresult)›*

*Defined in [packages/spectral/src/testing.ts:302](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L302)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`params?` | Record‹string, unknown› |
`context?` | Partial‹[DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md)› |

**Returns:** *Promise‹[DataSourceResult](../modules/_types_datasourceresult_.md#datasourceresult)›*

___

###  trigger

▸ **trigger**(`key`: string, `payload?`: [TriggerPayload](../interfaces/_types_triggerpayload_.triggerpayload.md), `params?`: Record‹string, unknown›, `context?`: Partial‹[ActionContext](../interfaces/_servertypes_index_.actioncontext.md)›): *Promise‹[TriggerResult](../modules/_types_triggerresult_.md#triggerresult)›*

*Defined in [packages/spectral/src/testing.ts:276](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L276)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`payload?` | [TriggerPayload](../interfaces/_types_triggerpayload_.triggerpayload.md) |
`params?` | Record‹string, unknown› |
`context?` | Partial‹[ActionContext](../interfaces/_servertypes_index_.actioncontext.md)› |

**Returns:** *Promise‹[TriggerResult](../modules/_types_triggerresult_.md#triggerresult)›*
