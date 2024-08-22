import { ScaleType, ScaleValue } from "./types";

export const scales: Record<ScaleType, ScaleValue[]> = {
  short: [
    { value: 1e24, symbol: "Y", shortSymbol: "Y" }, // Yotta
    { value: 1e21, symbol: "Z", shortSymbol: "Z" }, // Zetta
    { value: 1e18, symbol: "E", shortSymbol: "E" }, // Exa
    { value: 1e15, symbol: "P", shortSymbol: "P" }, // Peta
    { value: 1e12, symbol: "T", shortSymbol: "T" }, // Tera
    { value: 1e9, symbol: "B", shortSymbol: "B" }, // Billion (Giga)
    { value: 1e6, symbol: "M", shortSymbol: "M" }, // Million (Mega)
    { value: 1e3, symbol: "K", shortSymbol: "K" }, // Thousand (Kilo)
  ],
  long: [
    { value: 1e24, symbol: "Septillion", shortSymbol: "Sp" }, // Septillion
    { value: 1e18, symbol: "Quintillion", shortSymbol: "Qn" }, // Quintillion
    { value: 1e15, symbol: "Quadrillion", shortSymbol: "Q" }, // Quadrillion
    { value: 1e12, symbol: "Billion", shortSymbol: "B" }, // Billion
    { value: 1e9, symbol: "Milliard", shortSymbol: "Mrd" }, // Milliard
    { value: 1e6, symbol: "Million", shortSymbol: "M" }, // Million
    { value: 1e3, symbol: "Thousand", shortSymbol: "K" }, // Thousand
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
};
