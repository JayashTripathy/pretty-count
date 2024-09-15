import { scales } from "./constants";
import { PrettyCountArguments, ScaleValue } from "./types";
import {defaultOptions} from "./constants"
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
      scale,
      customScale,
      prefix,
      suffix ,
      roundingMethod,
      separator,
      showFullSymbol,
      decimalPlaces,
    } = {...defaultOptions ,...options};
  
    const choosenScale = customScale || scales[scale];
    const absNumber = Math.abs(number);
    let formattedNumber = number.toString();

    
    
    const scaleIndex = choosenScale.findIndex((scale) => absNumber >= scale.value);
    const targetScale = choosenScale[scaleIndex];
    const symbol = targetScale && getSymbol(targetScale, showFullSymbol);
    
    // formattedNumber = parseFloat(Number(formattedNumber).toFixed(decimalPlaces)).toString()
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
          formattedNumber = scaledNumber.toFixed(decimalPlaces);
    }
    }

    let decimaledNumber = parseFloat(Number(formattedNumber).toFixed(decimalPlaces))
    const visibleSeperator = separator.replace(/ /g, '\u00A0');  // Unicode non-breaking space
    const visiblePrefix = prefix.replace(/ /g, '\u00A0');      // Unicode non-breaking space
    const visibleSuffix = suffix.replace(/ /g, '\u00A0');      // Unicode non-breaking space
    const result=  `${visiblePrefix}${decimaledNumber}${visibleSeperator}${symbol || ""}${visibleSuffix}`;
    
    return result
  }

  return { formatNumber };
}
