import React, { Component } from 'react';
import Grocery from './components/Grocery';
import ShoppingBag from './components/ShoppingBag';
import Stats from './components/stats';
import PocketMoney from './components/PocketMoney';

class App extends Component {
  render() {
    return (
      <div className = "container">
        <div className="row text-center">
          <div className="jumbotron">
            <h1>Shppers Stop!</h1>
            <p>A simple toggle function react app</p>
          </div>
        </div>
        <PocketMoney />
        <div className="row">
          <Grocery />
          <ShoppingBag />
          <Stats />
        </div>
      </div>
    );
  }
}

export default App;
