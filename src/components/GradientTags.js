const GradientTags = ({ tags, filter, setFilter }) => {

  const handleTagsButton = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      {tags.map((elem) => {
        return <button key={elem} disabled={elem === filter} onClick={handleTagsButton} value={elem} className="btn btn-sm my-2 me-2 bg-dark text-white" type="button">{elem}</button>
      })}
    </div>
  )
}

export default GradientTags