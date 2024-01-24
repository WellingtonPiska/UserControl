import { ReactNode } from 'react'

export interface User {
  email: string
  password: string
}

export interface AuthContextType {
  user: User | null
  signed: boolean
  signin: (email: string, password: string) => string | void
  signup: (email: string, password: string) => string | void
  signout: () => void
}

export interface AuthProviderProps {
  children: ReactNode
}


