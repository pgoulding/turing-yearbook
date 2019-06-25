import React, { Component } from 'react';
import Cohort from './Cohort';
import Form from './Form'
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addPeople = (person) => {
    const {category} = person;
    this.setState({[category]: [...this.state[category], person]})
    console.log(category)
    console.log(this.state, person)
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
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
