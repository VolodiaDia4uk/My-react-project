import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Items extends Component {
  render () {
    return <div className="items">
      <h2>
        Items
      </h2>
      <ul>
        {/*{*/}
          {/*this.props.items*/}
              {/*.map(i =>*/}
                  {/*<li key={i.id}>*/}
                    {/*<Link to={"/items/" + i.id}>{i.title}</Link>*/}
                  {/*</li>)*/}
        {/*}*/}
      </ul>
    </div>
  }
}

export default Items;
