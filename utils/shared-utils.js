/**
 * Zwraca listę z dodanym elementem
 * @param {Object} element - element do dodania
 * @param {Array} array - obecna lista
 * @returns {Array} - nowa lista z dodanym elementem
 */
 export const appendElement = (element, array) => {
    const newArray = array.concat(element)
    return newArray
  }

  /**
  * Usuwa z listy z element o podanym indeksie
  * @param {number} index - indeks elementu do usunięcia
  * @param {Array} array - lista z której chcemy usunąć element
  * @returns {Array} - nowa lista po usunięciu elementu
  */
 export const removeElement = (index, array) => {
    const newArray = array.slice()
    newArray.splice(index, 1)
    return newArray
  }
