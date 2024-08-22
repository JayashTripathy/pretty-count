"use client";
import SparklesText from "@pc/ui/components/ui/aceternity/sparklesText";
import SiteHeader from "@pc/ui/components/ui/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader/>
    {/* <div className="p-10 w-screen h-screen relative ">
      <div className="h-full flex flex-col   items-center ">
      
        <SparklesText className="text-8xl" text={"Pretty Count."} />
        <div className="text-lg mt-10">
          Simple Javascript Utility to make you count pretty and readable
        </div>

        
    </div>
      </div> */}
      <div className=" bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,189,122,0.2),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.5),rgba(255,255,255,0))] absolute inset-0"></div>
    </>

  );
}
