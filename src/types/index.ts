interface PrettyCountOptions {
  digits: number;
  scale: ScaleType;
  customScale?: ScaleValue[];
  locale: string;
  prefix: string;
  suffix: string;
  roundingMethod: "round" | "floor" | "ceil";
}

export interface PrettyCountArguments {
  number: number;
  options: PrettyCountOptions;
}

export type ScaleType =
  | "short"
  | "long"
  | "indian"
  | "eastAsian"
  | "western"
  | "custom";

export interface ScaleValue {
  value: number;
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
