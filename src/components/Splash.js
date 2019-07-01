import React from 'react'

const Splash = ({ changePage }) => {

  return (
    <div>
      <button value="staff" onClick={() => changePage('staff')}>Staff</button>
      <button value="students" onClick={() => changePage('students')}>Students</button>
      <button value="form" onClick={() => changePage('form')}>Form</button>
    </div>
  )
}

export default Splash
