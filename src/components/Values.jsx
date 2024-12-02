import React from 'react'
import {values} from "./data.js"
import Value from './Value'

function Values() {
    return (
        <section className="section" id="values">
            <div className="section-title">
                <h2>我們的<span>核心價值</span></h2>
            </div>
            <div className="section-center values-center">
                {values.map((v,i) => 
                    <Value key={i} va={v}/>
                )}
            </div>
        </section>
    )
}

export default Values