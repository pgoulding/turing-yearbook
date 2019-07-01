import React, { Component } from 'react';
import Person from './Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE
class Cohort extends Component {
  render () {
    const cohort = this.props.data.map((person)=> (
      <Person key={person.id} person={person}/>
    ))

    const changePage = page => {
      this.props.changePage(page)
    }

    return (
      <div>
        <nav>
          <button value="staff" onClick={() => changePage('staff')}>Staff</button>
          <button value="students" onClick={() => changePage('students')}>Students</button>
          <button value="form" onClick={() => changePage('form')}>Add People</button>
        </nav>
        <div className="Cohort">
        {cohort}
        </div>
      </div>

        )
  }
}

export default Cohort;
