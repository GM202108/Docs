---
id: "_clients_soap_types_.basicauthconnection"
title: "BasicAuthConnection"
sidebar_label: "BasicAuthConnection"
---

[@prismatic-io/spectral](../index.md) › ["clients/soap/types"](../modules/_clients_soap_types_.md) › [BasicAuthConnection](_clients_soap_types_.basicauthconnection.md)

## Hierarchy

* [Connection](_types_inputs_.connection.md)

  ↳ **BasicAuthConnection**

## Index

### Properties

* [configVarKey](_clients_soap_types_.basicauthconnection.md#configvarkey)
* [context](_clients_soap_types_.basicauthconnection.md#optional-context)
* [fields](_clients_soap_types_.basicauthconnection.md#fields)
* [key](_clients_soap_types_.basicauthconnection.md#key)
* [token](_clients_soap_types_.basicauthconnection.md#optional-token)

## Properties

###  configVarKey

• **configVarKey**: *string*

*Inherited from [Connection](_types_inputs_.connection.md).[configVarKey](_types_inputs_.connection.md#configvarkey)*

*Defined in [packages/spectral/src/types/Inputs.ts:221](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L221)*

Key for the Config Variable hosting this Connection.

___

### `Optional` context

• **context**? : *Record‹string, unknown›*

*Inherited from [Connection](_types_inputs_.connection.md).[context](_types_inputs_.connection.md#optional-context)*

*Defined in [packages/spectral/src/types/Inputs.ts:225](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L225)*

___

###  fields

• **fields**: *object*

*Overrides [Connection](_types_inputs_.connection.md).[fields](_types_inputs_.connection.md#fields)*

*Defined in [packages/spectral/src/clients/soap/types.ts:82](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/soap/types.ts#L82)*

#### Type declaration:

* \[ **key**: *string*\]: unknown

* **loginMethod**: *unknown*

* **password**: *unknown*

* **username**: *unknown*

___

###  key

• **key**: *string*

*Inherited from [Connection](_types_inputs_.connection.md).[key](_types_inputs_.connection.md#key)*

*Defined in [packages/spectral/src/types/Inputs.ts:219](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L219)*

Key of the Connection type.

___

### `Optional` token

• **token**? : *Record‹string, unknown›*

*Inherited from [Connection](_types_inputs_.connection.md).[token](_types_inputs_.connection.md#optional-token)*

*Defined in [packages/spectral/src/types/Inputs.ts:224](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L224)*
