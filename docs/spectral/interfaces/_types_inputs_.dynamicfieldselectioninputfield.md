---
id: "_types_inputs_.dynamicfieldselectioninputfield"
title: "DynamicFieldSelectionInputField"
sidebar_label: "DynamicFieldSelectionInputField"
---

[@prismatic-io/spectral](../index.md) › ["types/Inputs"](../modules/_types_inputs_.md) › [DynamicFieldSelectionInputField](_types_inputs_.dynamicfieldselectioninputfield.md)

Defines attributes of a SelectedFieldInputField

## Hierarchy

* [BaseInputField](_types_inputs_.baseinputfield.md)

  ↳ **DynamicFieldSelectionInputField**

## Index

### Properties

* [clean](_types_inputs_.dynamicfieldselectioninputfield.md#optional-clean)
* [collection](_types_inputs_.dynamicfieldselectioninputfield.md#optional-collection)
* [comments](_types_inputs_.dynamicfieldselectioninputfield.md#optional-comments)
* [default](_types_inputs_.dynamicfieldselectioninputfield.md#optional-default)
* [example](_types_inputs_.dynamicfieldselectioninputfield.md#optional-example)
* [label](_types_inputs_.dynamicfieldselectioninputfield.md#label)
* [placeholder](_types_inputs_.dynamicfieldselectioninputfield.md#optional-placeholder)
* [required](_types_inputs_.dynamicfieldselectioninputfield.md#optional-required)
* [type](_types_inputs_.dynamicfieldselectioninputfield.md#type)

## Properties

### `Optional` clean

• **clean**? : *[InputCleanFunction](../modules/_types_inputs_.md#inputcleanfunction)‹this["default"]›*

*Defined in [packages/spectral/src/types/Inputs.ts:285](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L285)*

Clean function

___

### `Optional` collection

• **collection**? : *[InputFieldCollection](../modules/_types_inputs_.md#inputfieldcollection)*

*Defined in [packages/spectral/src/types/Inputs.ts:281](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L281)*

Collection type of the InputField

___

### `Optional` comments

• **comments**? : *undefined | string*

*Inherited from [BaseInputField](_types_inputs_.baseinputfield.md).[comments](_types_inputs_.baseinputfield.md#optional-comments)*

*Defined in [packages/spectral/src/types/Inputs.ts:105](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L105)*

Additional text to give guidance to the user configuring the InputField.

___

### `Optional` default

• **default**? : *unknown*

*Defined in [packages/spectral/src/types/Inputs.ts:283](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L283)*

Default value for this field.

___

### `Optional` example

• **example**? : *undefined | string*

*Inherited from [BaseInputField](_types_inputs_.baseinputfield.md).[example](_types_inputs_.baseinputfield.md#optional-example)*

*Defined in [packages/spectral/src/types/Inputs.ts:107](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L107)*

Example valid input for this InputField.

___

###  label

• **label**: *object | string*

*Inherited from [BaseInputField](_types_inputs_.baseinputfield.md).[label](_types_inputs_.baseinputfield.md#label)*

*Defined in [packages/spectral/src/types/Inputs.ts:101](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L101)*

Interface label of the InputField.

___

### `Optional` placeholder

• **placeholder**? : *undefined | string*

*Inherited from [BaseInputField](_types_inputs_.baseinputfield.md).[placeholder](_types_inputs_.baseinputfield.md#optional-placeholder)*

*Defined in [packages/spectral/src/types/Inputs.ts:103](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L103)*

Text to show as the InputField placeholder.

___

### `Optional` required

• **required**? : *undefined | false | true*

*Inherited from [BaseInputField](_types_inputs_.baseinputfield.md).[required](_types_inputs_.baseinputfield.md#optional-required)*

*Defined in [packages/spectral/src/types/Inputs.ts:109](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L109)*

Indicate if this InputField is required.

___

###  type

• **type**: *"dynamicFieldSelection"*

*Defined in [packages/spectral/src/types/Inputs.ts:279](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L279)*

Data type the InputField will collect.
