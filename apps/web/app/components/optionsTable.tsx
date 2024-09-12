import SectionTitle from "./ui/section-title"
import ScaleValue from "../../content/types/scaleValue.mdx"
import ScaleType from "../../content/types/scaleType.mdx"

import { Code } from "./code"
import Link from "next/link"
const prettyCountOptions = [
  {
    property: "scale",
    type: <Link href={"#ScaleType"} className="text-yellow-300">ScaleType</Link>,
    description: "Specifies the scale type to use.",
    default: '"indian"',
  },
  {
    property: "customScale",
    type: <Link href={"#ScaleValue"} className="text-yellow-300">ScaleValue[]</Link>,
    description:
      "An array of custom scale values to use instead of the predefined scales.",
    default: "null",
  },
  {
    property: "prefix",
    type: "string",
    description: "A string to prepend to the formatted number.",
    default: '""',
  },
  {
    property: "suffix",
    type: "string",
    description: "A string to append to the formatted number.",
    default: '""',
  },
  {
    property: "roundingMethod",
    type: `"round" | "floor" | "ceil"` ,
    description: "The method to use for rounding the number.",
    default: "null",
  },
  {
    property: "seperator",
    type: "string",
    description:
      "The separator to use between number groups (e.g., thousands separator).",
    default: '" "',
  },
  {
    property: "showFullSymbol",
    type: "boolean",
    description: "Whether to show the full symbol or use the short version.",
    default: "true",
  },
  {
    property: "decimalPlaces",
    type: "number",
    description:
      "The number of decimal places to display in the formatted number.",
    default: "2",
  },
]

export default function PrettyCountOptionTable() {
  return (
    <div className="md:max-w-6xl w-full mx-auto flex flex-col gap-6">
      <SectionTitle title="Options" id="options" />
      <div className="overflow-x-auto md:max-w-6xl w-full mx-auto border-secondary border-2 rounded-lg">
        <table className="min-w-full bg-background border  shadow-sm rounded-lg overflow-hidden">
          <thead className="">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Property
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Default
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary ">
            {prettyCountOptions.map((option, index) => (
              <tr
                key={option.property}
                className={
                  index % 2 === 0 ? "bg-secondary/50" : "bg-secondary/20"
                }
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                  {option.property}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  {option.type}
                </td>
                <td className="px-6 py-4 text-sm ">{option.description}</td>
                <td className="px-6 py-4 text-sm">{option.default}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionTitle title="Types"   />
      <div className="flex flex-col gap-2">
      <SectionTitle title="Scale Value" id="ScaleValue"  className="text-md font-thin" />
      <ScaleValue components={{Code}} />
      <SectionTitle title="Scale Type" id="ScaleType"   className="text-md font-thin" />
      <ScaleType components={{Code}} />

      </div>

    </div>
  )
}
 