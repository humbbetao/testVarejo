import axios from 'axios'
import _ from 'lodash'

export const search = (query) => dispatch => {
  const url = 'http://localhost:3000/api/list/'
  const urlFull = _.isEmpty(query) ? url : `${url}${query}`
  axios({
    method: 'POST',
    url: urlFull,
    headers: { 'crossDomain': true, 'Content-Type': 'application/json' }
  })
    .then(response =>
      console.log(response)
    )
    .catch(error =>
      dispatch({
        type: 'SEARCH',
        payload: response.data,
        query: query
      })
    )
}

export function fetchOffers(dispatch) {

}
