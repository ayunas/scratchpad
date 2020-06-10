import React from 'react'

export default function ShoppingCart(props) {

    const {cart,setCart} = props;

    console.log("props in <Shopping Cart/> : ", props);

    return (
        <div>
           {cart.map(item => <div>{JSON.stringify(item)}</div>)}
        </div>
    )
}
