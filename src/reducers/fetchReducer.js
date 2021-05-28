export const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_SUCCESS':
      // fonction unique tags
      function allTags(list) {
        let listTotal = []
        for (let element of list) {
          if ('tags' in element) {
            listTotal = listTotal.concat(element.tags)
          }
        }
        const listTagsUnique = []
        listTotal.forEach((el) => {
          if (!listTagsUnique.includes(el)) {
            //listTagsUnique = listTagsUnique.concat([el])
            listTagsUnique.push(el)
          }
        })
        return listTagsUnique
      }
      return {
        ...state,
        loading: false,
        gradientsList: action.payload,
        uniqueTags: allTags(action.payload),
        loaded: true,
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.payload,
      }
    default:
      throw new Error(`Wrong input in fetchreducer: ${action.type}`)
  }
}
