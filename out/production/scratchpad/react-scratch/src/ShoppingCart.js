import React from 'react'

export default function ShoppingCart(props) {

    const {cart,setCart} = props;

    console.log("props in <Shopping Cart/> : ", props);

    React.useEffect(() => {
        //count the number of identical occurences of an item object
            //intialize an object.  
            //loop through the cart array.  if it's found in the object, increment the value of that key.  if it's not, create a new key and set the value to 1
        //combine all the occurences into one occurence, and update the quantity to reflect that.
            //map throguh the cart, and for each item object, update the quantity to what is in the object.
        const cartOccurences = {};
        cart.forEach(item => {
            if (item.product in cartOccurences) {
                cartOccurences[item.product] = cartOccurences[item.product] + 1;
            } else {
                cartOccurences[item.product] = 1;
            }
        })

        console.log('occurences cart', cartOccurences);

        let tempCart = [...cart];  //for immutability

        tempCart = tempCart.map(item => {
            const {product} = item;
            item.quantity = cartOccurences[product];
            return JSON.stringify(item);
        })

        // setCart([tempCart[0]]);

        console.log('temp cart', tempCart);
        let uniques = new Set(tempCart);
        uniques = [...uniques];
        uniques = uniques.map(item => JSON.parse(item));
        console.log(uniques);
        setCart(uniques);
    },[])

    const removeItem = (i) => {
       console.log('removing from cart');
       let tempCart = [...cart] //immutability
       tempCart = tempCart.map(item => {
           //check to see if the product matches the current item we're on
           //if it does, create a copy of that item object, and decrement the quantity by 1.
           //if it doesn't simply return the item.
            if (item.product === cart[i].product) {
                const itemCopy = {...cart[i]}; //immutability
                itemCopy.quantity -= 1;
                return itemCopy;
            } else {
                return item;
            }
       });

       setCart(tempCart);
    }

    return (
        <div>
           {cart.map((item,i) => {
               return (
                <>
                    <div>{JSON.stringify(item)}</div>
                    <button onClick={() => removeItem(i) }>Delete</button>
                </>
               )
           
           })}
        </div>
    )
}
