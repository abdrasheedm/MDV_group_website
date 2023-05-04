import React from 'react'
import FirstView from '../../components/Home/FirstView'
import ContactForm from '../../components/SideForm/SideForm'

function Home() {
  return (
    <div className='container mx-auto'>
      <div className="grid grid-cols-3">
      <FirstView />
      <ContactForm />
      </div>
    </div>
  )
}

export default Home