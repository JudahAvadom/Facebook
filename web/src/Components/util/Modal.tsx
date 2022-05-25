import React from 'react'
import ReactDOM from 'react-dom'

const modalContainer = document.getElementById('modal-root')

const ModalElement = ({ children }: any) => {
    return <div className="modal__wrapper">{children}</div>
}

const Modal = ({ children } : any) => {
    return modalContainer
        ? ReactDOM.createPortal(
              <ModalElement>{children}</ModalElement>,
              modalContainer
          )
        : null
}

export default Modal
