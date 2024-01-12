import React from 'react'
import { ModalProps } from './interface'
import { ModalBackdrop, ModalContent } from './styles'

const ModalDelete: React.FC<ModalProps> = ({ children }) => {
  return (
    <ModalBackdrop className="modal-backdrop">
      <ModalContent className="modal-content">{children}</ModalContent>
    </ModalBackdrop>
  )
}

export default ModalDelete
