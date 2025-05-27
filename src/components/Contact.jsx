import React from 'react'
import SectionHeader from './SectionHeader'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
        <SectionHeader sectionTitle={'CONTACT'} dark={false} />
        <ContactForm />
    </section>
  )
}

export default Contact
