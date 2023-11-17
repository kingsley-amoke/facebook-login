import React from 'react'
import './index.css'

const Form = () => {
  return (
    <div className='form'>
      <input placeholder='Email address or phone number'/>
      <input placeholder='Password'/>
      <button>Log in</button>
      <p className='link'><a href='/'>Forgotten password?</a></p>
      <hr/>
      <button>Create new account</button>
    </div>

  )
}

export default Form
