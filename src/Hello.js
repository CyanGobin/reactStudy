import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import List from "./List";
class Hello extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { match, location, history } = this.props;
    return (
      <div>
        <button type="button" onClick={this.props.onIncreaseClick}>
          点击我
        </button>
        <List {...this.props} />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncreaseClick: () => {
      dispatch({ type: "EDIT_TODO" });
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Hello)
);
