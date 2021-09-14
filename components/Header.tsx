import React from "react"
import { globals } from "../globals"

export function Header() {
  return <div className="header">
    <a href="/">{globals.siteName}</a>
    <div className="flex-spacer"/>
    <a href="https://github.com/colinhacks/devii">GitHub</a>
    <a href="/blog/the-ultimate-tech-stack">Motivation</a>
  </div>
}

