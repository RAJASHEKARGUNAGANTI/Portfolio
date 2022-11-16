import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/acm.png'
import IMG3 from '../../assets/portfolio.png'
import IMG4 from '../../assets/portfolio2.png'
import IMG5 from '../../assets/portfolio.png'
import IMG6 from '../../assets/portfolio.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Rythu Seva (Web Application) </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/RAJASHEKARGUNAGANTI/Rythu-seva.git" className='btn' target='_blank'>Github</a>
            <a href="https://rajashekargunaganti.github.io/rythu_seva/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>ACM (Web Application)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/RAJASHEKARGUNAGANTI/ACMwesite.git" className='btn' target='_blank'>Github</a>
            <a href="https://acmvjit.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio