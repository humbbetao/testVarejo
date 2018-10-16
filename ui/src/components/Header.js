import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { search } from '../actions/search'

class Header extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  handleOnSubmit = (event) => {
    event.preventDefault() // Let's stop this event.
    event.stopPropagation()
    this.props.search(this.state.text)
  }

  render() {
    return (
      <div className="nav navbar-inverse bg-inverse">
        <div className="navbar header">
          <h1 className="title">mmartam</h1>
          <form onSubmit={this.handleOnSubmit} className="search-box">
            <div className="form-group">
              <input type="text" className="form-control" id="exampleInputEmail1"
                     aria-describedby="emailHelp" placeholder="Enter email"
                     value={this.state.text}
                     onChange={(evt) => this.setState({
                       text: evt.target.value
                     })
                     }/>
            </div>
          </form>
        </div>
        <div className={'container'}>
          {this.props.query}
        </div>
      </div>
    )
  }
}


Header.defaultProps = {}
Header.propsTypes = {
  search: PropTypes.func,
  query: PropTypes.String
}

const mapDispatchToProps = dispatch => {
  return {
    search: query => dispatch(search(query))
  }
}
const mapStateToProps = state => ({
  result: state.result,
  query: state.query
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
