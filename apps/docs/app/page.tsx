"use client";
import Image from "next/image";
import Header from "../components/header";
import { useMemo, useState } from "react";
import formatNumber, { ScaleType } from "@pretty-count";

type FormattedNumber = {
  type: ScaleType;
  value: string;
  label: string;
};

export default function Home() {
  const [number, setNumber] = useState(1000000);

  const formattednumber = useMemo<FormattedNumber[]>(() => {
    return [
      {
        type: "indian",
        value: formatNumber(number, { scale: "indian", seperator: " " }),
        label: "Indian",
      },

      {
        type: "short",
        value: formatNumber(number, { scale: "short", seperator: " " }),
        label: "Short",
      },
      {
        type: "eastAsian",
        value: formatNumber(number, { scale: "eastAsian", seperator: " " }),
        label: "East Asian",
      },
    ];
  }, [number]);

  console.log(formattednumber, "djiasojo");
  return (
    <div className="">
      <Header />

      <div className="p-10 flex  justify-center items-center gap-10 md:max-w-7xl mx-auto">
        {formattednumber.map((n) => (
          <div className="flex w-1/5 flex-col gap-6  justify-center items-center bg-muted  p-7 rounded-3xl custom-border-bg ">
            <div className="flex">
              <div className="text-5xl font-extrabold mr-2">
                {n.value.split(" ")[0]}
              </div>
              <div className="text-5xl text-emerald-500 ">
                {n.value.split(" ")[1]}
              </div>
            </div>
            <div className="text-2xl">{n.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
