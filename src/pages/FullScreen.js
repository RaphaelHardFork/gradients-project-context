import { useParams, Link } from 'react-router-dom'
import { useGradient } from '../hooks/useGradient'

export const FullScreen = () => {
  const { state } = useGradient()
  const params = useParams()
  let { id } = params

  const style = `linear-gradient(to right, ${
    state.gradientsList[id - 1].start
  }, ${state.gradientsList[id - 1].end})`
  const codeText = `background-image: linear-gradient(to right, ${
    state.gradientsList[id - 1].start
  }, ${state.gradientsList[id - 1].end})`

  return (
    <div style={{ backgroundImage: style, minHeight: '95vh' }} className="">
      <div
        style={{ marginTop: '10rem', marginBottom: '10rem' }}
        className="d-flex flex-column text-center"
      >
        <div className="d-flex mx-auto my-5">
          {id === '1' ? (
            <Link to={`/fullscreen/${state.gradientsList.length}`}>
              <button className="btn btn-backdrop me-4">Précédent</button>
            </Link>
          ) : (
            <Link to={`/fullscreen/${Number(id) - 1}`}>
              <button className="btn btn-backdrop me-4">Précédent</button>
            </Link>
          )}

          <Link to="/">
            <button className="btn btn-backdrop me-4">Retour</button>
          </Link>
          {id === state.gradientsList.length.toString() ? (
            <Link to={`/fullscreen/${1}`}>
              <button className="btn btn-backdrop me-4">Suivant</button>
            </Link>
          ) : (
            <Link to={`/fullscreen/${Number(id) + 1}`}>
              <button className="btn btn-backdrop me-4">Suivant</button>
            </Link>
          )}
        </div>
        <h1 className="display-1 text-white my-3">
          {state.gradientsList[id - 1].name}
        </h1>
        <code className="bg-white my-3 mx-auto p-2 rounded">{codeText}</code>
      </div>
    </div>
  )
}
