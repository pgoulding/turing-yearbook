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
      rendered: 'splash'
    }
  }f

  addPeople = (person) => {
    const { category } = person;
    this.setState({[category]: [...this.state[category],person]})
  }

  renderPage = (page) => {
    if(this.state.rendered === 'staff') {
      console.log(page)
      return (<Cohort changePage={this.changePage} data={this.state[page]}/>)
    } else if (this.state.rendered === 'students') {
      console.log(page)
      return (<Cohort changePage={this.changePage} data={this.state[page]} />)
    } else if(page === 'form') {
      return (<Form changePage={this.changePage} addPeople={this.addPeople} />)
    } else {
      return (<Splash changePage={this.changePage}/>)
    }
  }

  changePage = page => {
    this.setState({rendered: page})
  }

  render() {
    return (
      <main className="App">
      <header className="App-header">
        <h1>Turing Yearbook</h1>
      </header>
      <nav></nav>
      <h2>{`${ this.state.rendered }`}</h2>
        {this.renderPage(this.state.rendered) }
      {/* <Form addPeople={this.addPeople}/> */}
      {/* <h2>Staff</h2>
        <div className="Cohort">
          <Cohort data={this.state.staff}/>
        </div>
      <h2>Students</h2>
        <div className="Cohort">
          <Cohort data={this.state.students}/>
        </div> */}
      </main>
    );
  }
}

export default App;
