---
id: "_types_inputs_.baseinputfield"
title: "BaseInputField"
sidebar_label: "BaseInputField"
---

[@prismatic-io/spectral](../index.md) › ["types/Inputs"](../modules/_types_inputs_.md) › [BaseInputField](_types_inputs_.baseinputfield.md)

## Hierarchy

* **BaseInputField**

  ↳ [StringInputField](_types_inputs_.stringinputfield.md)

  ↳ [DataInputField](_types_inputs_.datainputfield.md)

  ↳ [TextInputField](_types_inputs_.textinputfield.md)

  ↳ [PasswordInputField](_types_inputs_.passwordinputfield.md)

  ↳ [BooleanInputField](_types_inputs_.booleaninputfield.md)

  ↳ [CodeInputField](_types_inputs_.codeinputfield.md)

  ↳ [ConditionalInputField](_types_inputs_.conditionalinputfield.md)

  ↳ [ConnectionInputField](_types_inputs_.connectioninputfield.md)

  ↳ [ObjectSelectionInputField](_types_inputs_.objectselectioninputfield.md)

  ↳ [ObjectFieldMapInputField](_types_inputs_.objectfieldmapinputfield.md)

  ↳ [JSONFormInputField](_types_inputs_.jsonforminputfield.md)

  ↳ [DynamicObjectSelectionInputField](_types_inputs_.dynamicobjectselectioninputfield.md)

  ↳ [DynamicFieldSelectionInputField](_types_inputs_.dynamicfieldselectioninputfield.md)

## Index

### Properties

* [comments](_types_inputs_.baseinputfield.md#optional-comments)
* [example](_types_inputs_.baseinputfield.md#optional-example)
* [label](_types_inputs_.baseinputfield.md#label)
* [placeholder](_types_inputs_.baseinputfield.md#optional-placeholder)
* [required](_types_inputs_.baseinputfield.md#optional-required)

## Properties

### `Optional` comments

• **comments**? : *undefined | string*

*Defined in [packages/spectral/src/types/Inputs.ts:105](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L105)*

Additional text to give guidance to the user configuring the InputField.

___

### `Optional` example

• **example**? : *undefined | string*

*Defined in [packages/spectral/src/types/Inputs.ts:107](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L107)*

Example valid input for this InputField.

___

###  label

• **label**: *object | string*

*Defined in [packages/spectral/src/types/Inputs.ts:101](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L101)*

Interface label of the InputField.

___

### `Optional` placeholder

• **placeholder**? : *undefined | string*

*Defined in [packages/spectral/src/types/Inputs.ts:103](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L103)*

Text to show as the InputField placeholder.

___

### `Optional` required

• **required**? : *undefined | false | true*

*Defined in [packages/spectral/src/types/Inputs.ts:109](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/Inputs.ts#L109)*

Indicate if this InputField is required.
