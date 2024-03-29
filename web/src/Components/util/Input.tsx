import React, { useState } from 'react'

const Input = ({ labelValue, ...props }: any) => {
    return (
        <div className="input">
            {labelValue ?? <label className="input__label">{labelValue}</label>}
            <input className="input__element" spellCheck="false" {...props} />
        </div>
    )
}

const InputPassword = ({ labelValue, ...props }: any) => {
    const [show, setShow] = useState(false)
    return (
        <div className="input">
            {labelValue ?? <label className="input__label">{labelValue}</label>}
            <div className="input__wrapper">
                <input
                    className="input__element"
                    autoComplete="off"
                    spellCheck="false"
                    {...props}
                    type={show ? 'text' : 'password'}
                />
                {props.value && props.value !== '' && (
                    <span className="input__btn-password" onClick={() => setShow((prev) => !prev)}>
                        {show ? (
                            <div className="input__password--icon-eye" />
                        ) : (
                            <div className="input__password--icon-eye-off" />
                        )}
                    </span>
                )}
            </div>
        </div>
    )
}

export { Input, InputPassword }