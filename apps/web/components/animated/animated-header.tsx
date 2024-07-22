"use client";
import React from "react";
import { delay, motion } from "framer-motion";
import { cn } from "@pc/ui/lib/utils";
import useScrollPosition from "~/hooks/use-scroll-postion";

type Props = {};

const animation = {
  hide: {
    y: "-8",
    opacity: 0,
  },
  show: {
    y: "0",
    opacity: 1,
  },
};

function HeaderAnimation({ children }: { children: React.ReactNode }) {
  const scrollPosition = useScrollPosition();
  return (
    <motion.header
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.5 }}
      className={cn(
        scrollPosition > 0 ? "backdrop-blur-md bg-background/30" : "bg-transparent",
        "w-full sticky top-0 flex flex-col justify-center items-center z-10 transition ease-in-out mx-auto"
      )}
    >
      {children}
    </motion.header>
  );
}

export default HeaderAnimation;
