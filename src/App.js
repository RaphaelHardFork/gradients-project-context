import {useReducer, useEffect} from 'react'

// Components
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"
import GradientsApp from "./components/GradientsApp"

import {fetchReducer} from './reducers/fetchReducer'


const App = () => {
  const URL = 'https://gradients-api.herokuapp.com/gradients'
  const [state, dispatch] = useReducer(fetchReducer, {
    gradientsList: [],
    uniqueTags:[],
    loaded:false,
    loading: false,
    error: '',
  })

useEffect(()=>{
  dispatch({type:'FETCH_INIT'})
  fetch(URL).then(response =>{
    if(!response.ok){
      throw new Error(`Something went wrong: ${response.statusText}`)
    }
    return response.json()
  }).then((result) =>{
    dispatch({type:'FETCH_SUCCESS', payload:result})
  }).catch(error =>{
    dispatch({type:'FETCH_FAILURE', payload:error.message})
  })
},[])

  return (
    <div className="min-vh-100 d-flex flex-column">
      <GradientsHeader gradients={state.gradientsList} loaded={state.loaded} />
      <GradientsApp gradients={state.gradientsList} uniqueTags={state.uniqueTags} />
      <Footer />
    </div>
  )
}

export default App