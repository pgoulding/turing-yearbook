import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

describe('App', () => {

  let wrapper;
  let mockPerson;
  let mockAddPeople
  let expected;

  beforeEach(() => {
    mockAddPeople = jest.fn()
    
    mockPerson = {
      name: 'Bobo',
      quote: ' I didn\'t do it',
      superlative: 'Probably did it',
      photo:'./photo.jpg',
      category: 'staff'
    }

    
    wrapper = shallow(<App addPeople={mockAddPeople}/>)
    expected = [mockPerson];
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should update state with a new person when addPeople is called', () => {

    wrapper.setState({ staff: '', students: '' })
    wrapper.instance().addPeople(mockPerson)
    expect(wrapper.state().staff).toEqual(expected)

  });

})