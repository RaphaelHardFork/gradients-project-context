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
