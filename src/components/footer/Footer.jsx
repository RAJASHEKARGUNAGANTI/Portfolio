import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>RAJ</a>
      <ul className="permalinks">
        <li><a href="#"></a>Home</li>
        <li><a href="#about"></a>About</li>
        <li><a href="experience"></a>Experience</li>
        <li><a href="portfolio"></a>Portfolio</li>
        <li><a href="qualification"></a>Qualification</li>
        <li><a href="contact"></a>Contact</li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com"><AiFillGithub /></a>
        <a href="https://twitter.com"><AiOutlineTwitter /></a>
        <a href="https://linkedin.com"><AiFillLinkedin /></a>
        <a href="https://gmail.com"><AiOutlineMail /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Rajashekar Gunaganti. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer