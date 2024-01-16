import { useNavigate, Link } from 'react-router-dom'
import React, { useState } from 'react'
import * as C from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'
import useAuth from '../../hooks/useAuth'

export function Signin() {
  const auth = useAuth() // Armazenando o contexto em uma variável

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (!email || !password) {
      setError('Preencha todos os campos')
      return // Adicionando um retorno aqui para evitar execução adicional quando houver erro
    }

    if (auth) {
      const res = auth.signin(email, password)

      if (res) {
        setError(res)
        return
      }

      navigate('/list')
    }
  }

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite o seu E-mail"
          value={email}
          onChange={(event) => [setEmail(event.target.value), setError('')]}
        />
        <Input
          type="password"
          placeholder="Digite a sua Senha"
          value={password}
          onChange={(event) => [setPassword(event.target.value), setError('')]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  )
}
