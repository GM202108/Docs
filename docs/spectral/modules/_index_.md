---
id: "_index_"
title: "index"
sidebar_label: "index"
---

[@prismatic-io/spectral](../index.md) › ["index"](_index_.md)

## Index

### Functions

* [action](_index_.md#const-action)
* [component](_index_.md#const-component)
* [connection](_index_.md#const-connection)
* [dataSource](_index_.md#const-datasource)
* [input](_index_.md#const-input)
* [oauth2Connection](_index_.md#const-oauth2connection)
* [trigger](_index_.md#const-trigger)

## Functions

### `Const` action

▸ **action**‹**TInputs**, **TAllowsBranching**, **TReturn**›(`definition`: [ActionDefinition](../interfaces/_types_actiondefinition_.actiondefinition.md)‹TInputs, TAllowsBranching, TReturn›): *[ActionDefinition](../interfaces/_types_actiondefinition_.actiondefinition.md)‹TInputs, TAllowsBranching, TReturn›*

*Defined in [packages/spectral/src/index.ts:43](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/index.ts#L43)*

This function creates an action object that can be referenced
by a custom component. It helps ensure that the shape of the
action object conforms to what the Prismatic API expects.
For information on writing custom component actions, see
https://prismatic.io/docs/custom-components/writing-custom-components/#writing-actions.

**Type parameters:**

▪ **TInputs**: *[Inputs](_types_inputs_.md#inputs)*

▪ **TAllowsBranching**: *boolean*

▪ **TReturn**: *[ActionPerformReturn](_types_actionperformreturn_.md#actionperformreturn)‹TAllowsBranching, unknown›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | [ActionDefinition](../interfaces/_types_actiondefinition_.actiondefinition.md)‹TInputs, TAllowsBranching, TReturn› | An ActionDefinition type object that includes UI display information, a function to perform when the action is invoked, and a an object containing inputs for the perform function. |

**Returns:** *[ActionDefinition](../interfaces/_types_actiondefinition_.actiondefinition.md)‹TInputs, TAllowsBranching, TReturn›*

This function validates the shape of the `definition` object provided, and returns the same action object.

___

### `Const` component

▸ **component**‹**T**›(`definition`: [ComponentDefinition](_types_componentdefinition_.md#componentdefinition)‹T›): *ReturnType‹typeof convertComponent›*

*Defined in [packages/spectral/src/index.ts:30](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/index.ts#L30)*

This function creates a component object that can be
imported into the Prismatic API. For information on using
this function to write custom components, see
https://prismatic.io/docs/custom-components/writing-custom-components/#exporting-a-component.

**Type parameters:**

▪ **T**: *boolean*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | [ComponentDefinition](_types_componentdefinition_.md#componentdefinition)‹T› | A ComponentDefinition type object, including display information, unique key, and a set of actions the component implements. |

**Returns:** *ReturnType‹typeof convertComponent›*

This function returns a component object that has the shape the Prismatic API expects.

___

### `Const` connection

▸ **connection**‹**T**›(`definition`: T): *T*

*Defined in [packages/spectral/src/index.ts:100](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/index.ts#L100)*

For information on writing custom component connections, see
https://prismatic.io/docs/custom-components/writing-custom-components/#adding-connections.

**Type parameters:**

▪ **T**: *[DefaultConnectionDefinition](../interfaces/_types_connectiondefinition_.defaultconnectiondefinition.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | T | A DefaultConnectionDefinition object that describes the type of a connection for a custom component action or trigger, and information on how it should be displayed in the Prismatic WebApp. |

**Returns:** *T*

This functions validates the shape of the `definition` object provided and returns the same connection object.

___

### `Const` dataSource

▸ **dataSource**‹**TInputs**, **TDataSourceType**›(`definition`: [DataSourceDefinition](../interfaces/_types_datasourcedefinition_.datasourcedefinition.md)‹TInputs, TDataSourceType›): *[DataSourceDefinition](../interfaces/_types_datasourcedefinition_.datasourcedefinition.md)‹TInputs, TDataSourceType›*

*Defined in [packages/spectral/src/index.ts:77](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/index.ts#L77)*

This function creates a data source object that can be referenced
by a custom component. It helps ensure that the shape of the
data source object conforms to what the Prismatic API expects.
For information on writing custom component data sources, see
https://prismatic.io/docs/custom-components/writing-custom-components/#writing-data-sources.

**Type parameters:**

▪ **TInputs**: *[Inputs](_types_inputs_.md#inputs)*

▪ **TDataSourceType**: *[DataSourceType](_types_datasourceresult_.md#datasourcetype)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | [DataSourceDefinition](../interfaces/_types_datasourcedefinition_.datasourcedefinition.md)‹TInputs, TDataSourceType› | A DataSourceDefinition type object that includes UI display information, a function to perform when the data source is invoked, and a an object containing inputs for the perform function. |

**Returns:** *[DataSourceDefinition](../interfaces/_types_datasourcedefinition_.datasourcedefinition.md)‹TInputs, TDataSourceType›*

This function validates the shape of the `definition` object provided, and returns the same data source object.

___

### `Const` input

▸ **input**‹**T**›(`definition`: T): *T*

*Defined in [packages/spectral/src/index.ts:91](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/index.ts#L91)*

For information and examples on how to write inputs
for custom component actions and triggers, see
https://prismatic.io/docs/custom-components/writing-custom-components/#adding-inputs.

**Type parameters:**

▪ **T**: *[InputFieldDefinition](_types_inputs_.md#inputfielddefinition)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | T | An InputFieldDefinition object that describes the type of an input for a custom component action or trigger, and information on how it should be displayed in the Prismatic WebApp. |

**Returns:** *T*

This function validates the shape of the `definition` object provided, and returns the same input object.

___

### `Const` oauth2Connection

▸ **oauth2Connection**‹**T**›(`definition`: T): *T*

*Defined in [packages/spectral/src/index.ts:110](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/index.ts#L110)*

For information on writing custom component connections, see
https://prismatic.io/docs/custom-components/writing-custom-components/#adding-connections.

**Type parameters:**

▪ **T**: *[OAuth2ConnectionDefinition](_types_connectiondefinition_.md#oauth2connectiondefinition)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | T | An OAuth2ConnectionDefinition object that describes the type of a connection for a custom component action or trigger, and information on how it should be displayed in the Prismatic WebApp. |

**Returns:** *T*

This functions validates the shape of the `definition` object provided and returns the same connection object.

___

### `Const` trigger

▸ **trigger**‹**TInputs**, **TAllowsBranching**, **TResult**›(`definition`: [TriggerDefinition](../interfaces/_types_triggerdefinition_.triggerdefinition.md)‹TInputs, TAllowsBranching, TResult›): *[TriggerDefinition](../interfaces/_types_triggerdefinition_.triggerdefinition.md)‹TInputs, TAllowsBranching, TResult›*

*Defined in [packages/spectral/src/index.ts:60](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/index.ts#L60)*

This function creates a trigger object that can be referenced
by a custom component. It helps ensure that the shape of the
trigger object conforms to what the Prismatic API expects.
For information on writing custom component triggers, see
https://prismatic.io/docs/custom-components/writing-custom-components/#writing-triggers.

**Type parameters:**

▪ **TInputs**: *[Inputs](_types_inputs_.md#inputs)*

▪ **TAllowsBranching**: *boolean*

▪ **TResult**: *[TriggerResult](_types_triggerresult_.md#triggerresult)‹TAllowsBranching›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | [TriggerDefinition](../interfaces/_types_triggerdefinition_.triggerdefinition.md)‹TInputs, TAllowsBranching, TResult› | A TriggerDefinition type object that includes UI display information, a function to perform when the trigger is invoked, and a an object containing inputs for the perform function. |

**Returns:** *[TriggerDefinition](../interfaces/_types_triggerdefinition_.triggerdefinition.md)‹TInputs, TAllowsBranching, TResult›*

This function validates the shape of the `definition` object provided, and returns the same trigger object.
