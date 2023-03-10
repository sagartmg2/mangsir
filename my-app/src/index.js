// const bcrypt  = require("bcrypt") // common js module  in express. 
// import bcrypt from "bcrypt" // es6 module

import React from 'react'; // es6 module
import ReactDOM from 'react-dom/client';
import './App.css';
import Todo from "./page/Todo"
import Counter from './component/Counter';
import reportWebVitals from './reportWebVitals';
import TodoList from './page/TodoList';
import ShoppingList from './page/ShoppingList';
import ClassTodoList from './ClassTodoList';
import App from "./App"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Todo />
  // <Counter />
  // <TodoList />
  // <ShoppingList/>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // <ClassTodoList title="class component" />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
