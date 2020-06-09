import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import {Route,Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Items from './Items';
import ShoppingCart from './ShoppingCart';
import itemData from './items.json';


function App() {

  const [items,setItems] = useState([]);

  useEffect(() => {
    setItems(itemData);
  },[])

  useEffect(() => {
    console.log("items in local state: ", items);
  })



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Link to="/items">Items</Link>
          <Link to="/">Home</Link>
          <Link to="/shopping-cart">Shopping Cart</Link>
        </nav>
      </header>

      <Route exact path="/items">
        <Items items={items} />
      </Route>

      <Route exact path="/" component={Home}/>
      {/* <Route exact path="/">
        <Home/>
      </Route> */}

      <Route path="/shopping-cart">
        <ShoppingCart/>
      </Route>


    </div>
  );
}

export default App;
