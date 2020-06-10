import React from 'react'
import {Link} from 'react-router-dom';

export default function Items(props) {
    const {items, setItems,cart, setCart} = props;

    const buy = (i) => {
        console.log('attempting to purchase an item');
        const purchasedItem = {...items[i], quantity : 1};
        const updatedItem = {...items[i], quantity : items[i].quantity - 1};
        console.log("purchased Item", purchasedItem);
        console.log("updated item", updatedItem);
        setCart([...cart, purchasedItem]);
        //how to update only the quantity instead of push another whole item to the shopping cart?
        console.log("cart", cart);
        // setCart([...updatedCart]);
        
        //how do we update the items array with the new updatedItem???
        //filter out the old item.
        //spread in the filtered items and add a new item.
        console.log()
        // const filteredItems = items.filter(item => item.product !== items[i].product);
        // console.log("filtered items", filteredItems);
        const tempItems = [...items];
        tempItems.splice(i,1,updatedItem);
        console.log('updated items', tempItems);
        setItems(tempItems);

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
