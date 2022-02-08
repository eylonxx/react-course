import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './Item.css';

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <Card style={{ width: '100%' }}>
          <Card.Img
            variant="top"
            height="350px"
            width="200px"
            src={this.props.img}
          />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Item;
