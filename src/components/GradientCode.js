const GradientCode = ({ colorStart, colorEnd }) => {
  const linearGradient = `linear-gradient(to right, ${colorStart}, ${colorEnd})`
  return <code>background-image: {linearGradient};</code>
}

export default GradientCode
