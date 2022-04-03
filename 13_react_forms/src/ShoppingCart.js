import React, { Component } from 'react';
import ShoppingList from './ShoppingList.js';
class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ username: 'banana', email: '4', password: 'monkey' }],
    };
    this.renderItems = this.renderItems.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.setState((state) => ({ items: [...state.items, item] }));
  }

  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li>
            {item.username}, {item.email}, {item.password}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.renderItems()}
        <div>
          <ShoppingList addItem={this.addItem} />
        </div>
      </div>
    );
  }
}
export default ShoppingCart;
