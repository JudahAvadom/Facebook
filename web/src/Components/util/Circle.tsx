import React from 'react'
import { ReactComponentProps } from '../../Interfaces/ReactComponent.interfaces'

const Circle: React.FC<ReactComponentProps> = ({ children }) => {
    return <div className="btn-circle">{children}</div>
}

export default Circle
