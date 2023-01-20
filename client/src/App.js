import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import { useState } from "react";

function App() {

  const [search_term, setSearchTerm] = useState("");

  return (
    <div className="">
      <BrowserRouter>
        <Navbar search_term={search_term} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="" element={<Home search_term={search_term} />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
