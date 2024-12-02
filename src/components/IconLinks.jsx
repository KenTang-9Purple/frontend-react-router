import React from 'react'
import { iconLinks } from "./data.js"
import IconLink from "./IconLink.jsx"
/*<PageLinks parentClass="nav-list" itemClass="nav-link" />*/
function IconLinks({parentClass, itemClass}) {
  return (
    <ul className={parentClass}>
        {iconLinks.map((iL, i)=>
            <IconLink key={i} link={iL} itemClass={itemClass} />
        )}
    </ul>
  )
}

export default IconLinks