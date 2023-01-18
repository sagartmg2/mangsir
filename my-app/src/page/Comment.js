import { useState, useEffect } from 'react';
import axios from "axios"
const Comment = () => {
    // https://jsonplaceholder.typicode.com/comments

    const [comments, setcomments] = useState([
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
    ]);

    const [name, setname] = useState("");

    function fetchComments() {

        /* 
            Database Operations
                - CRUD
                    - created
                    - read
                    - update
                    - delete
            
            HTTP Methods
            - GET
            - POST
            - PUT / PATCH
            - DELETE

            STATUS CODE
                2
                    200, 201, 203, 204 
                3
                    302 304
                    redirect
                4
                    400 , 401, 403 , 404
                5 
                    500 // server error

        */

        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                console.log(res)
                setcomments(res.data)
            })
            .catch(err => {
                console.log(err.response);
            })


        // fetch('https://jsonplaceholder.typicode.com/comments')
        //     .then(response => response.json())
        //     .then(json => {
        //         setcomments(json)
        //     })
    }

    // fetchComments()
    /* 
        LifeCycle Method
            - comonent Did mount
            - component did update
    */
    /* 
        useEffect(<callback>,dependencies)
    */

    useEffect(() => {
        console.log("use effect as didMount");
        fetchComments()
    },[])

    useEffect(() => {
        console.log("use effect as didUpdate -- fetchProduct()");
    }, [name])

    console.log("render");


    return (
        <>
            <div>
                fetch Comments
            </div>
            <input value={name} onChange={(e) => { setname(e.target.value) }} />
            <table>
                <thead>
                    <tr>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        comments.map(el => {
                            return <tr key={el.id}>
                                <td>{el.body}</td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </>
    );
}

export default Comment;
