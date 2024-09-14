[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Pretty Count

> Javascript library to format numbers in a pretty human readable format

## Installation

Install Package

```shell
npm i pretty-count
```

Import utitlity

```js
import pc from 'pretty-count';
``` 

Use the utility

```js
pc(1000000) // 1million
pc(1000000000, {
    scale: "indian",
    showFullSymbol: false
}) //1Ar
```

## Parameters

| Property       | Type                                                                 | Description                                                                                   | Default |
|----------------|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|---------|
| `scale`       | [ScaleType](#scaletype)                                              | Specifies the scale type to use.                                                              | `"indian"` |
| `customScale` | [ScaleValue[]](#scalevalue)                                          | An array of custom scale values to use instead of the predefined scales.                      | `null`  |
| `prefix`      | `string`                                                             | A string to prepend to the formatted number.                                                  | `""`    |
| `suffix`      | `string`                                                             | A string to append to the formatted number.                                                   | `""`    |
| `roundingMethod` | `"round" | "floor" | "ceil"`                                     | The method to use for rounding the number.                                                    | `null`  |
| `seperator`   | `string`                                                             | The separator to use between number groups (e.g., thousands separator).                       | `" "`   |
| `showFullSymbol` | `boolean`                                                          | Whether to show the full symbol or use the short version.                                     | `true`  |
| `decimalPlaces` | `number`                                                           | The number of decimal places to display in the formatted number.                              | `2`     |
## Types

### ScaleValue
```jsx
export type ScaleValue = {
  value: number;
  shortSymbol?: string;
  symbol: string;
};
```


### ScaleType
```jsx
export type ScaleType = "standard" | "indian" | "eastAsian" 
``` 

