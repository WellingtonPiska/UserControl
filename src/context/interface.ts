import { ReactNode } from 'react'
import { SignupFormFields } from '../pages/Signup/interface.ts'

export interface User {
  email: string
  password: string
}

export interface AuthContextType {
  user: User | null
  signed: boolean
  signin: (email: string, password: string) => string | void
  signup: ({
    email,
    password,
    cpf,
    name,
    lastName,
    dateOfBirth,
  }: SignupFormFields) => string | void
  signout: () => void
}

export interface AuthProviderProps {
  children: ReactNode
}
