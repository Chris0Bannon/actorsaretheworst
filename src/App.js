import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  // constructor() {
  //     super();
  //     this.state = {user: 'Chris'};

  // }
  state = {
    user: "",
    location: ""
  }
  handleChange = (event) => {
    console.log(event.target.value);

    this.setState({user:event.target.value});
  }

otherChange = (event) => {
  this.setState({location:event.target.value})
}
clickFunction = (event) => {
  console.log(this.state);
  
}

  render() {
    console.log('RENDER WAS CALLED');
    
    return (
      <div className="App">
        <input placeholder = "enter user name" onChange={this.handleChange}/>
        <input placeholder = "enter user location" onChange ={this.otherChange}/>
     You typed: {this.state.user} is from {this.state.location}
     <button onClick = {this.clickFunction}>push me i am a button</button>
      </div>
    );
  }
}

export default App;
