import React, { Component } from 'react';

class ItemDetails extends Component {
  render () {
    const { id, item } = this.props;
    return id && <div className="item-details">
      <h2>
        Single Item # {id}
      </h2>
      <h3>
        { item.title }
      </h3>
      <p>
        {
          item.description
        }
      </p>
    </div>
  }
}

export default ItemDetails;
