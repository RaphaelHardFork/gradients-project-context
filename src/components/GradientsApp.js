import React from "react"

import GradientsSelect from "./GradientsSelect"
import GradientsList from "./GradientsList"
//import GradientsTags from "./GradientTags"

const GradientsApp = (props) => {
  const { gradients } = props
  const [filter, setFilter] = React.useState("Tous")


  return (
    <main className="container">
      <h1 className="text-center my-4">
        Alyra Gradients
      </h1>
      <GradientsSelect setFilter={setFilter} filter={filter} />
      <GradientsList setFilter={setFilter} filter={filter} gradients={gradients} />
    </main>
  )
}

export default GradientsApp