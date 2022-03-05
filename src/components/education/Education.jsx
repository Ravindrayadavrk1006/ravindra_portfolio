import React from 'react';
import './education.css';
const Education = () => {
  return (
    <section>
        <h5>My Education</h5>
        <h2>degrees</h2>
        <div className="education">
            <div className="line__part">
                <div className="line-vertical"></div>
                <div className="hl-1 line-horizontal"></div>
                <div className="hl-2 line-horizontal"></div>
                <div className="hl-3 line-horizontal"></div>
            </div>
            <div className="education__descriptions">
                <div className="education__particular">
                    <h3>B.Tech[computer science engineering]</h3>
                    <h4>Lovely professional University</h4>
                    <h5>2017-2021</h5>
                    <small>8.21 [cgpa]</small>
                </div>
                <div className="education__particular">
                    <h3>Senior Secondary(12th standard)</h3>
                    <h4>Ryan international School, Rae bareli</h4>
                    <h5>2015-2016</h5>
                    <small>93.5% [ICSE Board]</small>
                </div>
                <div className="education__particular">
                    <h3>High School(10th standard)</h3>
                    <h4>Ryan international School, Rae bareli</h4>
                    <h5>2013-2014</h5>
                    <small>89.4% [ICSE Board]</small>
                </div>
            </div>
        </div>
        
        
    </section>
  )
}

export default Education