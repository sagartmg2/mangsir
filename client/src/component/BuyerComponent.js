import React from 'react'

export default function BuyerComponent(props) {

    if (props.user?.role === "buyer") {
        return <>
            {props.children}
        </>
    }
    else {
        return null;
    }
}
