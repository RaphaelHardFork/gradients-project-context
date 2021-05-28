import React from 'react'

import GradientsSelect from './GradientsSelect'
import GradientsList from './GradientsList'

const GradientsApp = (props) => {
  return (
    <main className="container">
      <h1 className="text-center my-4">Alyra Gradients</h1>
      <GradientsSelect />
      <GradientsList />
    </main>
  )
}

export default GradientsApp
