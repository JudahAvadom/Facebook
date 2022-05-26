import { getDays, getMonths, getYears } from '../Utils'

function useDateOfBirth({ value, errors, onChange, onFocus, onBlur } : any) {
    const normalizeTargetInput = (e : any) => {
        const { value: newValue, name: inputName } = e.target
        return { name: 'date', value: { ...value, [inputName]: +newValue } }
    }

    const handleChange = (e : any) => {
        const target = normalizeTargetInput(e)
        onChange({ target })
    }

    const handleFocus = (e : any) => {
        const target = normalizeTargetInput(e)
        onFocus({ target })
    }

    const handleBlur = (e : any) => {
        const target = normalizeTargetInput(e)
        onBlur({ target })
    }

    return {
        values: {
            day: value.day,
            month: value.month,
            year: value.year
        },
        options: {
            days: getDays(),
            months: getMonths(),
            years: getYears()
        },
        errors,
        handlers: {
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: handleBlur
        }
    }
}

export { useDateOfBirth }
