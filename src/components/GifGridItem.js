import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ( {title, url} ) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <h3>{ title }</h3>
        </div>
    )
}

GifGridItem.PropTypes={
    title : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
}

