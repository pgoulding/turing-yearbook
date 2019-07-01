import React from 'react';
import {shallow, mount} from 'enzyme'
import Form from './Form'


describe('Form', () => {
  let wrapper;
  let mockPerson;
  let mockAddPeople
  let expected;

  beforeEach(() => {
    mockAddPeople = jest.fn()
    let mockPerson = {
      id: 1,
      name: 'Bobo',
      photo: './test.jpg',
      quote: ' I didn\'t do it',
      superlative: 'Probably did it',
      catgory: 'staff'
    }
    wrapper = shallow(<Form addPeople={mockAddPeople}/>)
  })

  it('should call the function on button click', () => {
    wrapper.find('.submit__person-info').simulate('click', {preventDefault: () => {}})

    expect(mockAddPeople).toBeCalled()
  })

  it('should change the state on input', () => {
    const mockEvent = { target: { name: 'name', value: 'Bobo' } }
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('name', 'Bobo'))
  })

  it('should clear state when reset state is called', () => {
    const expected = { name: '', quote: '', superlative:'', photo:'', category:''}
    wrapper.instance().setState({
      name: 'Bobo',
      photo: './test.jpg',
      quote: ' I didn\'t do it',
      superlative: 'Probably did it',
      category: 'staff' })

    wrapper.instance().clearInputs()

    expect(wrapper.state()).toEqual(expected)
  })


})