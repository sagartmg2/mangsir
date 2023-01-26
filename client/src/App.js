import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductDetail from "./page/Product/ProductDetail";
import Upsert from "./page/Product/Upsert";
import { setUser as setReduxUser } from "./redux/Slice/UserSlice";
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch()

  const [search_term, setSearchTerm] = useState("");
  const [user, setUser] = useState(null); //{name,email,role...}
  const [isFetching, setisFetching] = useState(false);



  useEffect(() => {
    let access_token = localStorage.getItem("access_token")

    if (access_token) {
      axios.get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
        headers: {
          Authorization: "Bearer " + access_token
        }
      })
        .then(res => {
          setisFetching(true)
          // setUser(res.data)
          dispatch(setReduxUser(res.data))
        })
        .catch(err => {
          setisFetching(true)
        })

    } else {
      setisFetching(true)
    }


  }, []);

  if (!isFetching) {
    return <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  }


  return (
    <div className="">
      <BrowserRouter>
        <Navbar search_term={search_term} setSearchTerm={setSearchTerm} user={user} setUser={setUser} />
        <Routes>
          <Route path="" element={<Home search_term={search_term} user={user} />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="signup" element={<Signup />} />
          <Route path="products">
            <Route path=":id" element={<ProductDetail user={user} />} />
            <Route path="edit/:id" element={<Upsert />} />
            <Route path="create" element={<Upsert />} />
          </Route>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
