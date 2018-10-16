export default function (state = { products: [], query: '' }, action) {
  console.log(action)
  switch (action.type) {
  case 'SEARCH':
    return { products: action.payload, query: action.query }
  case 'ERROR':
    return { products: [], query: action.query }
  default:
    return state
  }
}
