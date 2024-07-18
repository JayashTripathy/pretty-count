import { ScaleType, ScaleValue } from "./types";

export const scales: Record<ScaleType, ScaleValue[]> = {
  short: [
    { value: 1e24, symbol: "Y" },
    { value: 1e21, symbol: "Z" },
    { value: 1e18, symbol: "E" },
    { value: 1e15, symbol: "P" },
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "B" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "K" },
  ],
  long: [
    { value: 1e24, symbol: "Quadrillion" },
    { value: 1e18, symbol: "Trillion" },
    { value: 1e15, symbol: "Billiard" },
    { value: 1e12, symbol: "Billion" },
    { value: 1e9, symbol: "Milliard" },
    { value: 1e6, symbol: "Million" },
    { value: 1e3, symbol: "Thousand" },
  ],
  indian: [
    { value: 1e17, symbol: "Shankh", shortSymbol: "Sh" },
    { value: 1e15, symbol: "Padma", shortSymbol: "Pa" },
    { value: 1e13, symbol: "Neel", shortSymbol: "Ne" },
    { value: 1e11, symbol: "Kharab", shortSymbol: "Kh" },
    { value: 1e9, symbol: "Arab", shortSymbol: "Ar" },
    { value: 1e7, symbol: "Crore", shortSymbol: "Cr" },
    { value: 1e5, symbol: "Lakh", shortSymbol: "L" },
    { value: 1e3, symbol: "Thousand", shortSymbol: "T" },
  ],
  eastAsian: [
    { value: 1e16, symbol: "京" },
    { value: 1e12, symbol: "兆" },
    { value: 1e8, symbol: "億" },
    { value: 1e4, symbol: "万" },
  ],
  western: [
    { value: 1e24, symbol: "Septillion", shortSymbol: "Sp" },
    { value: 1e21, symbol: "Sextillion", shortSymbol: "Sx" },
    { value: 1e18, symbol: "Quintillion", shortSymbol: "Qn" },
    { value: 1e15, symbol: "Quadrillion", shortSymbol: "Q" },
    { value: 1e12, symbol: "Trillion", shortSymbol: "T" },
    { value: 1e9, symbol: "Billion", shortSymbol: "B" },
    { value: 1e6, symbol: "Million", shortSymbol: "M" },
    { value: 1e3, symbol: "Thousand", shortSymbol: "K" },
  ],
};
