import React from 'react'

function IconLink({link,itemClass}) {
  return (
    <li>
        <a href={link.href} className={itemClass} target='_blank'>
            <i className={link.icon}></i>
        </a>
    </li>
  )
}

export default IconLink