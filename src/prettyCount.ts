import { scales } from "./constants";
import { PrettyCountArguments, PrettyCountOption, ScaleValue } from "./types";

/**
 *
 *
 * @description
 *
 * @param {Number} num
 * @param {Object} options
 */
export function PrettyCount() {
  function getSymbol(scale: ScaleValue, showFullSymbol: boolean): String {
    if (showFullSymbol || !scale.shortSymbol) return scale.symbol;

    return scale.shortSymbol;
  }

  function formatNumber(props: PrettyCountArguments): string {
    const { number, options = {} } = props;
    const {
      scale = "indian",
      customScale = null,
      locale = "en",
      prefix = "",
      suffix = "",
      roundingMethod = "round",
      digits = 4,
      showFullSymbol = false,
    } = options;
    const choosenScale = customScale || scales[scale];
    const absNumber = Math.abs(number);
    for (let scaleIndex = 0; scaleIndex < choosenScale.length; scaleIndex++) {
      if (absNumber >= choosenScale[scaleIndex].value) {
        let formattedNumber = number / choosenScale[scaleIndex].value;

        if (options.roundingMethod === "floor")
          formattedNumber = Math.floor(number / choosenScale[scaleIndex].value);
        if (options.roundingMethod === "ceil")
          formattedNumber = Math.ceil(number / choosenScale[scaleIndex].value);

        return (
          (options.prefix || "") +
          formattedNumber +
          (options.seperator || "") +
          (getSymbol(choosenScale[scaleIndex], showFullSymbol)) +
          (options.suffix || "")
        );
      }
    }

    return number.toString();
  }

  return { formatNumber };
}

console.log(
  PrettyCount().formatNumber({ number: 10000000, options: { scale: "western" , prefix:"$" } })
);
