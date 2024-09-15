import { PrettyCountOption, ScaleType, ScaleValue } from "./types";

export const scales: Record<ScaleType, ScaleValue[]> = {
  standard: [
    { value: 1e24,  shortSymbol: "Y", symbol: "septillion" }, 
    { value: 1e21,  shortSymbol: "Z", symbol: "zetta" }, 
    { value: 1e18,  shortSymbol: "E", symbol: "quintillion" },
    { value: 1e15,  shortSymbol: "P", symbol: "quadrillion" }, 
    { value: 1e12,  shortSymbol: "T", symbol: "tera" }, 
    { value: 1e9, shortSymbol: "B", symbol: "billion" }, 
    { value: 1e6,  shortSymbol: "M", symbol: "million" },
    { value: 1e3,  shortSymbol: "K", symbol: "thousand" }, 
  ],
  indian: [
    { value: 1e17, symbol: "shankh", shortSymbol: "Sh" },
    { value: 1e15, symbol: "padma", shortSymbol: "Pa" },
    { value: 1e13, symbol: "neel", shortSymbol: "Ne" },
    { value: 1e11, symbol: "kharab", shortSymbol: "Kh" },
    { value: 1e9, symbol: "arab", shortSymbol: "Ar" },
    { value: 1e7, symbol: "crore", shortSymbol: "Cr" },
    { value: 1e5, symbol: "lakh", shortSymbol: "L" },
    { value: 1e3, symbol: "thousand", shortSymbol: "T" },
  ],
  eastAsian: [
    { value: 1e16, symbol: "京" },
    { value: 1e12, symbol: "兆" },
    { value: 1e8, symbol: "億" },
    { value: 1e4, symbol: "万" },
  ],
};


export const roundingMethods = ["round", "floor", "ceil"] as const;

export const defaultOptions : Required<Omit<PrettyCountOption, "customScale" | "roundingMethod">> =  {
  scale: "standard",
  prefix: "",
  suffix: "",
  separator: " ",
  showFullSymbol: true,
  decimalPlaces: 2,

}

