import { useContext } from 'react'
import { GradientContext } from '../context/gradientContext'

export const useGradient = () => {
  const context = useContext(GradientContext)
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use FilterContext outside of its provider`
    )
  }
  return context
}
