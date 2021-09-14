import React from "react"

export function Tag(props: { tag: string }) {
  return (
    <div className="tag">{props.tag}</div>
  )
}
