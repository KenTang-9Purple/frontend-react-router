import React from 'react'
import AboutItem from './AboutItem'
function About({about}) {
  return (
    <section className="section">
    <div className="section-title">
        <h2>{about.t}<span>{about.st}</span></h2>
    </div>
    <div className="section-center about-center">
        <div className="about-img">
            <img src={about.image} className="about-photo"/>
        </div>
        <article className="about-info">
            {
                about.d.map((item,i) => 
                    <AboutItem key={i} aboutItem={item}></AboutItem>)
            }
        </article>
    </div>
    </section> 
  )
}

export default About