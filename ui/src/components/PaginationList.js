import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Pagination from 'react-js-pagination'

class PaginationList extends PureComponent {
  render() {
    const { products } = this.props
    return (
      <div className="container">
        <div className="left">Página 1</div>
        <div className="right">
          <Pagination
            prevPageText="prev"
            nextPageText="next"
            firstPageText="first"
            lastPageText="last"
            activePage={1}
            itemsCountPerPage={15}
            totalItemsCount={this.props.products.length}
            onChange={null}
          />
        </div>
      </div>
    )
  }
}

PaginationList.defaultProps = { products: [], query: '' }
PaginationList.propTypes = {
  products: PropTypes.array,
  query: PropTypes.string,
  search: PropTypes.func
}

const mapStateToProps = state => ({
  products: state.result.products,
  query: state.result.query
})
export default connect(mapStateToProps)(PaginationList)
