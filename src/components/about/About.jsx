import React from 'react'
import './about.css'
import ME from '../../assets/photo2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>EXperience</h5>
              <small>3+Years Working</small>
            </article>
            <article className='about__card'>
              <FiUser  className='about__icon'/>
              <h5>Clients</h5>
              <small>300+</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Id eius reiciendis beatae distinctio voluptatem odit incidunt 
            voluptates facere quaerat animi hic mollitia nobis labore, soluta, 
            assumenda praesentium quasi quam illum.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>

    </section>
  )
}

export default About