/* fucntion ClassTodoList()
{
    return
}
 */
import React from "react"

class ClassTodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            count: 0,
            dates: "2022"
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("add");
        let temp = [...this.state.todos]
        temp.push(e.target.title.value)
        console.log(temp)
        this.setState({
            todos: temp,
            count: 12
        })
    }

    render() {
        console.log("remder");
        return <>
            <h1>{this.props.title}</h1>

            <form onSubmit={this.handleSubmit}>
                <input name="title" />
                <button>add</button>
            </form>
            <ul>
                {JSON.stringify(this.state.todos)}
                {
                    this.state.todos.map(el => {
                        return <li>{el}</li>
                    })
                }
            </ul>
        </>
    }
}


export default ClassTodoList