import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }
  addBox(box) {
    this.setState({ boxes: [...this.state.boxes, box] });
  }
  removeBox(id) {
    this.setState({ boxes: [...this.state.boxes].filter((box) => box.id !== id) });
  }
  render() {
    return (
      <div>
        <NewBoxForm addBox={this.addBox} />
        <div>
          {this.state.boxes.map((box) => (
            <Box
              key={box.id}
              width={box.width}
              height={box.height}
              bgcolor={box.bgcolor}
              id={this.state.id}
              removeBox={() => {
                this.removeBox(box.id);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
