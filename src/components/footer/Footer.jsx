import React from 'react'
import './footer.css';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a className='footer__logo' href="#"></a>
      <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
          <a rel='noreferrer' href="https://www.linkedin.com/in/ravindra-yadav-rk1012/" target="_blank"><BsLinkedin></BsLinkedin></a>
        <a rel='noreferrer' href="https://github.com/Ravindrayadavrk1006" target="_blank"><BsGithub></BsGithub></a>
        <a rel='noreferrer' href="https://twitter.com/Ravindrarky1999" target="_blank"><BsTwitter></BsTwitter></a>
      </div>
        <div className="footer__copyright">
          <small>
            &copy; Ravindra Yadav. All right reserved</small>
        </div>
    </footer>
  )
}

export default Footer