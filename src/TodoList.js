import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const TodoList = ({ todos, addTodo }) => (
  <Fragment>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
    <button onClick={() => addTodo("Programar")}>Adicionar</button>
  </Fragment>
);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    })
  ).isRequired,
};

//transformar informacoes do estado em propriedads
const mapStateToProps = (state) => ({
  todos: state.todos,
});

// transforma actions em propriedades do componente
const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch({ type: "ADD_TODO", payload: { text } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
