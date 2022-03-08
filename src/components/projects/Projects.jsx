import React from 'react'
import './projects.css'
import IMG1 from '../../assets/dev_image.jpg';
import IMG2 from '../../assets/omdentals.PNG';
import IMG3 from '../../assets/artworld.PNG';
import IMG4 from '../../assets/myportfolio.PNG';
const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="project__container container portfolio__container">
        <article className='portfolio__item'>
          <div className="porfolio__item-image">
            <img src={IMG2} alt="" className='portfolio__item-image-target' />
          </div>
          <h3>Om Dentals</h3>
          <small>node.js, express.js, ejs, html, mailer, twillio(sms),css</small>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Ravindrayadavrk1006/expressnodeproject/tree/master" className='btn'>Github</a>
          <a target="_blank" href="https://omdentals.herokuapp.com/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="porfolio__item-image">
            <img src={IMG3} alt="" className='portfolio__item-image-target' />
          </div>
          <h3>Art World</h3>
          <small>react,html,css,node.js,express,javascript,jquery</small>
          <br />
          <small>bootstrap</small>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Ravindrayadavrk1006/cpf" className='btn'>Github</a>
          <a target="_blank" href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="porfolio__item-image">
            <img src={IMG4} alt="" className='portfolio__item-image-target' />
          </div>
          <h3>My portfolio</h3>
          <small>
            react, javascript,css,html,mailJs
          </small>
          <br />
          <small>bootstrap</small>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a target="_blank" href="htttp://dribble.com/Alien_pixels" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects