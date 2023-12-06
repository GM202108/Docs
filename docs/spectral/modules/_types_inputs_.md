---
id: "_types_inputs_"
title: "types/Inputs"
sidebar_label: "types/Inputs"
---

[@prismatic-io/spectral](../index.md) › ["types/Inputs"](_types_inputs_.md)

## Index

### Interfaces

* [BaseInputField](../interfaces/_types_inputs_.baseinputfield.md)
* [BooleanInputField](../interfaces/_types_inputs_.booleaninputfield.md)
* [CodeInputField](../interfaces/_types_inputs_.codeinputfield.md)
* [ConditionalInputField](../interfaces/_types_inputs_.conditionalinputfield.md)
* [Connection](../interfaces/_types_inputs_.connection.md)
* [ConnectionInputField](../interfaces/_types_inputs_.connectioninputfield.md)
* [DataInputField](../interfaces/_types_inputs_.datainputfield.md)
* [DynamicFieldSelectionInputField](../interfaces/_types_inputs_.dynamicfieldselectioninputfield.md)
* [DynamicObjectSelectionInputField](../interfaces/_types_inputs_.dynamicobjectselectioninputfield.md)
* [InputFieldChoice](../interfaces/_types_inputs_.inputfieldchoice.md)
* [JSONFormInputField](../interfaces/_types_inputs_.jsonforminputfield.md)
* [ObjectFieldMapInputField](../interfaces/_types_inputs_.objectfieldmapinputfield.md)
* [ObjectSelectionInputField](../interfaces/_types_inputs_.objectselectioninputfield.md)
* [PasswordInputField](../interfaces/_types_inputs_.passwordinputfield.md)
* [StringInputField](../interfaces/_types_inputs_.stringinputfield.md)
* [TextInputField](../interfaces/_types_inputs_.textinputfield.md)

### Type aliases

