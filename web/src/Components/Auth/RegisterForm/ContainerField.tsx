import React from 'react'

const ContainerField = ({ label = '', children, activeBtn = true } : any) => {
    return (
        <div className="register-form__wrapper-input-label">
            <div className="register-form__container-input-label">
                {label}
                {activeBtn && (
                    <a
                        className="register-form__btn-question"
                        href="#"
                        title="Haz clic para obtener más información"
                        role="button"
                    >
                        <span />
                    </a>
                )}
            </div>
            {children}
        </div>
    )
}

export default ContainerField
