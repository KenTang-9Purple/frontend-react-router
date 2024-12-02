import React from 'react'
import { pageLinks } from "./data.js"
import PageLink from "./PageLink"
/*<PageLinks parentClass="nav-list" itemClass="nav-link" />*/
function PageLinks({parentClass, itemClass, id}) {
  return (
    <ul className={parentClass} id={id}>
        {pageLinks.map((pL, i)=> 
            <PageLink key={i} link={pL} itemClass={itemClass} />
        )}
    </ul>
  )
}

export default PageLinks