---
id: "_types_actionperformfunction_.actioncontext"
title: "ActionContext"
sidebar_label: "ActionContext"
---

[@prismatic-io/spectral](../index.md) › ["types/ActionPerformFunction"](../modules/_types_actionperformfunction_.md) › [ActionContext](_types_actionperformfunction_.actioncontext.md)

Context provided to perform method containing helpers and contextual data

## Hierarchy

* **ActionContext**

## Index

### Properties

* [crossFlowState](_types_actionperformfunction_.actioncontext.md#crossflowstate)
* [customer](_types_actionperformfunction_.actioncontext.md#customer)
* [executionId](_types_actionperformfunction_.actioncontext.md#executionid)
* [executionState](_types_actionperformfunction_.actioncontext.md#executionstate)
* [instance](_types_actionperformfunction_.actioncontext.md#instance)
* [instanceState](_types_actionperformfunction_.actioncontext.md#instancestate)
* [integrationState](_types_actionperformfunction_.actioncontext.md#integrationstate)
* [invokeUrl](_types_actionperformfunction_.actioncontext.md#invokeurl)
* [logger](_types_actionperformfunction_.actioncontext.md#logger)
* [stepId](_types_actionperformfunction_.actioncontext.md#stepid)
* [user](_types_actionperformfunction_.actioncontext.md#user)
* [webhookApiKeys](_types_actionperformfunction_.actioncontext.md#webhookapikeys)
* [webhookUrls](_types_actionperformfunction_.actioncontext.md#webhookurls)

## Properties

###  crossFlowState

• **crossFlowState**: *Record‹string, unknown›*

*Defined in [packages/spectral/src/types/ActionPerformFunction.ts:28](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionPerformFunction.ts#L28)*

A key/value store that is shared between flows on an Instance that may be used to store small amounts of data that is persisted between Instance executions

___

###  customer

• **customer**: *[Customer](_types_customer_.customer.md)*

*Defined in [packages/spectral/src/types/ActionPerformFunction.ts:44](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionPerformFunction.ts#L44)*

Contains attributes of the Customer for whom an Instance is being executed.

___

###  executionId

• **executionId**: *string*

*Defined in [packages/spectral/src/types/ActionPerformFunction.ts:36](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionPerformFunction.ts#L36)*

A unique id that corresponds to the specific execution of the Integration

___

###  executionState

• **executionState**: *Record‹string, unknown›*

*Defined in [packages/spectral/src/types/ActionPerformFunction.ts:30](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionPerformFunction.ts#L30)*

A key/value store that may be used to store small amounts of data for use later during the execution

___

###  instance

• **instance**: *[Instance](_types_instance_.instance.md)*

*Defined in [packages/spectral/src/types/ActionPerformFunction.ts:46](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionPerformFunction.ts#L46)*

Contains attributes of the Instance that is being executed.

___

###  instanceState

• **instanceState**: *Record‹string, unknown›*

*Defined in [packages/spectral/src/types/ActionPerformFunction.ts:26](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionPerformFunction.ts#L26)*

A a flow-specific key/value store that may be used to store small amounts of data that is persisted between Instance executions

___

###  integrationState

• **integrationState**: *Record‹string, unknown›*

*Defined in [packages/spectral/src/types/ActionPerformFunction.ts:32](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionPerformFunction.ts#L32)*

A key/value store that is shared between all flows of an Instance for any version of an Integration that may be used to store small amounts of data that is persisted between Instance executions

___

###  invokeUrl

• **invokeUrl**: *string*

*Defined in [packages/spectral/src/types/ActionPerformFunction.ts:42](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionPerformFunction.ts#L42)*

The URL used to invoke the current execution

___

###  logger

• **logger**: *[ActionLogger](_types_actionlogger_.actionlogger.md)*

*Defined in [packages/spectral/src/types/ActionPerformFunction.ts:24](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionPerformFunction.ts#L24)*

Logger for permanent logging; console calls are also captured

___

###  stepId

• **stepId**: *string*

*Defined in [packages/spectral/src/types/ActionPerformFunction.ts:34](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionPerformFunction.ts#L34)*

A unique id that corresponds to the step on the Integration

___

###  user

• **user**: *[User](_types_user_.user.md)*

*Defined in [packages/spectral/src/types/ActionPerformFunction.ts:48](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionPerformFunction.ts#L48)*

Contains attributes of the User for whom a User Level Configuration is being used.

___

###  webhookApiKeys

• **webhookApiKeys**: *Record‹string, string[]›*

*Defined in [packages/spectral/src/types/ActionPerformFunction.ts:40](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionPerformFunction.ts#L40)*

An object containing webhook API keys for all flows of the currently running instance

___

###  webhookUrls

• **webhookUrls**: *Record‹string, string›*

*Defined in [packages/spectral/src/types/ActionPerformFunction.ts:38](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/ActionPerformFunction.ts#L38)*

An object containing webhook URLs for all flows of the currently running instance
