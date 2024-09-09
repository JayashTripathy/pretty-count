import { scales } from "./constants";
import { PrettyCountArguments, ScaleValue } from "./types";
function getSymbol(scale: ScaleValue, showFullSymbol: boolean): String {

  if (showFullSymbol || !scale.shortSymbol) return scale.symbol;

  return scale.shortSymbol;
}

export function PrettyCount() {


  function formatNumber(
    number: PrettyCountArguments["number"],
    options: PrettyCountArguments["options"] = {}
  ): string {
    const {
      scale = "indian",
      customScale = null,
      prefix = "",
      suffix = "",
      roundingMethod = null,
      seperator = " ",
      showFullSymbol = true,
      decimalPlaces = 2,
    } = options;
  
    const choosenScale = customScale || scales[scale];
    const absNumber = Math.abs(number);
    let formattedNumber = number.toString();
  
    const scaleIndex = choosenScale.findIndex((scale) => absNumber >= scale.value);
    const targetScale = choosenScale[scaleIndex];
    const symbol = targetScale && getSymbol(targetScale, showFullSymbol);
  
    if (targetScale) {
      const scaleValue = targetScale.value;
      const scaledNumber = number / scaleValue
      switch (roundingMethod) {
        case "floor":
          formattedNumber = Math.floor(scaledNumber).toString();
          break;
        case "ceil":
          formattedNumber = Math.ceil(scaledNumber).toString();
          break;
        case "round":
          formattedNumber = Math.round(scaledNumber).toString();
          break;
        default:
          formattedNumber = scaledNumber.toString();  
      }
    }

    let decimaledNumber = parseFloat(Number(formattedNumber).toFixed(decimalPlaces))

    const result=  `${prefix}${decimaledNumber}${seperator}${symbol || ""}${suffix}`;
    
    return result
  }

  return { formatNumber };
}
