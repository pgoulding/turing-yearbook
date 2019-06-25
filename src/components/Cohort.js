import React, { Component } from 'react';
import Person from './Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE
class Cohort extends Component {
  render () {
    return this.props.staffData.map((person)=> (
      <Person key={person.id} person={person.name} image={person.photo} quote={person.quote} superlative={person.superlative}/>
    ))
  }
}

export default Cohort;
