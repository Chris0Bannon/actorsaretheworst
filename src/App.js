import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  // constructor() {
  //     super();
  //     this.state = {user: 'Chris'};

  // }
  state = {
    user: {
      name: '',
      city: ''
    }
  }
  handleChange = (event) => {
    console.log(event.target.value);

    this.setState({user:
        {...this.state.user,
        name:event.target.value}});
  }

otherChange = (event) => {
  this.setState({user:
               {...this.state.user,
                city: event.target.value}})
}
clickFunction = (event) => {
  console.log(this.state);
  
}

handleChangeFor = (event, propertyName) => {
  this.setState({
    user:
    {
      ...this.state.user,
      [propertyName]: event.target.value
    }
  })
}

  render() {
    console.log('RENDER WAS CALLED');
    
    return (
      <div className="App">
        <input placeholder = "enter user name" onChange={(event) => {this.handleChangeFor(event, 'name')}}/>
        <input placeholder = "enter user location" onChange ={(event) => {this.handleChangeFor(event, 'city')}}/>
     You typed: {this.state.user.name} is from {this.state.user.city}
     <button onClick = {this.clickFunction}>push me i am a button</button>
      </div>
    );
  }
}

export default App;
