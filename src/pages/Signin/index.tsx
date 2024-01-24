import { useNavigate, Link } from 'react-router-dom'
import * as C from './styles'
import { SubmitHandler, useForm } from 'react-hook-form'

import useAuth from '../../hooks/useAuth'
import { LoginFormFields } from './interface'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSignin } from './schema'

export function Signin() {
  const auth = useAuth() // Armazenando o contexto em uma variável
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: yupResolver(validationSignin),
  })

  const navigate = useNavigate()

  const handleLogin: SubmitHandler<LoginFormFields> = async (data) => {
    const { email, password } = data

    if (auth) {
      const res = auth.signin(email, password)

      if (res) {
        return
      }

      navigate('/list')
    }
  }

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <form onSubmit={handleSubmit(handleLogin)}>
          {' '}
          <C.Input
            type="email"
            placeholder="Digite o seu E-mail"
            {...register('email')}
          />
          {errors.email && <C.labelError>{errors.email.message}</C.labelError>}
          <C.Input
            type="password"
            placeholder="Digite a sua Senha"
            {...register('password')}
          />
          {errors.password && (
            <C.labelError>{errors.password.message}</C.labelError>
          )}
          <C.Button type="submit">Entrar</C.Button>{' '}
          {/* Mudança para type="submit" */}
        </form>{' '}
        {/* Fechando a tag form */}
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
