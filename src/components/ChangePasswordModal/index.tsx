import React, { useState } from 'react'
import {
  ModalBackdrop,
  ModalContainer,
  Button,
  Input,
  ModalTitle,
} from './styles'
import { PasswordChangeModalProps } from './schema'

export const PasswordChangeModal = ({
  isOpen,
  onClose,
}: PasswordChangeModalProps) => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  if (!isOpen) return null

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalTitle>Alterar Senha</ModalTitle>
        <Input
          type="password"
          placeholder="Senha Atual"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Nova Senha"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button
          onClick={() => {
            /* Lógica de alteração de senha */
          }}
        >
          Alterar Senha
        </Button>
      </ModalContainer>
    </ModalBackdrop>
  )
}
