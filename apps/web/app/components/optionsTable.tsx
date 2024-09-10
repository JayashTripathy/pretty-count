const prettyCountOptions = [
    { property: 'scale', type: 'ScaleType', description: 'Optional - Specifies the scale type to use ("short" | "long" | "indian" | "eastAsian").' },
    { property: 'customScale', type: 'ScaleValue[]', description: 'Optional - An array of custom scale values to use instead of the predefined scales.' },
    { property: 'prefix', type: 'string', description: 'Optional - A string to prepend to the formatted number.' },
    { property: 'seperator', type: 'string', description: 'Optional - The separator to use between number groups (e.g., thousands separator).' },
    { property: 'suffix', type: 'string', description: 'Optional - A string to append to the formatted number.' },
    { property: 'roundingMethod', type: 'typeof roundingMethods[number]', description: 'Optional - The method to use for rounding the number.' },
    { property: 'showFullSymbol', type: 'boolean', description: 'Optional - Whether to show the full symbol or use the short version.' },
    { property: 'decimalPlaces', type: 'number', description: 'Optional - The number of decimal places to display in the formatted number.' },
  ];
  
  export default function PrettyCountOptionTable() {
    return (
      <div className="overflow-x-auto md:max-w-6xl w-full mx-auto border-secondary border-2 rounded-lg">
        <table className="min-w-full bg-background border  shadow-sm rounded-lg overflow-hidden">
          <thead className="">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Property</th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary ">
            {prettyCountOptions.map((option, index) => (
              <tr key={option.property} className={index % 2 === 0 ? 'bg-secondary/50' : 'bg-secondary/20'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">{option.property}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">{option.type}</td>
                <td className="px-6 py-4 text-sm ">{option.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }