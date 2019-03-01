import React, { Component } from 'react';
import ItemsService from "../../services/ItemsService";
import Items from "../../components/Items";

class ItemsContainer extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }
  render () {
    return <div className="items-container">
      <Items items={this.state.items}/>
    </div>
  }

  componentDidMount() {
    ItemsService.getAll()
        .then(res => {
          this.setState({
            items: res.data
          });
        });
  }
}

export default ItemsContainer;
