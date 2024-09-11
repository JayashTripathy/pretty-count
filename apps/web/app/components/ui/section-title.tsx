
"use client";
import { cn } from "@pc/ui";
import Link from "next/link";

import React, { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLHeadingElement> {
  title: string;
}

function SectionTitle({ title, className, ...props }: Props) {
  const id = props.id

  console.log(id, "daisjd")
  return (
    <h4
      className={cn("scroll-m-20 text-xl font-semibold tracking-tight relative group", className)}
      {...props}
    >
      {id && <Link className="absolute -left-4 opacity-0 transition-all ease-in-out group-hover:opacity-50" href={`#${id}`}>#</Link>}
      {title}
    </h4>
  );
}

export default SectionTitle;