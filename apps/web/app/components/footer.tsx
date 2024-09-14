import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className="bg-secondary/30 px-10 py-2   mt-20  text-center">
    <div className="text-xs text-secondary-foreground/50">
      Created by{" "}
      <a href="https://github.com/JayashTripathy" target="_blank">
       Jayash Tripathy
      </a>
    </div>
  </footer>
  )
}

export default Footer