---
id: "_testing_"
title: "testing"
sidebar_label: "testing"
---

[@prismatic-io/spectral](../index.md) › ["testing"](_testing_.md)

## Index

### Classes

* [ComponentTestHarness](../classes/_testing_.componenttestharness.md)

### Interfaces

* [InvokeReturn](../interfaces/_testing_.invokereturn.md)

### Functions

* [createConnection](_testing_.md#const-createconnection)
* [createHarness](_testing_.md#const-createharness)
* [defaultTriggerPayload](_testing_.md#const-defaulttriggerpayload)
* [invoke](_testing_.md#const-invoke)
* [invokeDataSource](_testing_.md#const-invokedatasource)
* [invokeTrigger](_testing_.md#const-invoketrigger)
* [loggerMock](_testing_.md#const-loggermock)

### Object literals

* [baseActionContext](_testing_.md#const-baseactioncontext)
* [baseDataSourceContext](_testing_.md#const-basedatasourcecontext)

## Functions

### `Const` createConnection

▸ **createConnection**‹**T**›(`__namedParameters`: object, `values`: Record‹string, unknown›, `tokenValues?`: Record‹string, unknown›): *[ConnectionValue](../interfaces/_servertypes_index_.connectionvalue.md)*

*Defined in [packages/spectral/src/testing.ts:35](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L35)*

**Type parameters:**

▪ **T**: *[ConnectionDefinition](_types_connectiondefinition_.md#connectiondefinition)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`key` | string |

▪ **values**: *Record‹string, unknown›*

▪`Optional`  **tokenValues**: *Record‹string, unknown›*

**Returns:** *[ConnectionValue](../interfaces/_servertypes_index_.connectionvalue.md)*

___

### `Const` createHarness

▸ **createHarness**‹**TComponent**›(`component`: TComponent): *[ComponentTestHarness](../classes/_testing_.componenttestharness.md)‹TComponent›*

*Defined in [packages/spectral/src/testing.ts:315](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L315)*

**Type parameters:**

▪ **TComponent**: *[Component](../interfaces/_servertypes_index_.component.md)*

**Parameters:**

Name | Type |
------ | ------ |
`component` | TComponent |

**Returns:** *[ComponentTestHarness](../classes/_testing_.componenttestharness.md)‹TComponent›*

___

### `Const` defaultTriggerPayload

▸ **defaultTriggerPayload**(): *[TriggerPayload](../interfaces/_servertypes_index_.triggerpayload.md)*

*Defined in [packages/spectral/src/testing.ts:124](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L124)*

**Returns:** *[TriggerPayload](../interfaces/_servertypes_index_.triggerpayload.md)*

___

### `Const` invoke

▸ **invoke**‹**TInputs**, **TAllowsBranching**, **TReturn**›(`__namedParameters`: object, `params`: [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›, `context?`: Partial‹[ActionContext](../interfaces/_servertypes_index_.actioncontext.md)›): *Promise‹[InvokeReturn](../interfaces/_testing_.invokereturn.md)‹TReturn››*

*Defined in [packages/spectral/src/testing.ts:106](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L106)*

Invokes specified ActionDefinition perform function using supplied params
and optional context. Accepts a generic type matching ActionPerformReturn as a convenience
to avoid extra casting within test methods. Returns an InvokeResult containing both the
action result and a mock logger for asserting logging.

**Type parameters:**

▪ **TInputs**: *[Inputs](_types_inputs_.md#inputs)*

▪ **TAllowsBranching**: *boolean*

▪ **TReturn**: *InvokeActionPerformReturn‹TAllowsBranching, unknown›*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`perform` | function |

▪ **params**: *[ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›*

▪`Optional`  **context**: *Partial‹[ActionContext](../interfaces/_servertypes_index_.actioncontext.md)›*

**Returns:** *Promise‹[InvokeReturn](../interfaces/_testing_.invokereturn.md)‹TReturn››*

___

### `Const` invokeDataSource

▸ **invokeDataSource**‹**TInputs**, **TDataSourceType**›(`__namedParameters`: object, `params`: [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›, `context?`: Partial‹[DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md)›): *Promise‹InvokeDataSourceResult‹TDataSourceType››*

*Defined in [packages/spectral/src/testing.ts:222](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L222)*

Invokes specified DataSourceDefinition perform function using supplied params.
Accepts a generic type matching DataSourceResult as a convenience to avoid extra
casting within test methods. Returns a DataSourceResult.

**Type parameters:**

▪ **TInputs**: *[Inputs](_types_inputs_.md#inputs)*

▪ **TDataSourceType**: *[DataSourceType](_types_datasourceresult_.md#datasourcetype)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`perform` | function |

▪ **params**: *[ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›*

▪`Optional`  **context**: *Partial‹[DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md)›*

**Returns:** *Promise‹InvokeDataSourceResult‹TDataSourceType››*

___

### `Const` invokeTrigger

▸ **invokeTrigger**‹**TInputs**, **TAllowsBranching**, **TResult**›(`__namedParameters`: object, `context?`: Partial‹[ActionContext](../interfaces/_servertypes_index_.actioncontext.md)›, `payload?`: [TriggerPayload](../interfaces/_types_triggerpayload_.triggerpayload.md), `params?`: [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›): *Promise‹[InvokeReturn](../interfaces/_testing_.invokereturn.md)‹TResult››*

*Defined in [packages/spectral/src/testing.ts:174](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L174)*

Invokes specified TriggerDefinition perform function using supplied params
and optional context. Accepts a generic type matching TriggerResult as a convenience
to avoid extra casting within test methods. Returns an InvokeResult containing both the
trigger result and a mock logger for asserting logging.

**Type parameters:**

▪ **TInputs**: *[Inputs](_types_inputs_.md#inputs)*

▪ **TAllowsBranching**: *boolean*

▪ **TResult**: *InvokeTriggerResult‹TAllowsBranching›*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`perform` | function |

▪`Optional`  **context**: *Partial‹[ActionContext](../interfaces/_servertypes_index_.actioncontext.md)›*

▪`Optional`  **payload**: *[TriggerPayload](../interfaces/_types_triggerpayload_.triggerpayload.md)*

▪`Optional`  **params**: *[ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›*

**Returns:** *Promise‹[InvokeReturn](../interfaces/_testing_.invokereturn.md)‹TResult››*

___

### `Const` loggerMock

▸ **loggerMock**(): *[ActionLogger](../interfaces/_servertypes_index_.actionlogger.md)*

*Defined in [packages/spectral/src/testing.ts:50](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L50)*

Pre-built mock of ActionLogger. Suitable for asserting logs are created as expected.
See https://prismatic.io/docs/custom-components/writing-custom-components/#verifying-correct-logging-in-action-tests for information on testing correct logging behavior in your custom component.

**Returns:** *[ActionLogger](../interfaces/_servertypes_index_.actionlogger.md)*

## Object literals

### `Const` baseActionContext

### ▪ **baseActionContext**: *object*

*Defined in [packages/spectral/src/testing.ts:60](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L60)*

###  crossFlowState

• **crossFlowState**: *object*

*Defined in [packages/spectral/src/testing.ts:63](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L63)*

#### Type declaration:

###  executionId

• **executionId**: *string* = "mockExecutionId"

*Defined in [packages/spectral/src/testing.ts:67](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L67)*

###  executionState

• **executionState**: *object*

*Defined in [packages/spectral/src/testing.ts:64](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L64)*

#### Type declaration:

###  instanceState

• **instanceState**: *object*

*Defined in [packages/spectral/src/testing.ts:62](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L62)*

#### Type declaration:

###  integrationState

• **integrationState**: *object*

*Defined in [packages/spectral/src/testing.ts:65](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L65)*

#### Type declaration:

###  invokeUrl

• **invokeUrl**: *string* = `https://example.com`

*Defined in [packages/spectral/src/testing.ts:74](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L74)*

###  logger

• **logger**: *[ActionLogger](../interfaces/_servertypes_index_.actionlogger.md)* = loggerMock()

*Defined in [packages/spectral/src/testing.ts:61](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L61)*

###  stepId

• **stepId**: *string* = "mockStepId"

*Defined in [packages/spectral/src/testing.ts:66](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L66)*

▪ **customer**: *object*

*Defined in [packages/spectral/src/testing.ts:75](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L75)*

* **externalId**: *string* = "1234"

* **id**: *string* = "customerId"

* **name**: *string* = "Customer 1"

▪ **instance**: *object*

*Defined in [packages/spectral/src/testing.ts:80](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L80)*

* **id**: *string* = "instanceId"

* **name**: *string* = "Instance 1"

▪ **user**: *object*

*Defined in [packages/spectral/src/testing.ts:84](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L84)*

* **email**: *string* = "user@example.com"

* **externalId**: *string* = "1234"

* **id**: *string* = "userId"

* **name**: *string* = "User 1"

▪ **webhookApiKeys**: *object*

*Defined in [packages/spectral/src/testing.ts:71](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L71)*

* **Flow 1**: *string[]* = ["example-123", "example-456"]

▪ **webhookUrls**: *object*

*Defined in [packages/spectral/src/testing.ts:68](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L68)*

* **Flow 1**: *string* = `https://example.com`

___

### `Const` baseDataSourceContext

### ▪ **baseDataSourceContext**: *object*

*Defined in [packages/spectral/src/testing.ts:204](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L204)*

###  logger

• **logger**: *[ActionLogger](../interfaces/_servertypes_index_.actionlogger.md)* = loggerMock()

*Defined in [packages/spectral/src/testing.ts:205](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L205)*

▪ **customer**: *object*

*Defined in [packages/spectral/src/testing.ts:206](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L206)*

* **externalId**: *string* = "1234"

* **id**: *string* = "customerId"

* **name**: *string* = "Customer 1"

▪ **instance**: *object*

*Defined in [packages/spectral/src/testing.ts:211](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/testing.ts#L211)*

* **id**: *string* = "instanceId"

* **name**: *string* = "Instance 1"
