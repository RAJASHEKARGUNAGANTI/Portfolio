import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blanl'><BsLinkedin /></a>
        <a href="https://github.com" target='_blanl'><FaGithub /></a>
        <a href="https://dribbble.com" target='_blanl'><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials 