// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import ToDo from "./Todo";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  handleSearch = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <>
        <input
          value={this.state.searchInput}
          name="searchInput"
          onChange={this.handleSearch}
        />
        <ul>
          {this.props.todos.map(
            todo =>
              todo.task.includes(this.state.searchInput) && (
                <ToDo
                  
                  todo={todo}
                  toggleCompleted={this.props.toggleCompleted}
                  key={this.props.todos.id}
                />
              )
          )}
        </ul>
      </>
    );
  }
}

export default ToDoList;
