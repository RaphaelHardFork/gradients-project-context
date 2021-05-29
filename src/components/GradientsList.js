import { useGradient } from '../hooks/useGradient'
import Gradient from './Gradient'

const GradientsList = () => {
  const { state } = useGradient()

  const filteredList = state.gradientsList.filter((elem) => {
    if (state.filter === 'Tous') {
      return true
    } else {
      return elem.tags.includes(state.filter)
    }
  })

  return (
    <ul className="row list-unstyled">
      {filteredList.map((elem) => {
        return (
          <li key={elem.name} className="col-lg-3 col-md-4 col-sm-6">
            <Gradient
              colorStart={elem.start}
              colorEnd={elem.end}
              name={elem.name}
              tags={elem.tags}
              id={elem.id}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default GradientsList
