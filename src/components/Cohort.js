import React, { Component } from 'react';
import Person from './Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE
class Cohort extends Component {
  render () {
    return this.props.data.map((person)=> (
      <Person key={person.id} person={person}/>
    ))
  }
}

export default Cohort;
