import React from 'react';

const ShoppingList = () => {
    return (
        <>
            <div>
                <form>
                    <input placeholder='title' />
                    <input placeholder='quantiy' />
                    <button>add </button>
                </form>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>quantiy</th>
                    </tr>
                </thead>
            </table>
        </>

    );
}

export default ShoppingList;
