import React, { Component } from "react";
import { Button } from "antd";
class List extends Component {
  getName = () => {
    console.log("**********");
    this.props.onIncreaseClick();
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.getName}>
          点击子组件
        </button>
        <Button type="primary">Primary</Button>
      </div>
    );
  }
}
export default List;
