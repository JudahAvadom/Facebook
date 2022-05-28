import React from 'react'
import { ReactComponentProps } from '../../Interfaces/ReactComponent.interfaces'

const Dropdown: React.FC<ReactComponentProps> = ({ children }) => {
    return <div className='dropdown__navbar'>{children}</div>
}

export default Dropdown
