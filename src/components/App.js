import React from 'react'
import Header from './Header'
import Form from './Form'
import Footer from './Footer'
import logo from './fb-logo.svg'
import './index.css'

const App = () => {
  return (
    <div>
      <Header logo={logo} />
      <>
        <Form />
        <p className='create-page'>Create a Page for a celebrity, brand or business.</p>
      </>
      
      <Footer />
    </div>
  )
}

export default App
