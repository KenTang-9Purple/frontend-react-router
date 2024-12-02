import React from 'react'
import { Link } from 'react-router-dom'

function PageLink({link,itemClass}) {
  return (
    <li><Link to={link.href} className={itemClass}>{link.text}</Link></li>
  )
}



export default PageLink