import PropTypes from 'prop-types'

import React from 'react'
import AddTask from './AddTask'
import Button from './Button'

const Header = ({title,onAdd}) => {
    console.log("tesst",onAdd)
    return (
            <header className='header'>
            <h1>{title}</h1>
            <Button color="green" text="Add" onClick={()=>onAdd()}/>
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