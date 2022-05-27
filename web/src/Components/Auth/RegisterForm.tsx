import React from 'react'
import DateOfBirthField from './RegisterForm/DateOfBirthField'
import GenderField from './RegisterForm/GenderField'
import InputField from './RegisterForm/InputField'
import PasswordField from './RegisterForm/PasswordField'
import PoliciesSection from './RegisterForm/PoliciesSection'
import {
    useRegister,
} from './RegisterForm/hooks/useRegister'
import { ReactComponentProps } from '../../Interfaces/ReactComponent.interfaces'

const RegisterForm : React.FC<ReactComponentProps>= ({ handleClose }) => {
    const { fields, handleSubmit } = useRegister()
    
    return (
        <div className="register-form__wrapper">
            <div className="register-form__container">
                <button
                    className="register-form__btn-close"
                    onClick={handleClose}
                >
                    <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
                        alt="close-btn-form"
                        width="24"
                        height="24"
                    />
                </button>
                <header className="register-form__header">
                    <h3 className="register-form__title">Registrarte</h3>
                    <p className="register-form__subtitle">
                        Es rápido y fácil.
                    </p>
                </header>
                <form className="register-form__form" onSubmit={handleSubmit}>
                    <section className="register-form__section-fields">
                        <InputField {...fields.name} />
                        <InputField {...fields.lastname} />
                    </section>
                    <InputField {...fields.email} />
                    <PasswordField {...fields.password} />
                    <DateOfBirthField {...fields.date} />
                    <GenderField {...fields.gender} />
                    <PoliciesSection />
                    <div className="register-form__wrapper-btn">
                        <button
                            type="submit"
                            className="register-form__btn-submit"
                        >
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm
