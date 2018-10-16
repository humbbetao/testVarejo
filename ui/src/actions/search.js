import axios from 'axios'
import _ from 'lodash'

export const search = (query = '') => dispatch => {
  const baseUrl = 'http://localhost:3000/api/list'
  const url = !_.isEmpty(query) ? `${baseUrl}/?name=${query}` : baseUrl
  axios.get(url)
    .then(
      response =>
        dispatch({
          type: 'SEARCH',
          payload: response.data,
          query: query
        }),
      error =>
        dispatch({
          type: 'ERROR',
          payload: error.data,
          query: query
        })
    )
}
