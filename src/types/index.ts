export interface PrettyCountOption {
  digits?: number;
  scale?: ScaleType;
  customScale?: ScaleValue[];
  locale?: string;
  prefix?: string;
  seperator?: string;
  suffix?: string;
  roundingMethod?: "round" | "floor" | "ceil";
  showFullSymbol?: boolean;
}

export type PrettyCountArguments = {
  number: number;
  options?: PrettyCountOption;
}

export type ScaleType =
  | "short"
  | "long"
  | "indian"
  | "eastAsian"
  | "western"

export type ScaleValue = {
  value: number;
  shortSymbol?: string;
  symbol: string;
}

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
