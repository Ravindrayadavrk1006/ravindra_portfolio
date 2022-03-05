import React from 'react'
import './about.css';
import ME from '../../assets/about_img.jpg'
import {MdCastForEducation} from 'react-icons/md';
import {GiAchievement} from 'react-icons/gi';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About pic" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdCastForEducation></MdCastForEducation>
              <h5>Experiene</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <GiAchievement></GiAchievement>
              <h5>Education</h5>
              <small>B.Tech(cse)</small>
            </article>
            <article className='about__card'>
              <AiOutlineFundProjectionScreen></AiOutlineFundProjectionScreen>
              <h5>Interest</h5>
              <small>Developer jobs</small>
            </article>
          </div>
          <p>
            A computer science engineering graduate. I have strong passion for problem solving.Always up for new challenges. I like to work in a fast-paced dynamic environment. Everything that tickles my mind to think more interest me.
          </p>
          <a href="#contact" className="btn btn-primary">Le'ts Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About