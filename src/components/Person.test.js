import React from 'react'
import { shallow, mount } from 'enzyme'
import Person from './Person'

describe('Person',() => {
  let wrapper;
  let mockPerson;

  beforeEach(() => {
    mockPerson = { 
      id:1, 
      name:'Bobo', 
      photo:'./test.jpg',
      quote:' I didn\'t do it',
      superlative:'Probably did it' 
    }

    wrapper = shallow(
    <Person person = { mockPerson }/>)
  })

  it('should render a person', () => {
    expect(wrapper).toMatchSnapshot()
  })


})