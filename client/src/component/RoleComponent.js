import React from 'react'
import { useSelector } from 'react-redux'

export default function RoleComponent(props) {

    const user = useSelector((store) => store.user.value)

    if (user?.role == props.role) {
        return (
            <>
                {props.children}
            </>
        )
    }
    else {
        return null;
    }
}
