import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import { search } from '../actions/search'

class Header extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.props.search(this.state.text)
  }

  render() {
    return (
      <div className="nav navbar-inverse bg-inverse">
        <div className="navbar header">
          <div className="resizing">
            <h4 className="title">mmartam</h4>
            <form onSubmit={this.handleOnSubmit} className="search-box form-group">
              <input type="text" className="form-control"
                     aria-describedby="Pesquise Aqui" placeholder="Pesquise Aqui"
                     value={this.state.text}
                     onChange={(evt) => this.setState({
                       text: evt.target.value
                     })
                     }/>
            </form>
          </div>
        </div>
        <div className="searchText">
          <h2 className="searchQuery resizing">
            {!_.isEmpty(this.props.query) ? this.props.query : 'Lista de Produtos'}
          </h2>
        </div>
      </div>
    )
  }
}


Header.defaultProps = {}
Header.propTypes = {
  query: PropTypes.string,
  search: PropTypes.func
}

const mapDispatchToProps = dispatch => {
  return {
    search: query => dispatch(search(query))
  }
}
const mapStateToProps = state => ({
  query: state.result.query
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
