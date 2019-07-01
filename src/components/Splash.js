import React from 'react'

const Splash = () => {
  const renderPage = this.props.renderPage()

  return (
    <div>
      <button value="staff" onClick={() => renderPage(this.value)}>>Staff</button>
      <button value="students" onClick={() => renderPage(this.value)}>Students</button>
      <button value="form" onClick={() => renderPage(this.value)}>>Form</button>
    </div>
  )
}

export default Splash
