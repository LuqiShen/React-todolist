import React, { Component, Fragment } from "react";
import "./css.css";
import TodoItem from "./TodoItem";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["学习英文", "学习React"],
    };
  }

  render() {
    return (
      <Fragment>
        {/* */}
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleButtonClick.bind(this)}>提交</button>
        </div>

        <ul>
          {this.state.list.map((item, index) => {
            return (
            <div>
              { /*
              <li
                key={index}
                onClick={this.handleItemDelete.bind(this, index)}
                dangerouslySetInnerHTML={{ __html: item }}
              ></li>
            */ }

            <TodoItem content={item} index={index} deleteItem = {this.handleItemDelete.bind(this)}/>

            </div>
            );
          })}
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleButtonClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: "",
    });
  }

  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list: list,
    });
  }
}

export default Todolist;
