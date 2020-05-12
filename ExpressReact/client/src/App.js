import React from 'react';
import './App.css';
import Shop from './components/Shop';
import Checkout from './components/Checkout';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      cart:[]
    }
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.buy = this.buy.bind(this)
  }

  addItem = (item) => {

    if(!this.state.cart.includes(item)){
    this.setState({cart: 
      this.state.cart.concat([
          item
      ])})
    }
    
  }

  removeItem = (id) => {
    const filtered = this.state.cart.filter(item => item._id !== id);
    this.setState({cart: filtered});
  }

  buy = (items) =>{
    fetch('http://localhost:5000/api/buy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        items
      })
    })

    console.log("CLEAR")
    this.setState({cart: []})
      
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
              <Route path="/checkout">
                <Checkout onBuy={this.buy} items={this.state.cart} onRemove = {this.removeItem}/>
              </Route>
              <Route path="/">
                <Shop onAdd = {this.addItem}/>
              </Route>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
