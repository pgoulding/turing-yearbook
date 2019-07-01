import React, { Component } from 'react';
import Cohort from './Cohort';
import Form from './Form'
import Splash from './Splash'

import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff || [],
      students: people.students || [],
      // rendered: 'splash'
    }
  }f

  addPeople = (person) => {
    const { category } = person;
    this.setState({[category]: [...this.state[category],person]})
  }

  // renderPage = (page) => {
  //   if(page === 'staff' || 'students') {
  //     console.log(page)
  //     return <Cohort data={this.state.staff}/>
  //   } else if(page === 'form') {
  //     return <Form addPeople={this.addPeople} />
  //   } else {
  //     return <Splash />
  //   }
  // }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Turing Yearbook</h1>
      </header>
      {/* <h2>{`${ this.state.rendered }`}</h2> */}
      {/* { this.renderPage(this.state.page) } */}
      <Form addPeople={this.addPeople}/>
      <h2>Staff</h2>
        <div className="Cohort">
          <Cohort data={this.state.staff}/>
        </div>
      <h2>Students</h2>
        <div className="Cohort">
          <Cohort data={this.state.students}/>
       </div>
      </div>
    );
  }
}

export default App;
