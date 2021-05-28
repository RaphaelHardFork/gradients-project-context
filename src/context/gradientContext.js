import { createContext, useReducer, useEffect } from 'react'
import { fetchReducer } from '../reducers/fetchReducer'

export const GradientContext = createContext()

export const GradientContextProvider = ({ children }) => {
  const URL = 'https://gradients-api.herokuapp.com/gradients'
  const [state, dispatch] = useReducer(fetchReducer, {
    gradientsList: [],
    uniqueTags: [],
    loaded: false,
    loading: false,
    error: '',
    filter: 'Tous',
  })

  useEffect(() => {
    dispatch({ type: 'FETCH_INIT' })
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.statusText}`)
        }
        return response.json()
      })
      .then((result) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: result })
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message })
      })
  }, [])

  return (
    <GradientContext.Provider value={{ state, dispatch }}>
      {state.error ? (
        <h1 className="alert alert-danger">{state.error}</h1>
      ) : !state.loaded ? (
        <h1>Loading...</h1>
      ) : (
        children
      )}
    </GradientContext.Provider>
  )
}
