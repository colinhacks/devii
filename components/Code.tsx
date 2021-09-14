import React from "react"
import { PrismAsyncLight, PrismLight } from "react-syntax-highlighter"
import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/darcula"

const SyntaxHighlighter =
  typeof window === "undefined" ? PrismLight : PrismAsyncLight

export default function Code({ language, value }: { language: string, value?: string }) {
  return (
    <SyntaxHighlighter
      language={(language === "ts" ? "typescript" : language) || "typescript"}
      style={darcula}
    >
      {value}
    </SyntaxHighlighter>
  )
};
