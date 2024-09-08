import React from "react"
import Installation from "../content/installation.mdx"
import  Import from "../content/import.mdx"
import Usage from "../content/usage.mdx"
import { Code } from "./components/code/index"
import LandingSection from "./components/landing-section"
import Header from "./components/header"
import SectionTitle from "./components/ui/section-title"
import Footer from "./components/footer"

type Props = {}

const usageSteps = [
  {
    title: "Install Package",
    description: "Install the package using npm or yarn.",
    code: Installation
  },
  {
    title: "Import utitlity",
    description: "Import the components in your file.",
    code: Import
  },
  {
    title: "Use the utility",
    description: "Use the utility in your file.",
    code: Usage
  }
]

function Page({}: Props) {
  return (
    <div>
      <Header />
      <LandingSection />
      <br />
      <div className="md:max-w-7xl mx-auto  py-4 flex flex-col gap-6">
        <SectionTitle title="Usage" />
        <div className="flex flex-col gap-4">
         {usageSteps.map(step => (

           <div className="bg-card flex flex-col gap-2 ">
            <SectionTitle className="text-md font-thin" title={step.title} />
            <step.code components={{ Code }} />
          </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Page
