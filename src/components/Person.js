import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
  render() {
    const {id, name, photo, quote, superlative} = this.props.person;
    return (
      <div className="User__card" data-id={id}>
        <img className="User__profile-photo" src={photo} alt={name}></img>
        <h3>{name}</h3>
        <p className="User__quote">{quote}</p>
        <p className="User__superlative">{superlative}</p>
      </div>
    )
  }
}

export default Person;
