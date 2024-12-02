import React from 'react'

function Value({va}) {
  return (
    <article className="value">
                    <span className="value-icon">
                        <i className={ va.icon}></i>
                    </span>
                    <div className="value-info">
                        <h4 className="value-title">
                            {va.text}
                        </h4>
                        <p className="value-text">{va.desc}
                        </p>
                    </div>
                </article>
  )
}

export default Value