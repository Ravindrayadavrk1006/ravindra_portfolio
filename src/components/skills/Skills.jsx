import React from 'react'
import './skills.css';
import {BsPatchCheckFill} from 'react-icons/bs'
const Skills = () => {
  return (
    <section id='skills'>
      <h5>What skills I have</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        {/* firstPart */}
        <div className="experience__frontend">
          <h3>Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>Java</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" size={25}/>
              <h4>Algorithm and Data Structures</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" size={45}/>
              <h4>All Core CSE subjects with in depth and clear understanding</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>C language</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>C++</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>CSS</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>More Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>Node.Js</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>Mongdb</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>SQL</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>Bootsrap</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>Express</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>Python(basic)</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>Web Designing(figma)</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Skills