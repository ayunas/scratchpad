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

  const [filteredItems, setFilteredItems] = useState([]);
  const [items,setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setItems(itemData);
    setFilteredItems(itemData);
  },[])

  const searchFilter = () => {
      console.log('query in <App/>', query);
      //filter the items. keep all the items that .includes() the substring stored in query.
      let itemsCopy = [...items]; //immutability - copy the full list of items every time.  prevent state updating issues when doing a filter and undoing it.
      console.log('items copy in <App/>', itemsCopy);
      itemsCopy = itemsCopy.filter(item => item.product.includes(query));
      console.log("filtered items copy", itemsCopy);

      if(itemsCopy.length) {
          setFilteredItems(itemsCopy);
      }
  }

  useEffect(() => {
    searchFilter() //run the searchFilter every time the query changes
    
  },[query])

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
      <>
      <Items items={filteredItems} setItems={setItems} cart={cart} setCart={setCart} query={query} setQuery={setQuery} /> 
      </>
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
