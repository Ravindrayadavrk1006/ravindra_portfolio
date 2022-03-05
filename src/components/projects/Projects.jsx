import React from 'react'
import './projects.css'
import IMG1 from '../../assets/dev_image.jpg';
import IMG2 from '../../assets/dev_image.jpg';
import IMG3 from '../../assets/dev_image.jpg';
import IMG4 from '../../assets/dev_image.jpg';
const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="project__container container portfolio__container">
        <article className='portfolio__item'>
          <div className="porfolio__item-image">
            <img src={IMG1} alt="" className='portfolio__item-image-target' />
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a target="_blank" href="htttp://dribble.com/Alien_pixels" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="porfolio__item-image">
            <img src={IMG1} alt="" className='portfolio__item-image-target' />
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a target="_blank" href="htttp://dribble.com/Alien_pixels" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="porfolio__item-image">
            <img src={IMG1} alt="" className='portfolio__item-image-target' />
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a target="_blank" href="htttp://dribble.com/Alien_pixels" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="porfolio__item-image">
            <img src={IMG1} alt="" className='portfolio__item-image-target' />
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a target="_blank" href="htttp://dribble.com/Alien_pixels" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="porfolio__item-image">
            <img src={IMG1} alt="" className='portfolio__item-image-target' />
          </div>
          <h3>This is a portfolio item</h3>
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