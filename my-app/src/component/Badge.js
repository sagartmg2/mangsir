import React from 'react';

// const Badge = (props) => {
const Badge = ({ todo }) => {
    // console.log("props",props)

    return (
        <div>
            {
                todo.completed ? <span className='success'>yes</span> : <span className='invalid'>no</span>
            }
        </div>
    );
}

export default Badge;
