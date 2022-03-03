import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a rel='noreferrer' href="https://www.linkedin.com/in/ravindra-yadav-rk1012/" target="_blank"><BsLinkedin></BsLinkedin></a>
        <a rel='noreferrer' href="https://github.com/Ravindrayadavrk1006" target="_blank"><BsGithub></BsGithub></a>
        <a rel='noreferrer' href="https://twitter.com/Ravindrarky1999" target="_blank"><BsTwitter></BsTwitter></a>
    </div>
  )
}

export default HeaderSocials