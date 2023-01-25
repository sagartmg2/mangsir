import React from 'react'
import { useSelector } from 'react-redux';

export default function BuyerComponent(props) {

    const redux_user = useSelector((store) => store.user.value)

    if (redux_user?.role === "buyer") {
        return <>
            {props.children}
        </>
    }
    else {
        return null;
    }
}
