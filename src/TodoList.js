import React from "react";
import { connect } from "react-redux";

const TodoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);

//transformar informacoes do estado em propriedads
const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
