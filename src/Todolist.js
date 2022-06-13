import React, { Component, Fragment } from "react";

class Todolist extends Component {
  render() {
    return (
      <Fragment>
        <input></input>
        <button>提交</button>

        <ul>
          <li>学英语</li>
          <li>学React</li>
        </ul>
      </Fragment>
    );
  }
}

export default Todolist;
