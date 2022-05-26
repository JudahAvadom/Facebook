import React from 'react'

const SelectionField = ({ options  = [], errors, ...props } : any )  => {
    return (
        <select
            className={`register-form__select ${
                errors ? 'register-form__error' : ''
            }`}
            {...props}
        >
            {options.map((option : any) => (
                <option key={option.children} {...option} />
            ))}
        </select>
    )
}

export default SelectionField
