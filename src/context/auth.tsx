import { createContext, useEffect, useState } from 'react'
import { AuthContextType, AuthProviderProps, User } from './interface'
import { toast } from 'react-toastify'
import { SignupFormFields } from '../pages/Signup/interface.ts'

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const userToken = localStorage.getItem('user_token')
    const usersStorage = localStorage.getItem('users_db')

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.find(
        (user: User) => user.email === JSON.parse(userToken).email,
      )

      // eslint-disable-next-line no-undef
      if (hasUser) setUser(hasUser)
    }
  }, [])

  const signin = (email: string, password: string): string | void => {
    const usersStorage = JSON.parse(localStorage.getItem('users_db') || '[]')

    const hasUser = usersStorage?.filter((user: User) => user.email === email)

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2)
        localStorage.setItem('user_token', JSON.stringify({ email, token }))
        setUser({ email, password })
      } else {
        toast.error('E-mail ou senha incorretos', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
        return 'E-mail ou senha incorretos'
      }
    } else {
      toast.error('Usuário não cadastrado', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
      return 'Usuário não cadastrado'
    }
  }

  const signup = ({
    email,
    password,
    cpf,
    name,
    lastName,
    dateOfBirth,
  }: SignupFormFields) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_db') || '[]')

    const hasUser = usersStorage?.filter((user: User) => user.email === email)

    if (hasUser?.length) {
      toast.error('Já tem uma conta com esse E-mail', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
      return 'Já tem uma conta com esse E-mail'
    }

    let newUser

    if (usersStorage) {
      newUser = [
        ...usersStorage,
        { email, password, cpf, name, lastName, dateOfBirth },
      ]
    } else {
      newUser = [{ email, password, cpf, name, lastName, dateOfBirth }]
    }

    localStorage.setItem('users_db', JSON.stringify(newUser))
  }

  const signout = () => {
    setUser(null)
    localStorage.removeItem('user_token')
  }

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
