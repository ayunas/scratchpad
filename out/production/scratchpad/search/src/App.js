import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import Search from './Search';

function App() {

  const [furniture,setFurniture] = React.useState(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Search furniture={furniture} />
    </div>
  );
}

export default App;
