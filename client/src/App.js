import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
