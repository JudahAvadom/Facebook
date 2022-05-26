import React from 'react'
import { useMutation } from '@apollo/client'
import { Link } from 'react-router-dom'
import useField from '../../Hooks/useField'
import { Button, ButtonLink } from '../util/Button'
import { Input, InputPassword } from '../util/Input'
import { useUser } from '../../Hooks/useUser'
import { LOGIN_USER } from '../../Graphql/LOGIN_USER'

const LoginForm = ({ handleSignUp } : any) => {
    const { handleLogin } = useUser()
    const email = useField('email')
    const password = useField('password')

    const [loginUser, { data }] = useMutation(LOGIN_USER, {
        variables: {
            email: email.value,
            password: password.value
        },
        onCompleted: ({ login: response }) => {
            handleLogin(response)
            console.log({ data, response })
        }
    })

    const handleSubmit = (e : any) => {
        e.preventDefault()
        loginUser()
    }

    return (
        <div className="loginform__wrapper">
            <form onSubmit={handleSubmit}>
                <Input
                    {...email}
                    placeholder="Correo electrónico o número de teléfono"
                />
                <InputPassword {...password} placeholder="Contraseña" />
                <div className="loginform__container">
                    <Button type="submit">Iniciar sesión</Button>
                </div>
                <div className="loginform__container--margin-top">
                    <Link to="/">¿Olvidaste tu contraseña?</Link>
                </div>
                <div className="loginform__separator" />
                <div className="loginform__container--less-padding">
                    <ButtonLink type="button" onClick={handleSignUp}>
                        Crear cuenta nueva
                    </ButtonLink>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
