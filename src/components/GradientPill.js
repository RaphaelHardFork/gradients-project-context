const GradientPill = ({ colorStart, colorEnd }) => {
  const linearGradient = `linear-gradient(to right, ${colorStart}, ${colorEnd})`
  return (
    <div
      className="card-gradient rounded-pill mx-auto mb-4"
      style={{ backgroundImage: linearGradient }}
    ></div>
  )
}

export default GradientPill