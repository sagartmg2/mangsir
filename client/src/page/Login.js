import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../component/ErrorMessage';

const Login = (props) => {

    const navigate = useNavigate();

    const [error, setError] = useState({
        name: "",
        email: ""
    })

    // const [error, setError] = useState([
    //     {
    //         param: "email",
    //         msg: "alredy...."
    //     }
    // ])


    // const [name, setname] = useState("");

    const [data, setData] = useState({
        email: "b@b.com",
        password: "password",
    });

    function handleSubmit(e) {
        e.preventDefault();

        let { name, email, password, role } = data

        let validation = true;

        let err = {}

        if (!email) {
            err.email = "Required"
        }

        if (Object.entries(err).length == 0) {
            axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}users/login`, {
                email,
                password,
            })
                .then(res => {
                    navigate("/")
                    localStorage.setItem("access_token", res.data.access_token)
                    props.setUser(true)
                })
                .catch(err => {
                    console.log(err)
                    // setError({
                    //     email: "alerdy."
                    // })
                    // setError(err.response.data.errors)
                })
        } else {
            setError(err)
        }

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
    }

    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='container mt-5 '>
            <form onSubmit={handleSubmit}>

                <div class="form-group">
                    <label for="">Email address</label>
                    <input type="email" name='email' class="form-control" onChange={handleChange} value={data.email} placeholder="" />
                    {
                        error.email
                        &&
                        <ErrorMessage msg={error.email} />
                    }
                    {/* {
                        error.find(el => el.param == "email")
                        &&
                        <ErrorMessage msg={error.find(el => el.param == "email").msg} />
                    } */}
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="text" name='password' value={data.password} onChange={handleChange} class="form-control" placeholder="" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

/* 

[
    {
        "value": "em@em.com",
        "msg": "E-mail already in use",
        "param": "email",
        "location": "body"
    },
    {
        "value": "em@em.com",
        "msg": "not sucpported",
        "param": "role",
        "location": "body"
    }
]

// output
let err ={}
erros[0]["param"] = errros[0].msg
{
    "email":"E-mail already in us..",
    "role" :"not sucpporte"
}

*/

export default Login;
