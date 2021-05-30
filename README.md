# Projet Gradients Context

**Equipe :** Solène Christophe & Raphaël  
**Déployé sur Netlify :** pas encore

## [Repo de départ](https://github.com/RaphaelHardFork/gradients-project-start)

Repo du rendu du projet Alyra Gradients

## Mise en place du fetching des gradients

URL : https://gradients-api.herokuapp.com  
Cette dernière est _hardcodée_ dans `App.js`

Utilisation d'un **useReducer**:

```js
const [state, dispatch] = useReducer(fetchReducer, {
  gradientsList: [],
  uniqueTags: [],
  loaded: false,
  loading: false,
  error: "",
});
```

Mise en place du **useEffect** :

```js
useEffect(() => {
  dispatch({ type: "FETCH_INIT" });
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Something went wrong: ${response.statusText}`);
      }
      return response.json();
    })
    .then((result) => {
      dispatch({ type: "FETCH_SUCCESS", payload: result });
    })
    .catch((error) => {
      dispatch({ type: "FETCH_FAILURE", payload: error.message });
    });
}, []);
```

Et enfin de la fonction **fetchReducer** :

```js
export const fetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      // fonction unique tags
      function allTags(list) {
        let listTotal = [];
        for (let element of list) {
          if ("tags" in element) {
            listTotal = listTotal.concat(element.tags);
          }
        }
        const listTagsUnique = [];
        listTotal.forEach((el) => {
          if (!listTagsUnique.includes(el)) {
            //listTagsUnique = listTagsUnique.concat([el])
            listTagsUnique.push(el);
          }
        });
        return listTagsUnique;
      }
      return {
        ...state,
        loading: false,
        gradientsList: action.payload,
        uniqueTags: allTags(action.payload),
        loaded: true,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      throw new Error(`Wrong input in fetchreducer: ${action.type}`);
  }
};
```

Pour le moment les données circulent dans l'App via les _props_.  
Les fichiers `gradients.js` et `uniqueTags.js` ont été supprimés.

Pour éviter une erreur lors du chargement de la page une fond noir est afficher par defaut dans le `<GradientHeader />`, la variable `loaded` indique si le chargement des données est fini :

```js
const backgroundImage = loaded
  ? `linear-gradient(to right, ${gradients[gradientIndex].start}, ${gradients[gradientIndex].end})`
  : "";
```

A priori le fetching de données est réalisé qu'une seul fois dans l'App.

## Utilisation du context pour appeler les données

Création d'un dossier `context` puis d'un fichier `GradientContext.js` :

```js
import { createContext, useReducer, useEffect } from "react";

export const GradientContext = createContext();

export const GradientContextProvider = ({ children }) => {
  return (
    <GradientContext.Provider value={{ state, dispatch }}>
      {!state.loaded ? <p>Loading...</p> : children}
    </GradientContext.Provider>
  );
};
```

On commencer par créer le context et le Component Provider, puis on ajoute le useReducers à l'intérieur du componentProvider :

```js
import { createContext, useReducer, useEffect } from "react";
import { fetchReducer } from "../reducers/fetchReducer";

export const GradientContext = createContext();

export const GradientContextProvider = ({ children }) => {
  const URL = "https://gradients-api.herokuapp.com/gradients";
  const [state, dispatch] = useReducer(fetchReducer, {
    gradientsList: [],
    uniqueTags: [],
    loaded: false,
    loading: false,
    error: "",
    filterRed: "Tous",
  });

  useEffect(() => {
    dispatch({ type: "FETCH_INIT" });
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.statusText}`);
        }
        return response.json();
      })
      .then((result) => {
        dispatch({ type: "FETCH_SUCCESS", payload: result });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILURE", payload: error.message });
      });
  }, []);

  return (
    <GradientContext.Provider value={{ state, dispatch }}>
      {!state.loaded ? <p>Loading...</p> : children}
    </GradientContext.Provider>
  );
};
```

Ensuite dans `App.js` on met en place le ComponentProvider :

```js
const App = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <GradientContextProvider>
        <GradientsHeader
          gradients={state.gradientsList}
          loaded={state.loaded}
        />
        <GradientsApp
          gradients={state.gradientsList}
          uniqueTags={state.uniqueTags}
        />
        <Footer />
      </GradientContextProvider>
    </div>
  );
};
```

Puis on appelle le context via `useContext` :

```js
import { useContext } from 'react'
import { GradientContext } from '../context/gradientContext'
{...}
  const { state, dispatch } = useContext(GradientContext)
```

Nous avons modifié notre useReducer en intégrant la variable filter à l'intérieur et associés un type d'action au reducers :

```js
 case 'CHANGE_FILTER':
      return {
        ...state,
        filterRed: action.payload,
      }
```

## Mise dans un hook personnalisé

Pour simplifier et organiser le code, on créer un dossier `hooks` dans lequel on créer un fichier `useGradient.js`  
Puis on import le `useContext` & `GradientContext` :

```js
import { useContext } from "react";
import { GradientContext } from "../context/gradientContext";

export const useGradient = () => {
  const context = useContext(GradientContext);
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use FilterContext outside of its provider`
    );
  }
  return context;
};
```

Puis on peut appeller le hook dans les fichiers où nous en avons besoin :

```js
import { useGradient } from "../hooks/useGradient";
{...}
const { state, dispatch } = useGradient();
```

## Gestion des erreurs et temps de chargement

Nos données ont besoin d'être chargées qu'une seul fois, on peut donc remplacer la variable `loading` par `loaded`.  
Puis toute la gestion de l'affichage du chargement et de l'erreur se fait dans le ContextComponentProvider :

```js
// /context/gradientContext.js

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
);
```

## Mise en place des Routes

Installer la dépendance :  
`yarn add react-router-dom`

`index.js` :

```js
import { BrowserRouter as Router } from 'react-router-dom'
{...}
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
```

Mise en place des routes dans `App.js`:

```js
const App = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <GradientContextProvider>
        <Switch>
          <Route exact path="/">
            <GradientsHeader />
            <GradientsApp />
          </Route>
          <Route exact path="/FullScreen/:id">
            <FullScreen />
          </Route>
        </Switch>
        <Footer />
      </GradientContextProvider>
    </div>
  );
};
```

Création du dossier `pages` contenant les différents Component correspondant aux pages.
On créer le style de la page correspondant à la fonction "plein écran"

Pour accèder à la page on met en place `<Link>` dans `<Gradient>` :

```js
<Link to=`/fullscreen/${id}`>Full Screen</Link>
```

Création de la page `FullScreen.js`, on import dans le components :

```js
const { state } = useGradient();
const params = useParams();
let { id } = params;
```

Puis chaque bouton sur l'écran est englober dans une balise `<Link>` :

```js
<Link to={`/fullscreen/${Number(id) + 1}`}>
  <button className="btn btn-backdrop me-4">Suivant</button>
</Link>
```
