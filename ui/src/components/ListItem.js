import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ListItem extends PureComponent {
  render() {
    const { item } = this.props
    return (
      <div className="containerProducts">
        <div className="imagesProduct">
          {(item.images || []).map((image, idx) => <img key={`${idx}_${image}`} src=""/>)}
        </div>
        <div className="descriptionProduct">
          <h6 className="bolding">{item.name}</h6>
          <span> {item.description} | {item.type}</span>
        </div>
        <div className="priceProduct">
          <span className="oldPrice">{item.oldPrice}</span> por <span className="newPrice"> {item.newPrice}</span>
        </div>

      </div>
    )
  }
}

ListItem.defaultProps = {}
ListItem.propTypes = {
  item: PropTypes.object
}

export default ListItem
