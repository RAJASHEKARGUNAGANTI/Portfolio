import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Technical Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__forntend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>CSS</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>BootStrap</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>React</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
          </div>
        </div>
{/* ==================== END OF FRONTEND ============================ */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>PHP</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Neo4j</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience