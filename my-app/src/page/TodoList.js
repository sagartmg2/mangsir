import { useState } from 'react';
import Counter from '../component/Counter';

const TodoList = () => {

    // let todos = []

    const [todos, setTodo] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.task.value);
        // todos.push(e.target.task.value)
        // console.log(todos);
        // setTodo((prev) => )

        let temp = todos
        temp.push(e.target.task.value)
        console.log(temp)
        setTodo(temp)

    }

    console.log("render");
    return (
        <div>
            {/* <Counter/> */}
            <h1>Todo list</h1>
            <form onSubmit={handleSubmit}>
                <input name='task' />
                <button>add</button>
            </form>
            <hr />
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>

        </div>
    );
}

export default TodoList;
