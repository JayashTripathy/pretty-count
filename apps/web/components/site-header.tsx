"use client";
import React from "react";
import HeaderAnimation from "~/components/animated/animated-header";


type Props = {};

function Header({}: Props) {
  return (
    <HeaderAnimation>
      <nav className="  w-full flex items-center  justify-between relative   p-4  bg-opacity-60 text-secondary-foreground gap-5 lg:gap-0 border-b-2  ">
        <div className="text-lg font-bold">Pretty Count</div>
        <div>
          {/* <NavItem /> */}
        </div>
        <div className="lg:hidden">
          {/* <MobileNav /> */}
        </div>
      </nav>
    </HeaderAnimation>
  );
}

export default Header;
