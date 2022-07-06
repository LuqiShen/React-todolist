import React, { Component } from "react";
import { Input, Button, List } from "antd";
import store from "./store";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Input
          value={this.state.inputValue}
          placeholder="todo info"
          style={{ width: "300px", marginLeft: "10px" }}
          onChange={this.handleInputChange}
        />
        <Button type="primary" style={{ marginLeft: "10px" }}>
          提交
        </Button>

        <List
          style={{ width: "300px", marginLeft: "10px", marginTop: "10px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }

  handleInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value,
    };

    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
    console.log("store changed");
  }
}

export default TodoList;
