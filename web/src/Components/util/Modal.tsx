import React from 'react'
import ReactDOM from 'react-dom'
import { ReactComponentProps } from '../../Interfaces/ReactComponent.interfaces'

const modalContainer = document.getElementById('modal-root')

const ModalElement = ({ children, visible = false } : ReactComponentProps) => {
    return (
        <div className={`modal ${visible ? 'modal--visible' : ''}`}>
            <div className="modal__wrapper"></div>
            <div className="modal__child">{visible && children}</div>
        </div>
    )
}

const Modal = ({ ...props } : any) => {
    return modalContainer
        ? ReactDOM.createPortal(<ModalElement {...props} />, modalContainer)
        : null
}

export default Modal
