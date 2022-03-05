import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <footer>
      <a className='footer__logo' href="#"></a>
      <ul className='permalinks'>
          <li><a href="#"></a></li>
          <li><a href="about"></a></li>
          <li><a href="experience"></a></li>
          <li><a href="skills"></a></li>
          <li><a href="projects"></a></li>
          <li><a href="#contact"></a></li>

          <div className="footer__socials">
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
      </ul>
    </footer>
  )
}

export default Footer