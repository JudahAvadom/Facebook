import { useState } from 'react'

export default function useField(type : any, initValue = '') {
    const [value, setValue] = useState(initValue)

    const onChange = (event : any) => {
        setValue(event.target.value)
    }

    return { type, value, onChange }
}
