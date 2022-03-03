import React from 'react'
import CV from '../../assets/Ravindra_resume.pdf'
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} className="btn">Download CV</a>
        <a className='btn btn-primary' href="#contact">Let's Talk</a>
    </div>
  )
}

export default CTA