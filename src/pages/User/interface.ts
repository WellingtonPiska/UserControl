export interface ContactFormData {
  id: string
  name: string
  email: string
  username: string
  message: string
  gender: string
}

export interface ContactFormDataRegister {
  name: string
  email: string
  username: string
  message: string
  gender: string
}

export interface GenderOption {
  value: string
  label: string
}

export interface ErrorMessageProps {
  hasError: boolean
}
