export interface PasswordChangeModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (
    oldPassword: string,
    newPassword: string,
    confirmNewPassword: string,
  ) => void
}

export type FormData = {
  oldPassword: string
  newPassword: string
  confirmNewPassword: string
}
