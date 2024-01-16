import React, { useState } from 'react'
import * as C from './styles'
import { Container, Content, Label, Strong } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'
import useAuth from '../../hooks/useAuth'

export function Signup() {
  const [email, setEmail] = useState('')
  const [emailConf, setEmailConf] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const auth = useAuth() // Armazenando o contexto em uma variável

  const handleSignup = () => {
    if (!email || !emailConf || !password) {
      setError('Preencha todos os campos!')
    } else if (email !== emailConf) {
      setError('Os e-mails não são iguais')
    }

    if (auth) {
      const res = auth.signup(email, password)

      if (res) {
        setError(res)
        return
      }

      alert('Usuário cadastrado com sucesso!')
      navigate('/')
    }
  }

  return (
    <Container>
      <Label>SISTEMA DE LOGIN</Label>
      <Content>
        <Input
          type="email"
          placeholder="Digite o seu E-mail"
          value={email}
          onChange={(event) => [setEmail(event.target.value), setError('')]}
        />
        <Input
          type="email"
          placeholder="Confirme o seu E-mail"
          value={emailConf}
          onChange={(event) => [setEmailConf(event.target.value), setError('')]}
        />
        <Input
          type="password"
          placeholder="Digite a sua senha"
          value={password}
          onChange={(event) => [setPassword(event.target.value), setError('')]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <Strong>
            <Link to="/signup">&nbsp;Entre</Link>
          </Strong>
        </C.LabelSignin>
      </Content>
    </Container>
  )
}
