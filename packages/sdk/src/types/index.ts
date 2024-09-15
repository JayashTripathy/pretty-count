import { roundingMethods } from "../constants";
export interface PrettyCountOption {
  scale?: ScaleType;
  customScale?: ScaleValue[];
  prefix?: string;
  separator?: string;
  suffix?: string;
  roundingMethod?: typeof roundingMethods[number];
  showFullSymbol?: boolean;
  decimalPlaces?: number;
}

export type PrettyCountArguments = {
  number: number;
  options?: PrettyCountOption;
};

export type ScaleType = "standard" | "indian" | "eastAsian" 

export type ScaleValue = {
  value: number;
  shortSymbol?: string;
  symbol: string;
};

