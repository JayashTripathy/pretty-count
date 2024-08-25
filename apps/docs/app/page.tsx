"use client";
import Image from "next/image";
import Header from "../components/header";
import { useMemo, useState } from "react";
import formatNumber, { ScaleType } from "@pretty-count";
import { Button, Input, Label } from "@pc/ui";


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

  return (
    <div className="">
      <Header />

      <div className="p-10 flex relative justify-center items-center gap-10 md:max-w-7xl mx-auto custom-border-bg  rounded-3xl overflow-hidden  flex-col">
        {/* <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">dasda</div> */}
        <div className="flex w-full justify-evenly gap-5">
          {formattednumber.map((n) => (
            <div className="flex flex-1  flex-col gap-3  justify-center  bg-secondary/30  p-7 rounded-xl z-50 border-2 overflow-auto ">
              <div className="text-amber-400">{n.label}</div>
              <div className="flex z-50 ">
                <div className="text-5xl font-extrabold ">
                  {n.value.split(" ")[0]}
                </div>
                <div className="text-5xl ">{n.value.split(" ")[1]}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <Label className="text-left ml-2">Enter Value</Label>
          <Input
            type="number"
            className="bg-secondary rounded-2xl p-4"
            placeholder="Type count here ..."
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
        </div>
        <Button>Go to Docs</Button>
      </div>
    </div>
  );
}
