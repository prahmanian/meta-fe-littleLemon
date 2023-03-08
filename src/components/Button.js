import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({to, type, children, onClick}) => {
    return (
        <Link className="Button-link" to={to}><button type="button" className={`Button Button-${type}`} onClick={onClick}>{children}</button></Link>
    )
}

export default Button