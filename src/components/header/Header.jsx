import React from 'react'
import './header.css';
import CTA from './CTA'
// import ME from '../../assets/developer_image.jpg'
import HeaderSocials from './HeaderSocials';
import {FaWolfPackBattalion} from 'react-icons/fa'
const Header = () => {
  return (
    <header>
        <div className="container header__container">
              <h5>Hello I'm</h5>
              <h1>Ravindra Yadav</h1>
              <h5 className="text-light">Fresher Developer</h5>
              <CTA></CTA>
              <HeaderSocials> </HeaderSocials>
              <div className="me">
                  <a href="#">
                  <FaWolfPackBattalion size={150}></FaWolfPackBattalion>
                  </a>
                 
              </div>
              <a href="#contact" className="scroll__down">Scroll Down</a>     
        </div>
    </header> 
  )
}

export default Header