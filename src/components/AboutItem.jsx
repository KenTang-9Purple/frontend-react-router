import React from 'react'

function AboutItem({aboutItem,k}) {
  return <>
    <h3 key={k*2}>{aboutItem.h3}</h3>
    <p key={k*2+1}>{aboutItem.p}</p>
  </>
}

export default AboutItem



/*
<h3>{about.d[0].h3}</h3>
<p>{about.d[0].p}</p>
<h3>{about.d[1].h3}</h3>
<p>{about.d[1].p}</p>
<h3>{about.d[2].h3}</h3>
<p>{about.d[2].p}</p>
*/