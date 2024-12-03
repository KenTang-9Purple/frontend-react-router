import React from 'react'
import { Link } from 'react-router-dom'

function PageLink({link,itemClass}) {
  return (link.href.includes("https://") || link.href.includes("http://")  ?
    <li><Link to={link.href} className={itemClass}>{link.text}</Link></li>:
    <li><a href={link.href} className={itemClass}>{link.text}</a></li>
  )
}



export default PageLink
/*
return (
  <li><Link to={link.href} className={itemClass}>{link.text}</Link></li>
)
  */