import React from 'react'

const Button = ({ variant = 'primary', children, ...props } : any) => {
    return (
        <button className={`button button--${variant}`} {...props}>
            {children}
        </button>
    )
}

const ButtonLink = ({ variant = 'primary', children, ...props } : any) => {
    return (
        <button className={`button-link button-link--${variant}`} {...props}>
            {children}
        </button>
    )
}

export { Button, ButtonLink }
