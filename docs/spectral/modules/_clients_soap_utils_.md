---
id: "_clients_soap_utils_"
title: "clients/soap/utils"
sidebar_label: "clients/soap/utils"
---

[@prismatic-io/spectral](../index.md) › ["clients/soap/utils"](_clients_soap_utils_.md)

## Index

### Functions

* [debugRequest](_clients_soap_utils_.md#const-debugrequest)
* [describeWSDL](_clients_soap_utils_.md#const-describewsdl)
* [generateHeader](_clients_soap_utils_.md#const-generateheader)
* [getSOAPAuth](_clients_soap_utils_.md#const-getsoapauth)
* [getSOAPClient](_clients_soap_utils_.md#const-getsoapclient)
* [getWSDL](_clients_soap_utils_.md#const-getwsdl)
* [overrideClientDefaults](_clients_soap_utils_.md#const-overrideclientdefaults)
* [soapRequest](_clients_soap_utils_.md#const-soaprequest)

## Functions

### `Const` debugRequest

▸ **debugRequest**(`client`: Client): *void*

*Defined in [packages/spectral/src/clients/soap/utils.ts:28](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/soap/utils.ts#L28)*

Optionally log out SOAP requests and responses for debugging purposes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`client` | Client | A SOAP client that generates requests and responses  |

**Returns:** *void*

___

### `Const` describeWSDL

▸ **describeWSDL**(`wsdlParam`: unknown): *Promise‹string›*

*Defined in [packages/spectral/src/clients/soap/utils.ts:39](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/soap/utils.ts#L39)*

This function takes either the URL of a WSDL or the XML defining a WSDL, and returns an object describing the methods and attributes defined in the WSDL.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`wsdlParam` | unknown | Either the URL where a WSDL is stored, or the XML defining a WSDL. |

**Returns:** *Promise‹string›*

An object containing the methods and attributes defined in a WSDL

___

### `Const` generateHeader

▸ **generateHeader**(`wsdlParam`: string | [SOAPConnection](../interfaces/_clients_soap_types_.soapconnection.md), `headerPayload`: [HeaderPayload](../interfaces/_clients_soap_types_.headerpayload.md), `headerOptions`: undefined | object): *Promise‹string›*

*Defined in [packages/spectral/src/clients/soap/utils.ts:175](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/soap/utils.ts#L175)*

Create a SOAP header

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`wsdlParam` | string &#124; [SOAPConnection](../interfaces/_clients_soap_types_.soapconnection.md) | A SOAPConnection or XML definition of a WSDL |
`headerPayload` | [HeaderPayload](../interfaces/_clients_soap_types_.headerpayload.md) | The contents of a header XML node |
`headerOptions` | undefined &#124; object | Attributes for a header XML node, like namespace or xmlns |

**Returns:** *Promise‹string›*

___

### `Const` getSOAPAuth

▸ **getSOAPAuth**(`connection`: [Connection](../interfaces/_types_inputs_.connection.md), `wsdlDefinition?`: undefined | string): *Promise‹[any, any, any, any, undefined | IMTOMAttachments]›*

*Defined in [packages/spectral/src/clients/soap/utils.ts:198](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/soap/utils.ts#L198)*

Fetch authentication information for a SOAPConnection

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`connection` | [Connection](../interfaces/_types_inputs_.connection.md) | The SOAPConnection |
`wsdlDefinition?` | undefined &#124; string | The XML WSDL definition |

**Returns:** *Promise‹[any, any, any, any, undefined | IMTOMAttachments]›*

___

### `Const` getSOAPClient

▸ **getSOAPClient**‹**T**›(`wsdlParam`: T): *Promise‹Client›*

*Defined in [packages/spectral/src/clients/soap/utils.ts:73](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/soap/utils.ts#L73)*

Create a SOAP client given a WSDL or SOAPConnection

**Type parameters:**

▪ **T**: *string | [SOAPConnection](../interfaces/_clients_soap_types_.soapconnection.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`wsdlParam` | T | a SOAPConnection or XML defining a WSDL |

**Returns:** *Promise‹Client›*

An HTTP client configured to query a SOAP-based API

___

### `Const` getWSDL

▸ **getWSDL**(`wsdlDefinitionURL`: string): *Promise‹string›*

*Defined in [packages/spectral/src/clients/soap/utils.ts:59](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/soap/utils.ts#L59)*

Fetch a WSDL from a URL

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`wsdlDefinitionURL` | string | The URL where the WSDL is stored |

**Returns:** *Promise‹string›*

The WSDL's raw XML

___

### `Const` overrideClientDefaults

▸ **overrideClientDefaults**(`client`: Client, `overrides`: [ClientOverrides](../interfaces/_clients_soap_types_.clientoverrides.md)): *void*

*Defined in [packages/spectral/src/clients/soap/utils.ts:113](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/soap/utils.ts#L113)*

Override some HTTP client defaults

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`client` | Client | The client to override |
`overrides` | [ClientOverrides](../interfaces/_clients_soap_types_.clientoverrides.md) | An endpoint URL or SOAP headers to override  |

**Returns:** *void*

___

### `Const` soapRequest

▸ **soapRequest**(`__namedParameters`: object, `methodParams?`: unknown): *Promise‹[any, any, any, any, undefined | IMTOMAttachments]›*

*Defined in [packages/spectral/src/clients/soap/utils.ts:134](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/soap/utils.ts#L134)*

Make a request to a SOAP-based API

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`debug` | undefined &#124; false &#124; true |
`method` | string |
`overrides` | undefined &#124; [ClientOverrides](../interfaces/_clients_soap_types_.clientoverrides.md) |
`wsdlParam` | string &#124; [SOAPConnection](../interfaces/_clients_soap_types_.soapconnection.md) |

▪`Optional`  **methodParams**: *unknown*

Parameters to pass to the specified SOAP method

**Returns:** *Promise‹[any, any, any, any, undefined | IMTOMAttachments]›*

The results from the SOAP request, including the full XML of the request and response
