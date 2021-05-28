import { useParams, Link } from 'react-router-dom'

export const FullScreen = () => {
  const params = useParams()
  console.log(params)
  const style = {}
  return (
    <div style={style}>
      <button>Précédent</button>
      <Link to="/">
        <button>Retour</button>
      </Link>
      <button>Suivant</button>
      <h1>Gradients</h1>
      <code>Details</code>
    </div>
  )
}
