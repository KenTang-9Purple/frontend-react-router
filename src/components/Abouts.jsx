import React from 'react'
import {infos} from '../components/data'
import About from './About';


function Abouts({aboutsName}) {
    return <>{
        infos.filter((info) => info.name == aboutsName)[0].data.map( (d, i) => 
            <About key={i} about={d}/>
        )
    }</>
}

export default Abouts