import React from 'react'
import {Link} from 'react-router-dom';

export default function Items(props) {
    const {items, setItems,cart, setCart} = props;

    React.useEffect(() => {
        console.log("props in <Items/>", props);
    })

    const buy = (i) => {
        console.log('attempting to purchase an item');
        const purchasedItem = {...items[i], quantity : 1};
        const updatedItem = {...items[i], quantity : items[i].quantity - 1};
        console.log("purchased Item", purchasedItem);
        console.log("updated item", updatedItem);
        console.log(cart);
        setCart([...cart, purchasedItem]);
    }

    return (
        <div>
            <div>
                These are the items
            </div>
            <Link to={{pathname : "/", state : 10 }}>Home</Link>
            {props.items.map( (item,i) => {
                return (
                <>
                    <div>{item.product}</div>
                    <div>Quantity : {item.quantity}</div>
                    <button onClick={() => buy(i) }>Buy</button>
                    <button><Link to={`/detail/${i+1}`}>Item Detail</Link></button>
                </>
                )
            })}
        </div>
    )
}
