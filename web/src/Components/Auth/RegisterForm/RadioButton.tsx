import React from 'react'

const RadioButton = ({ label, errors, ...props }: any) => {
    return (
        <span
            className={`register-form__checkbox ${
                errors ? 'register-form__error' : ''
            }`}
        >
            <label htmlFor={`radio-button-${label}`}>{label}</label>
            <input type="radio" id={`radio-button-${label}`} {...props} />
        </span>
    )
}

export default RadioButton
