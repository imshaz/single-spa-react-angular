import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App({ name }) {
  const todos = useState([{}]);
  return (
    <Router>
      <div className="container">
        <nav className="sidebar">
          <ul>
            <li>
              <Link to="/react">Home</Link>
            </li>
            <li>
              <Link to="/react/Todos">Todos List</Link>
            </li>
            <li>
              <Link to="/react/Add">Add Todo</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Switch>
            <Route path="/react/todos">
              <TodoList todos={todos} />
            </Route>
            <Route path="/react/addTodo">
              <AddTodo />
            </Route>
            <Route path="/react">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function TodoList({ todos }) {
  return <>
    <h2>Todos</h2>
    {todos.map()}
  </>;
}

function AddTodo() {
  return <h2>Add Todo</h2>;
}
