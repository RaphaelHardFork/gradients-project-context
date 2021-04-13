import Gradient from "./Gradient"

const GradientsList = (props) => {
  const { gradients, filter, setFilter } = props

  const filteredList = gradients.filter((elem) => {
    if (filter === 'Tous') {
      return true
    } else {
      return elem.tags.includes(filter)
    }
  })

  return (
    <ul className="row list-unstyled">
      {filteredList.map((elem) => {
        return <li key={elem.name} className="col-lg-3 col-md-4 col-sm-6"><Gradient setFilter={setFilter} filter={filter} colorStart={elem.start} colorEnd={elem.end} name={elem.name} tags={elem.tags} /></li>
      })}
    </ul>
  )
}

export default GradientsList

/*
{gradients.map((elem)=>{
  if (filter==='Tous'){
    return <li key={elem.name} className="col-lg-3 col-md-4 col-sm-6"><Gradient setFilter={setFilter} filter={filter} colorStart={elem.start} colorEnd={elem.end} name={elem.name} tags={elem.tags} /></li>
  }else if (elem.tags.includes(filter)){
    return <li key={elem.name} className="col-lg-3 col-md-4 col-sm-6"><Gradient setFilter={setFilter} filter={filter} colorStart={elem.start} colorEnd={elem.end} name={elem.name} tags={elem.tags} /></li>
  }
})}
*/