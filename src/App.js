import React, { Component } from 'react';
import './App.css';
import NewPerson from './components/NewPerson';
import ShowPerson from './components/ShowPerson';
import EditPerson from './components/EditPerson';


class App extends Component {
  render() {
    return (
      <div className="container pt-3">
          <h1 className="text-center  pb-5">React-Redux Basics</h1>
          <div className="row">
          <NewPerson />
          {/* <EditPerson /> */}
          <ShowPerson />
            
          </div>
      </div>
    );
  }
}

export default App;
