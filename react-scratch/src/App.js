import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import {Route,Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Items from './Items';
import ShoppingCart from './ShoppingCart';
import Detail from './Detail';
import Counter from './Counter';


import itemData from './items.json';



function App(props) {

  const [items,setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setItems(itemData);
  },[])

  useEffect(() => {
    console.log("items in local state: ", items);
    console.log("props in <App/>", props);
  })



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Link to="/items">Items</Link>
          <Link to="/">Home</Link>
          <Link to="/shopping-cart">Shopping Cart</Link>
          <Link to="/counter">Counter</Link>
        </nav>
      </header>

      <Route path="/counter">
        <Counter/>
      </Route>

      <Route exact path="/items">
        <Items items={items} setItems={setItems} cart={cart} setCart={setCart} />
      </Route>

      <Route exact path="/" render={() => <Home />}/>
      {/* <Route exact path="/">
        <Home/>
      </Route> */}

      <Route path="/shopping-cart">
        <ShoppingCart cart={cart} setCart={setCart} />
      </Route>

      <Route path={`/detail/:id`} component={Detail} />

    </div>
  );
}

export default App;
