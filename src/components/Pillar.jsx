import React from 'react'
import { Link } from 'react-router-dom'

function Pillar({pi}) {
    return (
            <article className="pillar-card">
                    <div className="pillar-img-container">
                        <img src={pi.image}  className="pillar-img"/>
                        <p className="pillar-point">{pi.points[0]}</p>
                    </div>
                    <div className="pillar-info">
                        <h4>{pi.text}</h4>
                        <p>{pi.desc}
                        </p>
                    </div>
                    <div className="pillar-footer">
                        <ul className="pillar-footer-info">
                            <li>{pi.points[1]}</li>
                            <li>{pi.points[2]}</li>
                            <li>{pi.points[3]}</li>
                        </ul>
                    </div>
            </article>

    )
}

export default Pillar