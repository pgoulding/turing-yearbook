import React, { Component } from 'react'
import './Form.css'

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote:'',
      superlative: '',
      photo:'',
      category: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addPeople = e => {
    e.preventDefault()
    const newPerson = {
      ...this.state,
      id: Date.now()
    }
    this.props.addPeople(newPerson)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      name: '',
      quote: '',
      superlative: '',
      photo: '',
      category: '',
    });
  }
  
  render() {
    return (
      <form>
        <h3>Add A Person</h3>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />

        <input
          type='text'
          placeholder='Quote'
          name='quote'
          value={this.state.quote}
          onChange={e => this.handleChange(e)}
        />

        <input
          type='text'
          placeholder='Superlative'
          name='superlative'
          value={this.state.superlative}
          onChange={e => this.handleChange(e)}
        />

        <input
          type='text'
          placeholder='Photo URL'
          name='photo'
          value={this.state.photo}
          onChange={e => this.handleChange(e)}
        />
        <label>
        <input 
        type='radio'
        name='category'
        value= 'students'
        label='Student'
        onChange ={e=> this.handleChange(e)}
        />
        Student
        </label>
        <label>
        <input
          required
          type='radio'
          name='category'
          value='staff'
          label='Staff'
          onChange={e => this.handleChange(e)}
          />
          Staff
        </label>
        <button className="submit__person-info" onClick={e => this.addPeople(e)}>SUBMIT</button>
      </form>
    )
  }
}

export default Form

