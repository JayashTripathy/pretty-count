import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className="bg-secondary/30 px-10 py-5  mt-20">
    <div className="text-sm text-secondary-foreground/50">
      Created by{" "}
      <a href="https://github.com/suryakant-kumar" target="_blank">
       Jayash Tripathy
      </a>
    </div>
  </footer>
  )
}

export default Footer