import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div>
      <button onClick={onClose}>Close</button>
      {children}
    </div>
  )
}

export default Modal
