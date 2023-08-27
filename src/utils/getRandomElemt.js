const getRandomElemt = (arr) => {
  const indexRandon = Math.floor(Math.random() * arr.length)
  return arr[indexRandon]
}

export default getRandomElemt