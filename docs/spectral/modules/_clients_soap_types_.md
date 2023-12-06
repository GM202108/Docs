---
id: "_clients_soap_types_"
title: "clients/soap/types"
sidebar_label: "clients/soap/types"
---

[@prismatic-io/spectral](../index.md) › ["clients/soap/types"](_clients_soap_types_.md)

## Index

### Interfaces

* [BasicAuthConnection](../interfaces/_clients_soap_types_.basicauthconnection.md)
* [ClientOverrides](../interfaces/_clients_soap_types_.clientoverrides.md)
* [DescribeWSDL](../interfaces/_clients_soap_types_.describewsdl.md)
* [GenerateHeader](../interfaces/_clients_soap_types_.generateheader.md)
* [HeaderPayload](../interfaces/_clients_soap_types_.headerpayload.md)
* [RequestParams](../interfaces/_clients_soap_types_.requestparams.md)
* [SOAPAuth](../interfaces/_clients_soap_types_.soapauth.md)
* [SOAPConnection](../interfaces/_clients_soap_types_.soapconnection.md)
* [SOAPRequest](../interfaces/_clients_soap_types_.soaprequest.md)

### Type aliases

* [SOAPResponse](_clients_soap_types_.md#soapresponse)

### Functions

* [isBasicAuthConnection](_clients_soap_types_.md#const-isbasicauthconnection)
* [isSOAPConnection](_clients_soap_types_.md#const-issoapconnection)

## Type aliases

###  SOAPResponse

Ƭ **SOAPResponse**: *[]*

*Defined in [packages/spectral/src/clients/soap/types.ts:32](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/soap/types.ts#L32)*

SOAP requests return a 4-tuple or 5-tuple with the response first, the XML response second, headers third, and the XML request fourth, and optional message attachments fifth.

## Functions

### `Const` isBasicAuthConnection

▸ **isBasicAuthConnection**(`connection`: [Connection](../interfaces/_types_inputs_.connection.md)): *connection is BasicAuthConnection*

*Defined in [packages/spectral/src/clients/soap/types.ts:96](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/soap/types.ts#L96)*

This function determines if the object presented is a Basic Auth connection with `username`, `password`, and `loginMethod` fields.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`connection` | [Connection](../interfaces/_types_inputs_.connection.md) | The connection to test |

**Returns:** *connection is BasicAuthConnection*

This function returns true if the connection is a SOAPConnection, and false otherwise.

___

### `Const` isSOAPConnection

▸ **isSOAPConnection**(`connection`: unknown): *connection is SOAPConnection*

*Defined in [packages/spectral/src/clients/soap/types.ts:21](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/soap/types.ts#L21)*

This function determines if the object presented is a SOAP connection with a `wsdlDefinitionUrl` field.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`connection` | unknown | The connection to test |

**Returns:** *connection is SOAPConnection*

This function returns true if the connection is a SOAPConnection, and false otherwise.
