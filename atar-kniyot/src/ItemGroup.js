import React, { Component } from 'react';
import Item from './Item';
import './ItemGroup.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data';

class ItemGroup extends Component {
  getRows = () => {
    const size = data.data.length;
    const cols = Number(this.props.cols);
    const rowsNum = Math.floor(size / cols);
    const rows = [];
    for (let i = 0; i < rowsNum; i++) {
      const currentSlice = data.data.slice(i * cols, i * cols + cols);
      rows.push(
        <Row>
          {currentSlice.map((item) => (
            <Col>
              <Item
                name={item.name}
                description={`${item.color}, ${item.size}`}
                img={item.img}
              />
            </Col>
          ))}
        </Row>
      );
    }
    return rows;
  };

  render() {
    return <Container className="ItemGroup">{this.getRows()}</Container>;
  }
}

export default ItemGroup;
