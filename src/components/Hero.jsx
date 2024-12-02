import React from 'react'
import { heros } from "./data.js"

function Hero({heroName}) {
  return <>
    {
      heros.filter((hero) => hero.name == heroName).map((hero, i)=> 
        <section className={"hero " + hero.name} key={i}>
          <div className="hero-banner">
            <h1>{hero.text}</h1>
            <p>{hero.desc}</p>
          </div>
        </section>
      ) 
    }
  </>
}

export default Hero