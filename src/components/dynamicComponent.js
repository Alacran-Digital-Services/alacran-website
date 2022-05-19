import { sbEditable } from "@storyblok/storyblok-editable"
import Teaser from "./teaser"
import React from "react"

const Components = {
  teaser: Teaser,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return (
      <div {...sbEditable(blok)}>
        <Component blok={blok} />
      </div>
    )
  }
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  )
}

export default DynamicComponent
