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
import ProtectedRoute from './component/ProtectedRoute';
// App()
import Comment from './page/Comment';

function App() {
  // return <JSX/>
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='counter' element={<Counter />} />
        <Route path='todo' element={<ClassTodoList />} />
        <Route path='shopping' element={<ShoppingList />} />
        <Route path='comments' element={<Comment />} />

        {/* <Route path='products' element={<h1>Products</h1>} />
        <Route path='products/:id' element={<h1>Single product</h1>} /> */}

        <Route path='cart' element={<ProtectedRoute />}>
          <Route index element={<h1>CARt</h1>} />
          <Route path=':id' element={<h1>SingleCART item</h1>} />
        </Route>
        <Route path='*' element={<h1>404 page not found</h1>} />
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
