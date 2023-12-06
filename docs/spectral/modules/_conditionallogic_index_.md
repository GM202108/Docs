---
id: "_conditionallogic_index_"
title: "conditionalLogic/index"
sidebar_label: "conditionalLogic/index"
---

[@prismatic-io/spectral](../index.md) › ["conditionalLogic/index"](_conditionallogic_index_.md)

## Index

### Type aliases

* [ValidationResult](_conditionallogic_index_.md#validationresult)

### Functions

* [contains](_conditionallogic_index_.md#const-contains)
* [evaluate](_conditionallogic_index_.md#const-evaluate)
* [isEqual](_conditionallogic_index_.md#const-isequal)
* [parseDate](_conditionallogic_index_.md#const-parsedate)
* [parseValue](_conditionallogic_index_.md#const-parsevalue)
* [validate](_conditionallogic_index_.md#const-validate)

## Type aliases

###  ValidationResult

Ƭ **ValidationResult**: *[] | []*

*Defined in [packages/spectral/src/conditionalLogic/index.ts:12](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/conditionalLogic/index.ts#L12)*

## Functions

### `Const` contains

▸ **contains**(`container`: unknown, `containee`: unknown): *boolean*

*Defined in [packages/spectral/src/conditionalLogic/index.ts:58](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/conditionalLogic/index.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`container` | unknown |
`containee` | unknown |

**Returns:** *boolean*

___

### `Const` evaluate

▸ **evaluate**(`expression`: [ConditionalExpression](_conditionallogic_types_.md#conditionalexpression)): *boolean*

*Defined in [packages/spectral/src/conditionalLogic/index.ts:118](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/conditionalLogic/index.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [ConditionalExpression](_conditionallogic_types_.md#conditionalexpression) |

**Returns:** *boolean*

___

### `Const` isEqual

▸ **isEqual**(`left`: unknown, `right`: unknown): *boolean*

*Defined in [packages/spectral/src/conditionalLogic/index.ts:104](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/conditionalLogic/index.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`left` | unknown |
`right` | unknown |

**Returns:** *boolean*

___

### `Const` parseDate

▸ **parseDate**(`value`: unknown): *Date*

*Defined in [packages/spectral/src/conditionalLogic/index.ts:77](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/conditionalLogic/index.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *Date*

___

### `Const` parseValue

▸ **parseValue**(`value`: unknown): *any*

*Defined in [packages/spectral/src/conditionalLogic/index.ts:50](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/conditionalLogic/index.ts#L50)*

Convert stringified objects/values back to their native value, all other
 values just pass through unaltered.

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *any*

___

### `Const` validate

▸ **validate**(`expression`: [ConditionalExpression](_conditionallogic_types_.md#conditionalexpression)): *[ValidationResult](_conditionallogic_index_.md#validationresult)*

*Defined in [packages/spectral/src/conditionalLogic/index.ts:14](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/conditionalLogic/index.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [ConditionalExpression](_conditionallogic_types_.md#conditionalexpression) |

**Returns:** *[ValidationResult](_conditionallogic_index_.md#validationresult)*
