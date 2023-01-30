import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUser as setReduxUser } from "../redux/Slice/UserSlice";
import BuyerComponent from "./BuyerComponent";

function Navbar({ search_term, setSearchTerm, setUser, user: app_state_user }) {
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user.value)
    const cart_items = useSelector((store) => store.cart.value)

    let cart_count = 0;

    cart_items.forEach(cart_iitem => {
        cart_count += cart_iitem.quantity
    });

    // console.log("redux-user", user)

    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {/* {
                            JSON.stringify(user)
                        } */}
                        {
                            user?.role === "seller" &&
                            // user &&
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/products/create">Create Product</Link>
                            </li>
                        }
                        <BuyerComponent>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/cart">Cart <span>{cart_count}</span> </Link>
                            </li>
                        </BuyerComponent>
                        {
                            !user
                            &&
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="signup">Signup</Link>
                                </li>
                            </>
                        }

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" value={search_term} onChange={(e) => { setSearchTerm(e.target.value) }} type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    {
                        user
                        &&
                        <button onClick={() => {
                            localStorage.removeItem("access_token")
                            // setUser(null)
                            dispatch(setReduxUser(null))
                        }} className="btn">Logout</button>
                    }
                </div>
            </div>
        </nav>
    </>
}
export default Navbar;