* [ConnectionInput](_types_inputs_.md#connectioninput)
* [DynamicFieldSelection](_types_inputs_.md#dynamicfieldselection)
* [DynamicObjectSelection](_types_inputs_.md#dynamicobjectselection)
* [Element](_types_inputs_.md#element)
* [InputCleanFunction](_types_inputs_.md#inputcleanfunction)
* [InputFieldCollection](_types_inputs_.md#inputfieldcollection)
* [InputFieldDefinition](_types_inputs_.md#inputfielddefinition)
* [InputFieldType](_types_inputs_.md#inputfieldtype)
* [Inputs](_types_inputs_.md#inputs)
* [JSONForm](_types_inputs_.md#jsonform)
* [ObjectFieldMap](_types_inputs_.md#objectfieldmap)
* [ObjectSelection](_types_inputs_.md#objectselection)

### Object literals

* [InputFieldDefaultMap](_types_inputs_.md#const-inputfielddefaultmap)

## Type aliases

###  ConnectionInput

Ƭ **ConnectionInput**: *[StringInputField](../interfaces/_types_inputs_.stringinputfield.md)‹› | [DataInputField](../interfaces/_types_inputs_.datainputfield.md)‹› | [TextInputField](../interfaces/_types_inputs_.textinputfield.md)‹› | [PasswordInputField](../interfaces/_types_inputs_.passwordinputfield.md)‹› | [BooleanInputField](../interfaces/_types_inputs_.booleaninputfield.md)‹› & object*

*Defined in [packages/spectral/src/types/Inputs.ts:72](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L72)*

___

###  DynamicFieldSelection

Ƭ **DynamicFieldSelection**: *string*

*Defined in [packages/spectral/src/types/Inputs.ts:50](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L50)*

___

###  DynamicObjectSelection

Ƭ **DynamicObjectSelection**: *string*

*Defined in [packages/spectral/src/types/Inputs.ts:48](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L48)*

___

###  Element

Ƭ **Element**: *object*

*Defined in [packages/spectral/src/types/Inputs.ts:4](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L4)*

#### Type declaration:

* **key**: *string*

* **label**? : *undefined | string*

___

###  InputCleanFunction

Ƭ **InputCleanFunction**: *function*

*Defined in [packages/spectral/src/types/Inputs.ts:95](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L95)*

#### Type declaration:

▸ (`value`: TValue): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TValue |

___

###  InputFieldCollection

Ƭ **InputFieldCollection**: *"valuelist" | "keyvaluelist"*

*Defined in [packages/spectral/src/types/Inputs.ts:297](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L297)*

InputField collection enumeration

___

###  InputFieldDefinition

Ƭ **InputFieldDefinition**: *[StringInputField](../interfaces/_types_inputs_.stringinputfield.md) | [DataInputField](../interfaces/_types_inputs_.datainputfield.md) | [TextInputField](../interfaces/_types_inputs_.textinputfield.md) | [PasswordInputField](../interfaces/_types_inputs_.passwordinputfield.md) | [BooleanInputField](../interfaces/_types_inputs_.booleaninputfield.md) | [CodeInputField](../interfaces/_types_inputs_.codeinputfield.md) | [ConditionalInputField](../interfaces/_types_inputs_.conditionalinputfield.md) | [ConnectionInputField](../interfaces/_types_inputs_.connectioninputfield.md) | [ObjectSelectionInputField](../interfaces/_types_inputs_.objectselectioninputfield.md) | [ObjectFieldMapInputField](../interfaces/_types_inputs_.objectfieldmapinputfield.md) | [JSONFormInputField](../interfaces/_types_inputs_.jsonforminputfield.md) | [DynamicObjectSelectionInputField](../interfaces/_types_inputs_.dynamicobjectselectioninputfield.md) | [DynamicFieldSelectionInputField](../interfaces/_types_inputs_.dynamicfieldselectioninputfield.md)*

*Defined in [packages/spectral/src/types/Inputs.ts:80](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L80)*

___

###  InputFieldType

Ƭ **InputFieldType**: *InputFieldDefinition["type"]*

*Defined in [packages/spectral/src/types/Inputs.ts:53](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L53)*

InputField type enumeration.

___

###  Inputs

Ƭ **Inputs**: *Record‹string, [InputFieldDefinition](_types_inputs_.md#inputfielddefinition)›*

*Defined in [packages/spectral/src/types/Inputs.ts:71](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L71)*

___

###  JSONForm

Ƭ **JSONForm**: *object*

*Defined in [packages/spectral/src/types/Inputs.ts:29](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L29)*

#### Type declaration:

* **data**? : *Record‹string, unknown›*

* **schema**: *JsonSchema*

* **uiSchema**: *UISchemaElement*

___

###  ObjectFieldMap

Ƭ **ObjectFieldMap**: *object*

*Defined in [packages/spectral/src/types/Inputs.ts:15](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L15)*

#### Type declaration:

* **fields**: *object[]*

* **options**? : *object[]*

___

###  ObjectSelection

Ƭ **ObjectSelection**: *object[]*

*Defined in [packages/spectral/src/types/Inputs.ts:9](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L9)*

## Object literals

### `Const` InputFieldDefaultMap

### ▪ **InputFieldDefaultMap**: *object*

*Defined in [packages/spectral/src/types/Inputs.ts:54](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L54)*

###  boolean

• **boolean**: *string* = "false"

*Defined in [packages/spectral/src/types/Inputs.ts:60](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L60)*

###  code

• **code**: *string* = ""

*Defined in [packages/spectral/src/types/Inputs.ts:61](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L61)*

###  conditional

• **conditional**: *undefined* = undefined

*Defined in [packages/spectral/src/types/Inputs.ts:62](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L62)*

###  connection

• **connection**: *undefined* = undefined

*Defined in [packages/spectral/src/types/Inputs.ts:63](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L63)*

###  data

• **data**: *string* = ""

*Defined in [packages/spectral/src/types/Inputs.ts:57](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L57)*

###  dynamicFieldSelection

• **dynamicFieldSelection**: *string* = ""

*Defined in [packages/spectral/src/types/Inputs.ts:68](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L68)*

###  dynamicObjectSelection

• **dynamicObjectSelection**: *string* = ""

*Defined in [packages/spectral/src/types/Inputs.ts:67](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L67)*

###  jsonForm

• **jsonForm**: *undefined* = undefined

*Defined in [packages/spectral/src/types/Inputs.ts:66](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L66)*

###  objectFieldMap

• **objectFieldMap**: *undefined* = undefined

*Defined in [packages/spectral/src/types/Inputs.ts:65](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L65)*

###  objectSelection

• **objectSelection**: *undefined* = undefined

*Defined in [packages/spectral/src/types/Inputs.ts:64](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L64)*

###  password

• **password**: *string* = ""

*Defined in [packages/spectral/src/types/Inputs.ts:59](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L59)*

###  string

• **string**: *string* = ""

*Defined in [packages/spectral/src/types/Inputs.ts:56](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L56)*

###  text

• **text**: *string* = ""

*Defined in [packages/spectral/src/types/Inputs.ts:58](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L58)*
