export default function (state = { result: [], query: '' }, action) {
  console.log(action)
  switch (action.type) {
    case 'SEARCH':
      return { result: JSON.parse(action.payload), query: action.text }
    case 'ERROR':
      return { result: [], query: action.text }
    default:
      return state
  }
}
