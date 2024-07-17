import { scales } from "./constants";
import { PrettyCountArguments } from "./types";

/**
 *
 *
 * @description
 *
 * @param {Number} num
 * @param {Object} options
 */
export function PrettyCount() {
  function formatNumber(props: PrettyCountArguments): string {
    const { number, options={} } = props;
    const {
      scale = "indian",
      customScale = null,
      locale = "en",
      prefix = "",
      suffix = "",
      roundingMethod = "round", 
      digits = 4,
    } = options;
    const choosenScale = customScale || scales[scale];
    const absNumber = Math.abs(number);
    for (let scaleIndex = 0; scaleIndex < choosenScale.length; scaleIndex++) {
      if (absNumber >= choosenScale[scaleIndex].value) {
        let formattedNumber = (number / choosenScale[scaleIndex].value)
    console.log(number, choosenScale[scaleIndex], 'dasdas')
        
        if(options.roundingMethod === "floor") formattedNumber = Math.floor(number/ choosenScale[scaleIndex].value)
        if(options.roundingMethod === "ceil") formattedNumber = Math.ceil(number/ choosenScale[scaleIndex].value)

        return (options.prefix || "") + formattedNumber + choosenScale[scaleIndex].symbol + (options.suffix || "");
      }
    }

    return "Your pretified number is: " + props.number;
  }
 
  return { formatNumber };
}

console.log(PrettyCount().formatNumber({ number: 1000 , options: { scale: "indian" } }));
