import React, { Component } from 'react';
import './Person.css';
import PropTypes from "prop-types";

// PERSON COMPONENT CODE GOES HERE
class Person extends Component {
  render() {
    return (
      <div className="Instructor__card" data-id={this.props.id}>
        <img src={this.props.image} alt={this.props.name}></img>
        <h3>{this.props.name}</h3>
        <p className="User__quote">{this.props.quote}</p>
        <p>{this.props.superlative}</p>
      </div>
    )
  }
}

export default Person;
