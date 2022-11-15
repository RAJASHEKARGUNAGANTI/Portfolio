import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} downlode className='btn'>Downlode CV</a>
        <a href="#contact" className='btn btn-primary'>Let's connect</a>
    </div>
  )
}

export default CTA