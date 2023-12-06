---
id: "_types_inputs_.connection"
title: "Connection"
sidebar_label: "Connection"
---

[@prismatic-io/spectral](../index.md) › ["types/Inputs"](../modules/_types_inputs_.md) › [Connection](_types_inputs_.connection.md)

## Hierarchy

* **Connection**

  ↳ [SOAPConnection](_clients_soap_types_.soapconnection.md)

  ↳ [BasicAuthConnection](_clients_soap_types_.basicauthconnection.md)

## Index

### Properties

* [configVarKey](_types_inputs_.connection.md#configvarkey)
* [context](_types_inputs_.connection.md#optional-context)
* [fields](_types_inputs_.connection.md#fields)
* [key](_types_inputs_.connection.md#key)
* [token](_types_inputs_.connection.md#optional-token)

## Properties

###  configVarKey

• **configVarKey**: *string*

*Defined in [packages/spectral/src/types/Inputs.ts:221](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L221)*

Key for the Config Variable hosting this Connection.

___

### `Optional` context

• **context**? : *Record‹string, unknown›*

*Defined in [packages/spectral/src/types/Inputs.ts:225](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L225)*

___

###  fields

• **fields**: *object*

*Defined in [packages/spectral/src/types/Inputs.ts:223](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L223)*

Field values supplied to this Connection.

#### Type declaration:

* \[ **key**: *string*\]: unknown

___

###  key

• **key**: *string*

*Defined in [packages/spectral/src/types/Inputs.ts:219](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L219)*

Key of the Connection type.

___

### `Optional` token

• **token**? : *Record‹string, unknown›*

*Defined in [packages/spectral/src/types/Inputs.ts:224](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L224)*
