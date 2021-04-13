import uniqueTags from "../uniqueTags"

const GradientsSelect = (props) => {
  const { filter, setFilter } = props

  const handleSelectChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select value={filter} onChange={handleSelectChange} className="form-select" id="select">
        <option key="Tous" value="Tous">
          Tous
        </option>
        {uniqueTags.map((el) => { return <option key={el} value={el}>{el}</option> })}
      </select>
    </div >
  )
}

export default GradientsSelect