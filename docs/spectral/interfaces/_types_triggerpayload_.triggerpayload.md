---
id: "_types_triggerpayload_.triggerpayload"
title: "TriggerPayload"
sidebar_label: "TriggerPayload"
---

[@prismatic-io/spectral](../index.md) › ["types/TriggerPayload"](../modules/_types_triggerpayload_.md) › [TriggerPayload](_types_triggerpayload_.triggerpayload.md)

Represents a Trigger Payload, which is data passed into a Trigger to invoke an Integration execution.

## Hierarchy

* **TriggerPayload**

## Index

### Properties

* [body](_types_triggerpayload_.triggerpayload.md#body)
* [customer](_types_triggerpayload_.triggerpayload.md#customer)
* [executionId](_types_triggerpayload_.triggerpayload.md#executionid)
* [headers](_types_triggerpayload_.triggerpayload.md#headers)
* [instance](_types_triggerpayload_.triggerpayload.md#instance)
* [invokeUrl](_types_triggerpayload_.triggerpayload.md#invokeurl)
* [pathFragment](_types_triggerpayload_.triggerpayload.md#pathfragment)
* [queryParameters](_types_triggerpayload_.triggerpayload.md#queryparameters)
* [rawBody](_types_triggerpayload_.triggerpayload.md#rawbody)
* [user](_types_triggerpayload_.triggerpayload.md#user)
* [webhookApiKeys](_types_triggerpayload_.triggerpayload.md#webhookapikeys)
* [webhookUrls](_types_triggerpayload_.triggerpayload.md#webhookurls)

## Properties

###  body

• **body**: *object*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:15](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerPayload.ts#L15)*

#### Type declaration:

* **contentType**? : *undefined | string*

* **data**: *unknown*

___

###  customer

• **customer**: *[Customer](_types_customer_.customer.md)*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:33](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerPayload.ts#L33)*

Contains attributes of the Customer for whom an Instance is being executed.

___

###  executionId

• **executionId**: *string*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:31](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerPayload.ts#L31)*

___

###  headers

• **headers**: *object*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:5](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerPayload.ts#L5)*

#### Type declaration:

* \[ **key**: *string*\]: string

___

###  instance

• **instance**: *[Instance](_types_instance_.instance.md)*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:35](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerPayload.ts#L35)*

Contains attributes of the Instance that is being executed.

___

###  invokeUrl

• **invokeUrl**: *string*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:30](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerPayload.ts#L30)*

The URL that was used to invoke the execution.

___

###  pathFragment

• **pathFragment**: *string*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:20](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerPayload.ts#L20)*

Extended path information from the webhook trigger

___

###  queryParameters

• **queryParameters**: *object*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:8](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerPayload.ts#L8)*

#### Type declaration:

* \[ **key**: *string*\]: string

___

###  rawBody

• **rawBody**: *object*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:11](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerPayload.ts#L11)*

#### Type declaration:

* **contentType**? : *undefined | string*

* **data**: *unknown*

___

###  user

• **user**: *[User](_types_user_.user.md)*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:37](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerPayload.ts#L37)*

Contains attributes of the User for whom a User Level Configuration is being used.

___

###  webhookApiKeys

• **webhookApiKeys**: *object*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:26](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerPayload.ts#L26)*

The optional API keys assigned to the flows of this integration. These may be unique per integration instance and per flow.

#### Type declaration:

* \[ **key**: *string*\]: string[]

___

###  webhookUrls

• **webhookUrls**: *object*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:22](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerPayload.ts#L22)*

The webhook URLs assigned to this integration's flows upon instance deploy

#### Type declaration:

* \[ **key**: *string*\]: string
