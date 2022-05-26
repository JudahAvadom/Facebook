import { useState } from 'react'

export default function useForm(initialValues : any, validateValues : any ) {
    const [values, setValues] = useState(initialValues)
    const [touched, setTouched] = useState([])
    const [errors, setErrors] = useState({})

    const checkTouchedFields = (errors : any) => {
        const newErrors = { ...errors }
        Object.keys(newErrors).forEach((input) => {
            if (!touched.includes(input)) delete newErrors[input]
        })
        return newErrors
    }

    const checkErrors = () => {
        setTouched((prev) : any => {
            const newvalues = Object.keys(values).filter(
                (value) => !prev.includes(value)
            )
            return [...prev, ...newvalues]
        })
        setErrors(validateValues(values))
        return validateValues(values)
    }

    const handleChange = (event : any) => {
        const { name, value } = event.target
        setValues((prev : any) => ({ ...prev, [name]: value }))
        setTouched((prev) => {
            if (!prev.includes(name)) return [...prev, name]
            return prev
        })
    }

    const handleBlur = (event : any) => {
        handleChange(event)
        setErrors(validateValues(values))
    }

    const handleFocus = (event : any) => {
        const { name } = event.target
        setErrors((prev) => {
            const newErrors : any = { ...prev }
            Object.keys(newErrors).forEach((input) => {
                if (input === name) delete newErrors[input]
            })
            return newErrors
        })
    }

    return {
        values,
        errors: checkTouchedFields(errors),
        handleChange,
        handleBlur,
        handleFocus,
        checkErrors
    }
}
