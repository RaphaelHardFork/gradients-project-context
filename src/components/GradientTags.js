import { useGradient } from '../hooks/useGradient'

const GradientTags = ({ tags }) => {
  const { state, dispatch } = useGradient()

  const handleTagsButton = (event) => {
    dispatch({ type: 'CHANGE_FILTER', payload: event.target.value })
  }

  return (
    <div>
      {tags.map((elem) => {
        return (
          <button
            key={elem}
            disabled={elem === state.filter}
            onClick={handleTagsButton}
            value={elem}
            className="btn btn-sm my-2 me-2 bg-dark text-white"
            type="button"
          >
            {elem}
          </button>
        )
      })}
    </div>
  )
}

export default GradientTags
