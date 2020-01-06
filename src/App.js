import React from 'react';
import axios from 'axios';
import { Users } from './components/Users.js';
import './App.css';

class App extends React.Component {

state = {
  users: [],
  loading: false
}

// this runs when the page is loaded
// it's a great place to grab data from an api
async componentDidMount() {

  this.setState({   //we don't have the data yet so let's set the spinner on
    loading:true
  });

  const response = await axios.get("https://jsonplaceholder.typicode.com/users");

  this.setState({
    users: response.data,
    loading:false       //data has been received, let's turn the spinner off!
  });
}

  render(){
    // variables go inside the render but before the return
    const allUsers = this.state.users.map( (object,index) => {
      //map functions need a return statement
      return (
      <div key={object.id}>
      <h1>My name is {object.name}, I'm from {object.address.city}</h1>
      <h3>hit me up at {object.email}</h3>
      </div>)
      
      
    });

    return(
      <div>
        <Users data={allUsers} loading={this.state.loading}/>
      </div>
    );
  }
}

export default App;
