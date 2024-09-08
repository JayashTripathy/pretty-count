
"use client";
import { cn } from "@pc/ui";
import React, { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLHeadingElement> {
  title: string;
}

function SectionTitle({ title, className, ...props }: Props) {
  return (
    <h4
      className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}
      {...props}
    >
      {title}
    </h4>
  );
}

export default SectionTitle;