import { roundingMethods } from "../constants";
export interface PrettyCountOption {
  scale?: ScaleType;
  customScale?: ScaleValue[];
  prefix?: string;
  seperator?: string;
  suffix?: string;
  roundingMethod?: typeof roundingMethods[number];
  showFullSymbol?: boolean;
  decimalPlaces?: number;
}

export type PrettyCountArguments = {
  number: number;
  options?: PrettyCountOption;
};

export type ScaleType = "short" | "long" | "indian" | "eastAsian" 

export type ScaleValue = {
  value: number;
  shortSymbol?: string;
  symbol: string;
};

// scale: ScaleType;
// precision: number;
// shortScale: ScaleValue[];
// longScale: ScaleValue[];
// indianScale: ScaleValue[];
// eastAsianScale: ScaleValue[];
// westernScale: ScaleValue[];
// shortScalePrecision: number;
// longScalePrecision: number;
// indianScalePrecision: number;
// eastAsianScalePrecision: number;
// westernScalePrecision: number;
// fallbackScale: ScaleValue[];
// fallbackScalePrecision: number;
// fallbackScaleType: ScaleType
