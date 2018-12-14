import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      price: '',
      image: '',
      inventory: [] 
    }
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res => {
        this.setState({ inventory: res.data })
      })
  }

  handleChange = (key,val) => {
    this.setState({
      [key]: val
    })
  }

  handleCancel = () => {
    this.setState({
      name: '',
      price: '',
      image: '',
    })
  }
  

  render() {
    return (
      <div className="App">

        <Dashboard inventory={this.state.inventory}/>
        <Form getInventory={this.componentDidMount}/>
        <Header />

        <input placeholder='Name'
        onChange={e => this.handleChange(this.state.name, e.target.value)}/>
        <input placeholder='Price'
        onChange={e => this.handleChange(this.state.price, e.target.value)}/>
        <input placeholder='Image'
        onChange={e => this.handleChange(this.state.image, e.target.value)}/>
        <button onClick={() => this.handleCancel()}>Cancel</button>
        <button >Add to Inventory</button>
      </div>
    );
  }
}

export default App;
