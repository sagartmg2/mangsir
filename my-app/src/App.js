import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"

import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import Button from './Button';
import ShoppingList from './page/ShoppingList';

import Counter from './component/Counter';
import ClassTodoList from './ClassTodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// App()

function App() {
  // return <JSX/>
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='counter' element={<Counter />} />
        <Route path='todo' element={<ClassTodoList />} />
        <Route path='shopping' element={<ShoppingList />} />
      </Routes>
      {/* <Button text="login" className="login-btn" /> */}
      {/* <Button text="signup" className="register-btn" /> */}
      {/* 
        Button(login)
        Button("resgiter")
        Button(s)
      */}
      {/* <LoginButton />
      <RegisterButton /> */}

    </div>

  );
}

export default App;
