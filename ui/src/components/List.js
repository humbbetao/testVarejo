import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { search } from '../actions/search'
import ListItem from './ListItem'


class List extends PureComponent {
  componentDidMount() {
    this.props.search()
  }

  render() {
    const { products } = this.props
    return (
      <React.Fragment>
        {(products || []).map((item, idx) => <ListItem key={idx} item={item}/>)}
      </React.Fragment>
    )
  }
}

List.defaultProps = { products: [], query: '' }
List.propTypes = {
  products: PropTypes.array,
  query: PropTypes.string,
  search: PropTypes.func
}

const mapStateToProps = state => ({
  products: state.result.products,
  query: state.result.query
})
const mapDispatchToProps = dispatch => {
  return {
    search: query => dispatch(search(query))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
