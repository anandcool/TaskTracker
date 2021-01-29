import PropTypes from 'prop-types'

import React from 'react'
import Button from './Button'

const Header = (props) => {
    return (
            <header className='header'>
            <h1>{props.title}</h1>
            <Button color="green" text="Add"/>
            </header>
    )
}

Header.defaultProps ={
    title:"Header Component1"
}

Header.propTypes = {
    title:PropTypes.string.isRequired
}
export default Header