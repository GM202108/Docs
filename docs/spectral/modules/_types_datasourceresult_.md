---
id: "_types_datasourceresult_"
title: "types/DataSourceResult"
sidebar_label: "types/DataSourceResult"
---

[@prismatic-io/spectral](../index.md) › ["types/DataSourceResult"](_types_datasourceresult_.md)

## Index

### Type aliases

* [DataSourceResult](_types_datasourceresult_.md#datasourceresult)
* [DataSourceResultType](_types_datasourceresult_.md#datasourceresulttype)
* [DataSourceType](_types_datasourceresult_.md#datasourcetype)
* [DataSourceTypeMap](_types_datasourceresult_.md#datasourcetypemap)

## Type aliases

###  DataSourceResult

Ƭ **DataSourceResult**: *object*

*Defined in [packages/spectral/src/types/DataSourceResult.ts:31](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/DataSourceResult.ts#L31)*

Represents the result of a Data Source action.

#### Type declaration:

* **result**: *DataSourceTypeMap[TDataSourceType]*

* **supplementalData**? : *undefined | object*

___

###  DataSourceResultType

Ƭ **DataSourceResultType**: *DataSourceTypeMap[DataSourceType]*

*Defined in [packages/spectral/src/types/DataSourceResult.ts:28](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/DataSourceResult.ts#L28)*

___

###  DataSourceType

Ƭ **DataSourceType**: *keyof DataSourceTypeMap*

*Defined in [packages/spectral/src/types/DataSourceResult.ts:26](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/DataSourceResult.ts#L26)*

___

###  DataSourceTypeMap

Ƭ **DataSourceTypeMap**: *object*

*Defined in [packages/spectral/src/types/DataSourceResult.ts:10](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/DataSourceResult.ts#L10)*

The type of field that is appropriate for rendering the data that is the result of the data source perform function.

#### Type declaration:

* **boolean**: *boolean*

* **code**: *string*

* **connection**: *[Connection](../interfaces/_types_inputs_.connection.md)*

* **credential**: *unknown*

* **date**: *string*

* **jsonForm**: *[JSONForm](_types_inputs_.md#jsonform)*

* **number**: *number*

* **objectFieldMap**: *[ObjectFieldMap](_types_inputs_.md#objectfieldmap)*

* **objectSelection**: *[ObjectSelection](_types_inputs_.md#objectselection)*

* **picklist**: *string[] | [Element](_types_inputs_.md#element)[]*

* **schedule**(): *object*

  * **value**: *string*

* **string**: *string*

* **timestamp**: *string*
