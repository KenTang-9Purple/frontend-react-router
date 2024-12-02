import React from 'react'
import {pillars} from "./data.js"
import Pillar from "./Pillar"
function Pillars() {
    return (
        <section className="section" id="pillars" >
            <div className="section-title">
                <h2>四大<span>支柱</span></h2>
            </div>
            <div className="section-center featured-center">
                {pillars.map((pillar,i)=>
                    <Pillar key={"ABC" + i} pi={pillar} />
                )}
            </div>
        </section>
    )
}

export default Pillars