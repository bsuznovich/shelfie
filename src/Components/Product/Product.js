import React from 'react'

export default function Product(props){
    return(
        <div>
            <h4>{props.name}</h4>
            <p>{props.price}</p>
            <p>{props.image}</p>
        </div>
    )
}