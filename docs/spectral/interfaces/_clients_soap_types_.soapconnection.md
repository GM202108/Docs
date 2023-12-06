---
id: "_clients_soap_types_.soapconnection"
title: "SOAPConnection"
sidebar_label: "SOAPConnection"
---

[@prismatic-io/spectral](../index.md) › ["clients/soap/types"](../modules/_clients_soap_types_.md) › [SOAPConnection](_clients_soap_types_.soapconnection.md)

SOAPConnection takes standard connection fields, and adds an optional `wsdlDefinitionUrl` field.

## Hierarchy

* [Connection](_types_inputs_.connection.md)

  ↳ **SOAPConnection**

## Index

### Properties

* [configVarKey](_clients_soap_types_.soapconnection.md#configvarkey)
* [context](_clients_soap_types_.soapconnection.md#optional-context)
* [fields](_clients_soap_types_.soapconnection.md#fields)
* [key](_clients_soap_types_.soapconnection.md#key)
* [token](_clients_soap_types_.soapconnection.md#optional-token)

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

*Defined in [packages/spectral/src/clients/soap/types.ts:9](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/soap/types.ts#L9)*

#### Type declaration:

* \[ **key**: *string*\]: unknown

* **wsdlDefinitionUrl**? : *undefined | string*

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
