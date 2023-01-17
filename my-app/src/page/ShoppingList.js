import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ShoppingList = () => {

    const [shopping_lists, setShoppingList] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();

        let temp = [...shopping_lists]
        temp.push(
            {
                id: uuidv4(),
                title: event.target.title.value,
                quantity: event.target.quantity.value
            }
        )
        setShoppingList(temp)
    }

    function remove(idx) {
        console.log("remove");
        let temp = [...shopping_lists]
        temp = temp.filter((el, index) => idx != index)
        setShoppingList(temp)
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input placeholder='title' name='title' />
                    <input placeholder='quantiy' name='quantity' />
                    <button type='submit'>add </button>
                </form>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>quantiy</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shopping_lists.map((item, index) => {
                            return <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td><button onClick={() => {
                                    remove(index)
                                }} >delete</button></td>
                            </tr>
                        })
                    }
                    {/* {
                        [
                            { title: "apple", quantity: 12 },
                            { title: "samsung", quantity: 111 }
                        ].map(item => {
                            return <tr>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        })
                    } */}
                    {/* <tr>
                        <td>apple</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>samsung</td>
                        <td>109</td>
                    </tr> */}
                </tbody>
            </table>
        </>

    );
}

export default ShoppingList;
