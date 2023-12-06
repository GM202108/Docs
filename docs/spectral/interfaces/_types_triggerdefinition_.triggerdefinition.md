---
id: "_types_triggerdefinition_.triggerdefinition"
title: "TriggerDefinition"
sidebar_label: "TriggerDefinition"
---

[@prismatic-io/spectral](../index.md) › ["types/TriggerDefinition"](../modules/_types_triggerdefinition_.md) › [TriggerDefinition](_types_triggerdefinition_.triggerdefinition.md)

TriggerDefinition is the type of the object that is passed in to `trigger` function to
define a component trigger.

## Type parameters

▪ **TInputs**: *[Inputs](../modules/_types_inputs_.md#inputs)*

▪ **TAllowsBranching**: *boolean*

▪ **TResult**: *[TriggerResult](../modules/_types_triggerresult_.md#triggerresult)‹TAllowsBranching›*

## Hierarchy

* **TriggerDefinition**

## Index

### Properties

* [allowsBranching](_types_triggerdefinition_.triggerdefinition.md#optional-allowsbranching)
* [breakLoop](_types_triggerdefinition_.triggerdefinition.md#optional-breakloop)
* [display](_types_triggerdefinition_.triggerdefinition.md#display)
* [dynamicBranchInput](_types_triggerdefinition_.triggerdefinition.md#optional-dynamicbranchinput)
* [examplePayload](_types_triggerdefinition_.triggerdefinition.md#optional-examplepayload)
* [inputs](_types_triggerdefinition_.triggerdefinition.md#inputs)
* [isCommonTrigger](_types_triggerdefinition_.triggerdefinition.md#optional-iscommontrigger)
* [perform](_types_triggerdefinition_.triggerdefinition.md#perform)
* [scheduleSupport](_types_triggerdefinition_.triggerdefinition.md#schedulesupport)
* [staticBranchNames](_types_triggerdefinition_.triggerdefinition.md#optional-staticbranchnames)
* [synchronousResponseSupport](_types_triggerdefinition_.triggerdefinition.md#synchronousresponsesupport)
* [terminateExecution](_types_triggerdefinition_.triggerdefinition.md#optional-terminateexecution)

## Properties

### `Optional` allowsBranching

• **allowsBranching**? : *TAllowsBranching*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:38](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerDefinition.ts#L38)*

Determines whether this Trigger allows Conditional Branching.

___

### `Optional` breakLoop

• **breakLoop**? : *undefined | false | true*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:36](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerDefinition.ts#L36)*

Specifies whether an Action will break out of a loop.

___

###  display

• **display**: *[ActionDisplayDefinition](_types_displaydefinition_.actiondisplaydefinition.md)*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:24](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerDefinition.ts#L24)*

Defines how the Trigger is displayed in the Prismatic interface.

___

### `Optional` dynamicBranchInput

• **dynamicBranchInput**? : *undefined | string*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:42](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerDefinition.ts#L42)*

The Input associated with Dynamic Branching.

___

### `Optional` examplePayload

• **examplePayload**? : *Awaited‹ReturnType‹this["perform"]››*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:44](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerDefinition.ts#L44)*

An example of the payload outputted by this Trigger.

___

###  inputs

• **inputs**: *TInputs*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:28](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerDefinition.ts#L28)*

InputFields to present in the Prismatic interface for configuration of this Trigger.

___

### `Optional` isCommonTrigger

• **isCommonTrigger**? : *undefined | false | true*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:46](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerDefinition.ts#L46)*

Specifies if this Trigger appears in the list of 'common' Triggers. Only configurable by Prismatic. @default false

___

###  perform

• **perform**: *[TriggerPerformFunction](../modules/_types_triggerperformfunction_.md#triggerperformfunction)‹TInputs, TAllowsBranching, TResult›*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:26](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerDefinition.ts#L26)*

Function to perform when this Trigger is invoked.

___

###  scheduleSupport

• **scheduleSupport**: *[TriggerOptionChoice](../modules/_types_triggerdefinition_.md#triggeroptionchoice)*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:30](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerDefinition.ts#L30)*

Specifies whether this Trigger supports executing the Integration on a recurring schedule.

___

### `Optional` staticBranchNames

• **staticBranchNames**? : *string[]*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:40](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerDefinition.ts#L40)*

Static Branch names associated with this Trigger.

___

###  synchronousResponseSupport

• **synchronousResponseSupport**: *[TriggerOptionChoice](../modules/_types_triggerdefinition_.md#triggeroptionchoice)*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:32](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerDefinition.ts#L32)*

Specifies whether this Trigger supports synchronous responses to an Integration webhook request.

___

### `Optional` terminateExecution

• **terminateExecution**? : *undefined | false | true*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:34](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/types/TriggerDefinition.ts#L34)*

Optional attribute that specifies whether this Trigger will terminate execution.
