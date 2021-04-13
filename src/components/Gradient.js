import GradientPill from "./GradientPill"
import GradientTitle from "./GradientTitle"
import GradientCode from "./GradientCode"
import GradientTags from "./GradientTags"

const Gradient = ({ colorStart, colorEnd, name, tags, filter, setFilter }) => {
  return (
    <div className="card p-3 mb-4 shadow">
      <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
      <GradientTitle>{name}</GradientTitle>
      <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
      <GradientTags setFilter={setFilter} filter={filter} tags={tags} />
    </div>
  )
}

export default Gradient
