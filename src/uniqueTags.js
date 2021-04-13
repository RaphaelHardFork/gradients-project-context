import gradients from "./gradients"

function allTags(list) {
  /* retourner la liste des tags uniques */
  let listTotal = []
  for (let element of list) {
    if ("tags" in element) {
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

const uniqueTags = allTags(gradients)
export default uniqueTags