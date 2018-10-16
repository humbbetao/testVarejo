import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import List from './List'
import { search } from '../actions/search'
import PaginationList from './PaginationList'

class Body extends PureComponent {
  moreThanOne = (products) => {
    return products.length > 1 ? 's' : ''
  }

  render() {
    const { products } = this.props
    const moreThanOne = this.moreThanOne(products)
    const numberProductsText = `${products.length || 'Nenhum'} Produto${moreThanOne} Encontrado${moreThanOne}`
    return (
      <article className="container">
        <h4 className="productsNumber">{numberProductsText}</h4>
        <List/>
        <PaginationList/>
      </article>
    )
  }
}

Body.defaultProps = {
  products: []
}

Body.propTypes = {
  query: PropTypes.string,
  search: PropTypes.func,
  products: PropTypes.array
}

const mapDispatchToProps = dispatch => {
  return {
    search: query => dispatch(search(query))
  }
}
const mapStateToProps = state => ({
  products: state.result.products,
  query: state.result.query
})
export default connect(mapStateToProps, mapDispatchToProps)(Body)
