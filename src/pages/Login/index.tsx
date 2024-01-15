import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { InputField, LoginContainer, LoginForm, SubmitButton } from './styles'
import login from '../../bancodedados'
import { useNavigate } from 'react-router'

export const Login = () => {
  const verifyCredentials = (enteredLogin: string, enteredPassword: string) => {
    const { login: correctLogin, password: correctPassword } = login
    return enteredLogin === correctLogin && enteredPassword === correctPassword
  }

  const navigation = useNavigate()

  const [loginData, setLoginData] = useState({
    login: '',
    password: '',
  })

  const handleSubmit = (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault()

    if (verifyCredentials(loginData.login, loginData.password)) {
      Cookies.set('autenticado', 'true', { expires: 1 })
      navigation('/')
      console.log('login bem sucedido ')
    } else {
      toast.error('Login ou senha incorretos!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setLoginData({
      ...loginData,
      [name]: value,
    })

    console.log(setLoginData)
  }

  // console.log(handleInputChange, 'handle')

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="login"
          placeholder="Login"
          value={loginData.login}
          onChange={handleInputChange}
        />
        <InputField
          type="password"
          name="password"
          placeholder="Senha"
          value={loginData.password}
          onChange={handleInputChange}
        />
        <SubmitButton type="submit">Entrar</SubmitButton>
      </LoginForm>
    </LoginContainer>
  )
}
