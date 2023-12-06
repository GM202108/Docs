---
id: "_clients_http_index_"
title: "clients/http/index"
sidebar_label: "clients/http/index"
---

[@prismatic-io/spectral](../index.md) › ["clients/http/index"](_clients_http_index_.md)

## Index

### Interfaces

* [ClientProps](../interfaces/_clients_http_index_.clientprops.md)
* [RetryConfig](../interfaces/_clients_http_index_.retryconfig.md)

### Type aliases

* [HttpClient](_clients_http_index_.md#httpclient)
* [SendRawRequestValues](_clients_http_index_.md#sendrawrequestvalues)

### Functions

* [buildRawRequestAction](_clients_http_index_.md#const-buildrawrequestaction)
* [computeRetryDelay](_clients_http_index_.md#const-computeretrydelay)
* [createClient](_clients_http_index_.md#const-createclient)
* [handleErrors](_clients_http_index_.md#const-handleerrors)
* [sendRawRequest](_clients_http_index_.md#const-sendrawrequest)
* [toAuthorizationHeaders](_clients_http_index_.md#const-toauthorizationheaders)
* [toAxiosRetryConfig](_clients_http_index_.md#const-toaxiosretryconfig)
* [toFormData](_clients_http_index_.md#const-toformdata)

## Type aliases

###  HttpClient

Ƭ **HttpClient**: *AxiosInstance*

*Defined in [packages/spectral/src/clients/http/index.ts:11](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/http/index.ts#L11)*

___

###  SendRawRequestValues

Ƭ **SendRawRequestValues**: *[ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹typeof inputs›*

*Defined in [packages/spectral/src/clients/http/index.ts:140](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/http/index.ts#L140)*

## Functions

### `Const` buildRawRequestAction

▸ **buildRawRequestAction**(`baseUrl`: string, `label`: string, `description`: string): *[ActionDefinition](../interfaces/_types_actiondefinition_.actiondefinition.md)‹object, boolean, object›*

*Defined in [packages/spectral/src/clients/http/index.ts:182](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/http/index.ts#L182)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`baseUrl` | string | - |
`label` | string | "Raw Request" |
`description` | string | "Issue a raw HTTP request" |

**Returns:** *[ActionDefinition](../interfaces/_types_actiondefinition_.actiondefinition.md)‹object, boolean, object›*

___

### `Const` computeRetryDelay

▸ **computeRetryDelay**(`retryDelay`: RetryConfig["retryDelay"], `useExponentialBackoff`: RetryConfig["useExponentialBackoff"]): *IAxiosRetryConfig["retryDelay"]*

*Defined in [packages/spectral/src/clients/http/index.ts:69](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/http/index.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`retryDelay` | RetryConfig["retryDelay"] |
`useExponentialBackoff` | RetryConfig["useExponentialBackoff"] |

**Returns:** *IAxiosRetryConfig["retryDelay"]*

___

### `Const` createClient

▸ **createClient**(`__namedParameters`: object): *[HttpClient](_clients_http_index_.md#httpclient)*

*Defined in [packages/spectral/src/clients/http/index.ts:91](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/http/index.ts#L91)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`baseUrl` | undefined &#124; string | - |
`debug` | boolean | false |
`headers` | undefined &#124; object | - |
`params` | undefined &#124; object | - |
`responseType` | undefined &#124; "text" &#124; "arraybuffer" &#124; "blob" &#124; "document" &#124; "json" &#124; "stream" | - |
`retryConfig` | undefined &#124; [RetryConfig](../interfaces/_clients_http_index_.retryconfig.md)‹› | - |
`timeout` | undefined &#124; number | - |

**Returns:** *[HttpClient](_clients_http_index_.md#httpclient)*

___

### `Const` handleErrors

▸ **handleErrors**(`error`: unknown): *unknown*

*Defined in [packages/spectral/src/clients/http/index.ts:129](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/http/index.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | unknown |

**Returns:** *unknown*

___

### `Const` sendRawRequest

▸ **sendRawRequest**(`baseUrl`: string, `values`: [SendRawRequestValues](_clients_http_index_.md#sendrawrequestvalues), `authorizationHeaders`: Record‹string, string›): *Promise‹AxiosResponse›*

*Defined in [packages/spectral/src/clients/http/index.ts:142](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/http/index.ts#L142)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`baseUrl` | string | - |
`values` | [SendRawRequestValues](_clients_http_index_.md#sendrawrequestvalues) | - |
`authorizationHeaders` | Record‹string, string› | {} |

**Returns:** *Promise‹AxiosResponse›*

___

### `Const` toAuthorizationHeaders

▸ **toAuthorizationHeaders**(`connection`: [Connection](../interfaces/_types_inputs_.connection.md)): *object*

*Defined in [packages/spectral/src/clients/http/index.ts:13](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/http/index.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`connection` | [Connection](../interfaces/_types_inputs_.connection.md) |

**Returns:** *object*

* **Authorization**: *string*

___

### `Const` toAxiosRetryConfig

▸ **toAxiosRetryConfig**(`__namedParameters`: object): *IAxiosRetryConfig*

*Defined in [packages/spectral/src/clients/http/index.ts:79](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/http/index.ts#L79)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`rest` | rest |
`retryAllErrors` | undefined &#124; false &#124; true |
`retryCondition` | undefined &#124; function |
`retryDelay` | undefined &#124; number &#124; function |
`useExponentialBackoff` | undefined &#124; false &#124; true |

**Returns:** *IAxiosRetryConfig*

___

### `Const` toFormData

▸ **toFormData**(`formData`: [KeyValuePair](../interfaces/_types_actioninputparameters_.keyvaluepair.md)‹unknown›[], `fileData`: [KeyValuePair](../interfaces/_types_actioninputparameters_.keyvaluepair.md)‹unknown›[], `fileDataFileNames`: Record‹string, string›): *FormData*

*Defined in [packages/spectral/src/clients/http/index.ts:38](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/clients/http/index.ts#L38)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`formData` | [KeyValuePair](../interfaces/_types_actioninputparameters_.keyvaluepair.md)‹unknown›[] | - |
`fileData` | [KeyValuePair](../interfaces/_types_actioninputparameters_.keyvaluepair.md)‹unknown›[] | - |
`fileDataFileNames` | Record‹string, string› | {} |

**Returns:** *FormData*
