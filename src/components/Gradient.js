import GradientPill from './GradientPill'
import GradientTitle from './GradientTitle'
import GradientCode from './GradientCode'
import GradientTags from './GradientTags'

import { Link } from 'react-router-dom'

const Gradient = ({ colorStart, colorEnd, name, tags }) => {
  return (
    <div className="card p-3 mb-4 shadow">
      <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
      <GradientTitle>{name}</GradientTitle>
      <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
      <GradientTags tags={tags} />
      <Link to="/fullscreen/:id">Full Screen</Link>
    </div>
  )
}

export default Gradient
