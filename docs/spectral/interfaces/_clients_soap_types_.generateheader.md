---
id: "_clients_soap_types_.generateheader"
title: "GenerateHeader"
sidebar_label: "GenerateHeader"
---

[@prismatic-io/spectral](../index.md) › ["clients/soap/types"](../modules/_clients_soap_types_.md) › [GenerateHeader](_clients_soap_types_.generateheader.md)

## Hierarchy

* **GenerateHeader**

## Callable

▸ (`wsdlParam`: [SOAPConnection](_clients_soap_types_.soapconnection.md) | string, `headerPayload`: [HeaderPayload](_clients_soap_types_.headerpayload.md), `headerOptions`: undefined): *Promise‹string›*

*Defined in [packages/spectral/src/clients/soap/types.ts:68](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/soap/types.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`wsdlParam` | [SOAPConnection](_clients_soap_types_.soapconnection.md) &#124; string |
`headerPayload` | [HeaderPayload](_clients_soap_types_.headerpayload.md) |
`headerOptions` | undefined |

**Returns:** *Promise‹string›*

▸ (`wsdlParam`: [SOAPConnection](_clients_soap_types_.soapconnection.md) | string, `headerPayload`: [HeaderPayload](_clients_soap_types_.headerpayload.md), `headerOptions`: object): *Promise‹string›*

*Defined in [packages/spectral/src/clients/soap/types.ts:73](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/soap/types.ts#L73)*

**Parameters:**

▪ **wsdlParam**: *[SOAPConnection](_clients_soap_types_.soapconnection.md) | string*

▪ **headerPayload**: *[HeaderPayload](_clients_soap_types_.headerpayload.md)*

▪ **headerOptions**: *object*

Name | Type |
------ | ------ |
`namespace` | string |
`xmlns` | string |

**Returns:** *Promise‹string›*
