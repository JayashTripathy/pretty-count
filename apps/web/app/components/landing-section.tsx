"use client"
import Image from "next/image"

import { useMemo, useState } from "react"
import formatNumber, {
  ScaleType,
  PrettyCountOption,
  roundingMethods,
} from "@pretty-count"
import {
  Button,
  cn,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@pc/ui"
import { PlusIcon } from "lucide-react"

type FormattedNumber = {
  type: ScaleType
  value: string
  label: string
}

export default function LandingSection() {
  const [number, setNumber] = useState(1000000)
  const [options, setOptions] = useState<PrettyCountOption | null>(null)
  const [openOptions, setOpenOptions] = useState(false)

  const formattingOptions = [
    {
      label: "Prefix",
      value: options?.prefix,
      onchange: (e: HTMLInputElement) =>
        setOptions({ ...options, prefix: e.value }),
    },
    {
      label: "Suffix",
      value: options?.suffix,
      onchange: (e: HTMLInputElement) =>
        setOptions({ ...options, suffix: e.value }),
    },
    {
      label: "Seperator",
      value: options?.seperator,
      onchange: (e: HTMLInputElement) =>
        setOptions({ ...options, seperator: e.value }),
    },
  ]

  const formattednumber = useMemo<FormattedNumber[]>(() => {
    return [
      {
        type: "indian",
        value: formatNumber(number, {
          scale: "indian",
          seperator: " ",
          ...options,
        }),
        label: "Indian",
      },

      {
        type: "short",
        value: formatNumber(number, {
          scale: "short",
          seperator: " ",
          ...options,
        }),
        label: "Short",
      },
      {
        type: "eastAsian",
        value: formatNumber(number, {
          scale: "eastAsian",
          seperator: " ",
          ...options,
        }),
        label: "East Asian",
      },
    ]
  }, [number, options])

  const quickAdd = [1000, 10000, 100000]

  return (
    <>
      <div className=" md:max-w-7xl mx-auto ">
        <div className="my-8 flex flex-col gap-2 pt-4">
          <div className="font-bold text-xl md:text-3xl ">
            Make your count <span className="text-yellow-400 ">Elegant</span>
          </div>
          <div className="text-sm text-foreground/50">
            Tiny javascript library to format numbers in a pretty human readable
            format
          </div>
        </div>
        <div className=" bg-gradient-to-b from-primary/50 to-primary/10  rounded-3xl overflow-hidden p-px">
          <div className="p-10 flex relative justify-center items-center gap-10 rounded-3xl overflow-hidden  flex-col bg-background   ">
            {/* <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">dasda</div > */}
            <div className="flex w-full justify-evenly gap-5">
              {formattednumber.map((n) => (
                <div className="flex flex-1  flex-col gap-3  justify-center  bg-secondary/30  p-7  z-[5] overflow-auto rounded-2xl">
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
              <Label className="text-left ml-2 mb-2">Enter Value</Label>
              <div className="flex flex-col gap-2">
                <Input
                  type="number"
                  className="bg-secondary rounded-2xl p-8"
                  placeholder="Type count here ..."
                  value={number}
                  onChange={(e) => setNumber(Number(e.target.value))}
                />
                <div className=" flex gap-2 jus">
                  {quickAdd.map((n) => (
                    <Button
                      variant={"outline"}
                      className=" rounded-xl gap-3"
                      onClick={() => setNumber((prev) => prev + n)}
                    >
                      <PlusIcon className="w-4 h-4" /> {n}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Button
                  variant={"link"}
                  className="leading-tight  justify-start hover:bg-transparent  p-0 text-secondary-foreground/60 text-xs "
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {!openOptions ? "more" : "hide"} options
                </Button>
                <div>
                  <div
                    className={cn(
                      " grid grid-cols-3 gap-4 transition-all duration-200 ease-in-out  ",
                      openOptions ? "max-h-52" : "max-h-0 overflow-hidden",
                    )}
                  >
                    {formattingOptions.map((opt) => (
                      <div className="flex flex-col gap-3">
                        <Label>{opt.label}</Label>
                        <Input
                          className="bg-secondary rounded-2xl p-8"
                          value={opt.value}
                          placeholder="Type here ..."
                          onChange={(e) => opt.onchange(e.target)}
                        />
                      </div>
                    ))}
                    <div className="flex flex-col gap-3">
                      <Label>Rounding Method</Label>

                      <Select
                        onValueChange={(
                          val: (typeof roundingMethods)[number],
                        ) => setOptions({ ...options, roundingMethod: val })}
                      >
                        <SelectTrigger className="w-full rounded-xl bg-secondary p-4">
                          <SelectValue placeholder="Select a rounding option" />
                        </SelectTrigger>
                        <SelectContent>
                          {roundingMethods.map((method) => (
                            <SelectItem key={method} value={method}>
                              {method}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
