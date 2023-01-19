import axios from 'axios';
import { useState } from 'react';

const Signup = () => {

    const [error, setError] = useState({
        name: "",
        email: ""
    })

    const [data, setData] = useState({
        name:"",
    });
    
    const [name, setname] = useState("");
    // const [state, setstate] = useState(initialState);

    function handleSubmit(e) {
        e.preventDefault();

        let err = {}
        if (!name) {
            err.name = "Required"
        }
        setError(err)


        /* 
                Authentication VS authorization
        
        2 - SUCCESS
        3 - REDIRECT
        4 
         400 - BAD REQUEST 
         401 - UNAUTHENTICATED / not logge in
         403 - unauthorized / forbiddden / logged in but donot have correct role/acces
         404 -page not found / resource not found       
        5
         */

        let {  email, password, role } = e.target;



        axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}users/signup`, {
            name: name.value,
            email: email.value,
            password: password.value,
            role: role.value
        })
            .then(res => {

            })
            .catch(err => {

            })
    }

    return (
        <div className='container mt-5 '>
            ENV : {process.env.REACT_APP_SERVER_DOMAIN}
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="">Name</label>
                    <input type="text" name='name' class="form-control" placeholder=""  />

                    {
                        error.name
                        &&
                        <small>{error.name}</small>
                    }
                </div>
                <div class="form-group">
                    <label for="">Email address</label>
                    <input type="email" name='email' class="form-control" placeholder="" />
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="text" name='password' class="form-control" placeholder="" />
                </div>
                <div class="form-group">
                    <label for="">Role</label>
                    <select class="form-select" name="role" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Signup;
