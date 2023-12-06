---
id: "_util_"
title: "util"
sidebar_label: "util"
---

[@prismatic-io/spectral](../index.md) › ["util"](_util_.md)

The `util` module provides a set of functions commonly needed to author custom components.
Many functions in the `util` module are used to coerce data into a particular type, and can be accessed through `util.types`.
For example, `util.types.toInt("5.5")` will return an integer, `5`.

## Index

### Functions

* [isBigInt](_util_.md#const-isbigint)
* [isBool](_util_.md#const-isbool)
* [isBufferDataPayload](_util_.md#const-isbufferdatapayload)
* [isConnection](_util_.md#const-isconnection)
* [isData](_util_.md#const-isdata)
* [isDate](_util_.md#const-isdate)
* [isElement](_util_.md#const-iselement)
* [isInt](_util_.md#const-isint)
* [isJSON](_util_.md#const-isjson)
* [isJSONForm](_util_.md#const-isjsonform)
* [isNumber](_util_.md#const-isnumber)
* [isObjectFieldMap](_util_.md#const-isobjectfieldmap)
* [isObjectSelection](_util_.md#const-isobjectselection)
* [isObjectWithTruthyKeys](_util_.md#const-isobjectwithtruthykeys)
* [isPicklist](_util_.md#const-ispicklist)
* [isSchedule](_util_.md#const-isschedule)
* [isString](_util_.md#const-isstring)
* [isUrl](_util_.md#const-isurl)
* [keyValPairListToObject](_util_.md#const-keyvalpairlisttoobject)
* [lowerCaseHeaders](_util_.md#const-lowercaseheaders)
* [toBigInt](_util_.md#const-tobigint)
* [toBool](_util_.md#const-tobool)
* [toBufferDataPayload](_util_.md#const-tobufferdatapayload)
* [toData](_util_.md#const-todata)
* [toDate](_util_.md#const-todate)
* [toInt](_util_.md#const-toint)
* [toJSON](_util_.md#const-tojson)
* [toJSONForm](_util_.md#const-tojsonform)
* [toNumber](_util_.md#const-tonumber)
* [toObject](_util_.md#const-toobject)
* [toObjectFieldMap](_util_.md#const-toobjectfieldmap)
* [toObjectSelection](_util_.md#const-toobjectselection)
* [toString](_util_.md#const-tostring)

## Functions

### `Const` isBigInt

▸ **isBigInt**(`value`: unknown): *value is bigint*

*Defined in [packages/spectral/src/util.ts:286](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L286)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The value to test |

**Returns:** *value is bigint*

This function returns true if the type of `value` is a bigint, or false otherwise.

___

### `Const` isBool

▸ **isBool**(`value`: unknown): *value is boolean*

*Defined in [packages/spectral/src/util.ts:166](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L166)*

Determine if a variable is a boolean (true or false).

- `util.types.isBool(false)` will return `true`, since `false` is a boolean.
- `util.types.isBool("Hello")` will return `false`, since `"Hello"` is not a boolean.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The variable to test. |

**Returns:** *value is boolean*

True if the value is a boolean, or false otherwise.

___

### `Const` isBufferDataPayload

▸ **isBufferDataPayload**(`value`: unknown): *value is DataPayload*

*Defined in [packages/spectral/src/util.ts:404](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L404)*

This function tests if the object provided is a Prismatic `DataPayload` object.
A `DataPayload` object is an object with a `data` attribute, and optional `contentType` attribute.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The value to test |

**Returns:** *value is DataPayload*

This function returns true if `value` is a DataPayload object, and false otherwise.

___

### `Const` isConnection

▸ **isConnection**(`value`: unknown): *value is ConnectionDefinition*

*Defined in [packages/spectral/src/util.ts:509](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L509)*

This function checks if value is a valid connection.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The variable to test. |

**Returns:** *value is ConnectionDefinition*

This function returns true or false, depending on if `value` is a valid connection.

___

### `Const` isData

▸ **isData**(`value`: unknown): *boolean*

*Defined in [packages/spectral/src/util.ts:464](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L464)*

**`deprecated`** This function tests if the object provided is a Prismatic `DataPayload` object.
A `DataPayload` object is an object with a `data` attribute, and optional `contentType` attribute.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The value to test |

**Returns:** *boolean*

This function returns true if `value` is a DataPayload object, and false otherwise.

___

### `Const` isDate

▸ **isDate**(`value`: unknown): *value is Date*

*Defined in [packages/spectral/src/util.ts:312](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L312)*

This function returns true if `value` is a variable of type `Date`, and false otherwise.

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Date*

___

### `Const` isElement

▸ **isElement**(`value`: unknown): *value is Element*

*Defined in [packages/spectral/src/util.ts:40](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L40)*

This function checks if value is an Element.
`util.types.isElement({key: "foo"})` and `util.types.isElement({key: "foo", label: "Foo"})` return true.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The variable to test. |

**Returns:** *value is Element*

This function returns true or false, depending on if `value` is an Element.

___

### `Const` isInt

▸ **isInt**(`value`: unknown): *value is number*

*Defined in [packages/spectral/src/util.ts:204](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L204)*

This function checks if value is an integer.
`util.types.isInt(5)` returns true, while `util.types.isInt("5")` or `util.types.isInt(5.5)` returns false.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The variable to test. |

**Returns:** *value is number*

This function returns true or false, depending on if `value` is an integer.

___

### `Const` isJSON

▸ **isJSON**(`value`: string): *boolean*

*Defined in [packages/spectral/src/util.ts:549](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L549)*

This function returns true if `value` resembles the shape of JSON, and false otherwise.

- `isJSON(undefined) will return `false`
- `isJSON(null) will return `true`
- `isJSON("") will return `false`
- `isJSON(5) will return `true`
- `isJSON('{"name":"John", "age":30, "car":null}') will return `true`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | The value to test against |

**Returns:** *boolean*

This function returns a boolean, dependant on whether `value` can be parsed to JSON.

___

### `Const` isJSONForm

▸ **isJSONForm**(`value`: unknown): *value is JSONForm*

*Defined in [packages/spectral/src/util.ts:128](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L128)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The value to test |

**Returns:** *value is JSONForm*

This function returns true if the type of `value` is a JSONForm, or false otherwise.

___

### `Const` isNumber

▸ **isNumber**(`value`: unknown): *boolean*

*Defined in [packages/spectral/src/util.ts:254](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L254)*

Determine if a variable is a number, or can easily be coerced into a number.

- `util.types.isNumber(3.21)` will return `true`, since `3.21` is a number.
- `util.types.isBool("5.5")` will return `true`, since the string `"5.5"` can easily be coerced into a number.
- `util.types.isBool("Hello")` will return `false`, since `"Hello"` is not a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The variable to test. |

**Returns:** *boolean*

This function returns true if `value` can easily be coerced into a number, and false otherwise.

___

### `Const` isObjectFieldMap

▸ **isObjectFieldMap**(`value`: unknown): *value is ObjectFieldMap*

*Defined in [packages/spectral/src/util.ts:83](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L83)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The value to test |

**Returns:** *value is ObjectFieldMap*

This function returns true if the type of `value` is an ObjectFieldMap, or false otherwise.

___

### `Const` isObjectSelection

▸ **isObjectSelection**(`value`: unknown): *value is ObjectSelection*

*Defined in [packages/spectral/src/util.ts:47](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L47)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The value to test |

**Returns:** *value is ObjectSelection*

This function returns true if the type of `value` is an ObjectSelection, or false otherwise.

___

### `Const` isObjectWithTruthyKeys

▸ **isObjectWithTruthyKeys**(`value`: unknown, `keys`: string[]): *boolean*

*Defined in [packages/spectral/src/util.ts:23](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |
`keys` | string[] |

**Returns:** *boolean*

___

### `Const` isPicklist

▸ **isPicklist**(`value`: unknown): *boolean*

*Defined in [packages/spectral/src/util.ts:359](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L359)*

This function checks if value is a valid picklist.

- `util.types.isPicklist(["value", new String("value")])` will return `true`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The variable to test. |

**Returns:** *boolean*

This function returns true if `value` is a valid picklist.

___

### `Const` isSchedule

▸ **isSchedule**(`value`: unknown): *boolean*

*Defined in [packages/spectral/src/util.ts:371](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L371)*

This function checks if value is a valid schedule.

- `util.types.isSchedule({value: "00 00 * * 2,3"})` will return `true`.
- `util.types.isSchedule({value: "00 00 * * 2,3", scheduleType: "week", timeZone: "America/Chicago"})` will return `true`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The variable to test. |

**Returns:** *boolean*

This function returns true if `value` is a valid schedule.

___

### `Const` isString

▸ **isString**(`value`: unknown): *value is string*

*Defined in [packages/spectral/src/util.ts:486](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L486)*

This function checks if value is a string.
`util.types.isString("value")` and `util.types.isString(new String("value"))` return true.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The variable to test. |

**Returns:** *value is string*

This function returns true or false, depending on if `value` is a string.

___

### `Const` isUrl

▸ **isUrl**(`value`: string): *boolean*

*Defined in [packages/spectral/src/util.ts:349](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L349)*

This function tests if the string provided is a valid URL, and returns `true` if the URL is valid.
Note: this function only tests that the string is a syntactically correct URL; it does not check
if the URL is web accessible.

- `util.types.isUrl('https://prismatic.io')` will return true.
- `util.types.isUrl('https:://prismatic.io')` will return false due to the extraneous `:` symbol.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | The URL to test. |

**Returns:** *boolean*

This function returns true if `value` is a valid URL, and false otherwise.

___

### `Const` keyValPairListToObject

▸ **keyValPairListToObject**‹**TValue**›(`kvpList`: [KeyValuePair](../interfaces/_types_actioninputparameters_.keyvaluepair.md)‹unknown›[], `valueConverter?`: undefined | function): *Record‹string, TValue›*

*Defined in [packages/spectral/src/util.ts:384](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L384)*

This function helps to transform key-value lists to objects.
This is useful for transforming inputs that are key-value collections into objects.

For example, an input that is a collection might return `[{key: "foo", value: "bar"},{key: "baz", value: 5}]`.
If that array were passed into `util.types.keyValPairListToObject()`, an object would be returned of the form
`{foo: "bar", baz: 5}`.

**Type parameters:**

▪ **TValue**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`kvpList` | [KeyValuePair](../interfaces/_types_actioninputparameters_.keyvaluepair.md)‹unknown›[] | An array of objects with `key` and `value` properties. |
`valueConverter?` | undefined &#124; function | Optional function to call for each `value`.  |

**Returns:** *Record‹string, TValue›*

___

### `Const` lowerCaseHeaders

▸ **lowerCaseHeaders**(`headers`: Record‹string, string›): *Record‹string, string›*

*Defined in [packages/spectral/src/util.ts:578](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L578)*

This function returns a lower cased version of the headers passed to it.

- `lowerCaseHeaders({"Content-Type": "Application/JSON"})` will return `{"content-type": "Application/JSON"}`
- `lowerCaseHeaders({"Cache-Control": "max-age=604800"})` will return `{"cache-control": "max-age=604800"}`
- `lowerCaseHeaders({"Accept-Language": "en-us"})` will return `{"accept-language": "en-us"}`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`headers` | Record‹string, string› | The headers to convert to lower case |

**Returns:** *Record‹string, string›*

This function returns a header object

___

### `Const` toBigInt

▸ **toBigInt**(`value`: unknown): *BigInt*

*Defined in [packages/spectral/src/util.ts:299](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L299)*

This function coerces a provided value into a bigint if possible.
The provided `value` must be a bigint, integer, string representing an integer, or a boolean.

- `util.types.toBigInt(3)` will return `3n`.
- `util.types.toBigInt("-5")` will return `-5n`.
- `util.types.toBigInt(true)` will return `1n` (and `false` will return `0n`).
- `util.types.toBigInt("5.5")` will throw an error, as `5.5` is not an integer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The value to coerce to bigint. |

**Returns:** *BigInt*

This function returns the bigint representation of `value`.

___

### `Const` toBool

▸ **toBool**(`value`: unknown, `defaultValue?`: undefined | false | true): *boolean*

*Defined in [packages/spectral/src/util.ts:181](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L181)*

Convert truthy (true, "t", "true", "y", "yes") values to boolean `true`,
and falsy (false, "f", "false", "n", "no") values to boolean `false`.
Truthy/falsy checks are case-insensitive.

In the event that `value` is undefined or an empty string, a default value can be provided.
For example, `util.types.toBool('', true)` will return `true`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The value to convert to a boolean. |
`defaultValue?` | undefined &#124; false &#124; true | The value to return if `value` is undefined or an empty string. |

**Returns:** *boolean*

The boolean equivalent of the truthy or falsy `value`.

___

### `Const` toBufferDataPayload

▸ **toBufferDataPayload**(`value`: unknown): *[DataPayload](../interfaces/_types_datapayload_.datapayload.md)*

*Defined in [packages/spectral/src/util.ts:420](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L420)*

Many libraries for third-party API that handle binary files expect `Buffer` objects.
This function helps to convert strings, Uint8Arrays, and Arrays to a data structure
that has a Buffer and a string representing `contentType`.

You can access the buffer like this:
 `const { data, contentType } = util.types.toBufferDataPayload(someData);`

If `value` cannot be converted to a Buffer, an error will be thrown.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The string, Buffer, Uint8Array, or Array to convert to a Buffer. |

**Returns:** *[DataPayload](../interfaces/_types_datapayload_.datapayload.md)*

This function returns an object with two keys: `data`, which is a `Buffer`, and `contentType`, which is a string.

___

### `Const` toData

▸ **toData**(`value`: unknown): *[DataPayload](../interfaces/_types_datapayload_.datapayload.md)*

*Defined in [packages/spectral/src/util.ts:478](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L478)*

**`deprecated`** Many libraries for third-party API that handle binary files expect `Buffer` objects.
This function helps to convert strings, Uint8Arrays, and Arrays to a data structure
that has a Buffer and a string representing `contentType`.

You can access the buffer like this:
 `const { data, contentType } = util.types.toData(someData);`

If `value` cannot be converted to a Buffer, an error will be thrown.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The string, Buffer, Uint8Array, or Array to convert to a Buffer. |

**Returns:** *[DataPayload](../interfaces/_types_datapayload_.datapayload.md)*

This function returns an object with two keys: `data`, which is a `Buffer`, and `contentType`, which is a string.

___

### `Const` toDate

▸ **toDate**(`value`: unknown): *Date*

*Defined in [packages/spectral/src/util.ts:324](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L324)*

This function parses an ISO date if possible, or throws an error if the value provided
cannot be coerced into a Date object.

- `util.types.toDate(new Date('1995-12-17T03:24:00'))` will return `Date('1995-12-17T09:24:00.000Z')` since a `Date` object was passed in.
- `util.types.toDate('2021-03-20')` will return `Date('2021-03-20T05:00:00.000Z')` since a valid ISO date was passed in.
- `parseISODate('2021-03-20-05')` will throw an error since `value` was not a valid ISO date.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The value to turn into a date. |

**Returns:** *Date*

The date equivalent of `value`.

___

### `Const` toInt

▸ **toInt**(`value`: unknown, `defaultValue?`: undefined | number): *number*

*Defined in [packages/spectral/src/util.ts:218](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L218)*

This function converts a variable to an integer if possible.
`util.types.toInt(5.5)` will return `5`.  `util.types.toInt("20.3")` will return `20`.

In the event that `value` is undefined or an empty string, a default value can be provided.
For example, `util.types.toInt('', 1)` will return `1`.

This function will throw an exception if `value` cannot be coerced to an integer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The value to convert to an integer. |
`defaultValue?` | undefined &#124; number | The value to return if `value` is undefined, an empty string, or not able to be coerced. |

**Returns:** *number*

This function returns an integer if possible.

___

### `Const` toJSON

▸ **toJSON**(`value`: unknown): *string*

*Defined in [packages/spectral/src/util.ts:564](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L564)*

This function accepts an arbitrary object/value and safely serializes it (handles cyclic references).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | Arbitrary object/value to serialize. |

**Returns:** *string*

JSON serialized text that can be safely logged.

___

### `Const` toJSONForm

▸ **toJSONForm**(`value`: unknown): *[JSONForm](_types_inputs_.md#jsonform)*

*Defined in [packages/spectral/src/util.ts:141](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L141)*

This function coerces a provided value into a JSONForm if possible.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The value to coerce to JSONForm. |

**Returns:** *[JSONForm](_types_inputs_.md#jsonform)*

This function returns the the value as a JSONForm if possible.

___

### `Const` toNumber

▸ **toNumber**(`value`: unknown, `defaultValue?`: undefined | number): *number*

*Defined in [packages/spectral/src/util.ts:270](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L270)*

This function coerces a value (number or string) into a number.
In the event that `value` is undefined or an empty string, a `defaultValue` can be provided, or zero will be returned.
If `value` is not able to be coerced into a number but is defined, an error will be thrown.

- `util.types.toNumber("3.22")` will return the number `3.22`.
- `util.types.toNumber("", 5.5)` will return the default value `5.5`, since `value` was an empty string.
- `util.types.toNumber(null, 5.5)` will return the default value `5.5`, since `value` was `null`.
- `util.types.toNumber(undefined)` will return `0`, since `value` was undefined and no `defaultValue` was given.
- `util.types.toNumber("Hello")` will throw an error, since the string `"Hello"` cannot be coerced into a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The value to turn into a number. |
`defaultValue?` | undefined &#124; number | The value to return if `value` is undefined or an empty string. |

**Returns:** *number*

This function returns the numerical version of `value` if possible, or the `defaultValue` if `value` is undefined or an empty string.

___

### `Const` toObject

▸ **toObject**(`value`: unknown): *object*

*Defined in [packages/spectral/src/util.ts:594](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L594)*

This function parses a JSON string (if JSON) and returns an object, or returns the object.

- `toObject('{"foo":"bar","baz":123}')` will return object `{foo: "bar", baz: 123}`
- `toObject({foo:"bar",baz:123})` will return object `{foo: "bar", baz: 123}`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The JSON string or object to convert |

**Returns:** *object*

This function returns an object, parsing JSON as necessary

___

### `Const` toObjectFieldMap

▸ **toObjectFieldMap**(`value`: unknown): *[ObjectFieldMap](_types_inputs_.md#objectfieldmap)*

*Defined in [packages/spectral/src/util.ts:108](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L108)*

This function coerces a provided value into an ObjectFieldMap if possible.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The value to coerce to ObjectFieldMap. |

**Returns:** *[ObjectFieldMap](_types_inputs_.md#objectfieldmap)*

This function returns the the value as an ObjectFieldMap if possible.

___

### `Const` toObjectSelection

▸ **toObjectSelection**(`value`: unknown): *[ObjectSelection](_types_inputs_.md#objectselection)*

*Defined in [packages/spectral/src/util.ts:63](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L63)*

This function coerces a provided value into an ObjectSelection if possible.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | The value to coerce to ObjectSelection. |

**Returns:** *[ObjectSelection](_types_inputs_.md#objectselection)*

This function returns the the value as an ObjectSelection if possible.

___

### `Const` toString

▸ **toString**(`value`: unknown, `defaultValue`: string): *string*

*Defined in [packages/spectral/src/util.ts:501](https://github.com/prismatic-io/spectral/blob/v7.6.2/packages/spectral/src/util.ts#L501)*

This function converts a `value` to a string.
If `value` is undefined or an empty string, an optional `defaultValue` can be returned.

- `util.types.toString("Hello")` will return `"Hello"`.
- `util.types.toString(5.5)` will return `"5.5"`.
- `util.types.toString("", "Some default")` will return `"Some Default"`.
- `util.types.toString(undefined)` will return `""`.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | unknown | - | The value to convert to a string. |
`defaultValue` | string | "" | A default value to return if `value` is undefined or an empty string. |

**Returns:** *string*

This function returns the stringified version fo `value`, or `defaultValue` in the case that `value` is undefined or an empty string.
