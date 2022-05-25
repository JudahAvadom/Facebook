import React from 'react'
import ReactDOM from 'react-dom'

const modalContainer = document.getElementById('modal-root')

const ModalElement = ({ children, visible = false } : any) => {
    return (
        <div className={`modal ${visible ? 'modal--visible' : ''}`}>
            <div className="modal__wrapper"></div>
            <div className="modal__child">{visible && children}</div>
        </div>
    )
}

const Modal = ({ ...props }) => {
    return modalContainer
        ? ReactDOM.createPortal(<ModalElement {...props} />, modalContainer)
        : null
}

export default Modal
