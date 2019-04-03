import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import ProductList from './ProductList';


class App extends Component {
  constructor(props){
    super();
    this.state = {
      counter: 0,
      searchQuery:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddCart = this.handleAddCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  handleAddCart(data){
    let currentState = this.state;
    currentState.counter++;
    this.setState(currentState);
  }

  handleChange(data){
    let currentState = this.state;
    currentState.searchQuery = data;
    this.setState(currentState);
  }
  removeItem(){
    let currentState = this.state;
    if(currentState.counter == 0){
      this.setState(currentState);
    }
    else{
      currentState.counter--;
      this.setState(currentState);
    }
  }
  render() {
    return (
      <div className="container">
      
        <Header counter={this.state.counter}/>
        <Search searchText={this.handleChange}/>
        <ProductList search={this.state.searchQuery} count={this.handleAddCart} removcount={this.removeItem}/>
      </div>
    );
  }
}

export default App;
