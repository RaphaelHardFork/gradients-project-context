import { useGradient } from '../hooks/useGradient'

const GradientsSelect = () => {
  const { state, dispatch } = useGradient()

  const handleSelectChange = (event) => {
    dispatch({ type: 'CHANGE_FILTER', payload: event.target.value })
    //setFilter(event.target.value)
  }

  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select
        value={state.filter}
        onChange={handleSelectChange}
        className="form-select"
        id="select"
      >
        <option key="Tous" value="Tous">
          Tous
        </option>
        {state.uniqueTags.map((el) => {
          return (
            <option key={el} value={el}>
              {el}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default GradientsSelect
