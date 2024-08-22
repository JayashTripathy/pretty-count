import { scales } from "./constants";
import { PrettyCountArguments, ScaleValue } from "./types";


export function PrettyCount() {
  function getSymbol(scale: ScaleValue, showFullSymbol: boolean): String {
    if (showFullSymbol || !scale.shortSymbol) return scale.symbol;

    return scale.shortSymbol;
  }

  function formatNumber(number: PrettyCountArguments["number"], options: PrettyCountArguments['options'] = {}): string {
    const {
      scale = "indian",
      customScale = null,
      prefix = "",
      suffix = "",
      roundingMethod = "round",
      seperator = "",
      showFullSymbol = false,
    } = options;
    const choosenScale = customScale || scales[scale];
    const absNumber = Math.abs(number);
    for (let scaleIndex = 0; scaleIndex < choosenScale.length; scaleIndex++) {
      if (absNumber >= choosenScale[scaleIndex].value) {
        let formattedNumber = number / choosenScale[scaleIndex].value;

        if (roundingMethod === "floor")
          formattedNumber = Math.floor(number / choosenScale[scaleIndex].value);
        if (roundingMethod === "ceil")
          formattedNumber = Math.ceil(number / choosenScale[scaleIndex].value);

        return (
          (prefix || "") +
          formattedNumber +
          (seperator || "") +
          (getSymbol(choosenScale[scaleIndex], showFullSymbol)) +
          (suffix || "")
        );
      }
    }

    return number.toString();
  }

  return {formatNumber};
}

