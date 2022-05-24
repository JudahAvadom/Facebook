import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ variant = 'primary', children, ...props }: any) => {
    return (
        <button className={`button button--${variant}`} {...props}>
            {children}
        </button>
    )
}

const ButtonLink = ({ variant = 'primary', children, ...props }: any) => {
    return (
        <Link className={`button-link button-link--${variant}`} {...props}>
            {children}
        </Link>
    )
}

export { Button, ButtonLink }