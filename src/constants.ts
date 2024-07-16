import { ScaleType, ScaleValue } from "./types";

const scales: Omit<Record<ScaleType, ScaleValue[]>, "custom"> = {
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
    { value: 1e24, symbol: "Shankh" },
    { value: 1e21, symbol: "Padma" },
    { value: 1e18, symbol: "Neel" },
    { value: 1e15, symbol: "Kharab" },
    { value: 1e12, symbol: "Arab" },
    { value: 1e9, symbol: "Crore" },
    { value: 1e6, symbol: "Lakh" },
    { value: 1e3, symbol: "Thousand" },
  ],
  eastAsian: [
    { value: 1e16, symbol: "京" },
    { value: 1e12, symbol: "兆" },
    { value: 1e8, symbol: "億" },
    { value: 1e4, symbol: "万" },
  ],
  western: [
    { value: 1e24, symbol: "Septillion" },
    { value: 1e21, symbol: "Sextillion" },
    { value: 1e18, symbol: "Quintillion" },
    { value: 1e15, symbol: "Quadrillion" },
    { value: 1e12, symbol: "Trillion" },
    { value: 1e9, symbol: "Billion" },
    { value: 1e6, symbol: "Million" },
    { value: 1e3, symbol: "Thousand" },
  ],

};

