import * as C from './styles'
import { Container, Content, Label, LabelFields, Strong } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

import { SubmitHandler, useForm } from 'react-hook-form'
import { SignupFormFields } from './interface'
import { validationSignup } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'

export function Signup() {
  const navigate = useNavigate()

  const auth = useAuth() // Armazenando o contexto em uma variável

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormFields>({
    resolver: yupResolver(validationSignup),
  })

  const handleSignup: SubmitHandler<SignupFormFields> = async (data) => {
    const { email, password } = data

    if (auth) {
      const res = auth.signup(email, password)

      if (res) {
        console.error(res)
      }

      alert('Usuário cadastrado com sucesso!')
      navigate('/')
    }
  }

  return (
    <Container>
      <Label>SISTEMA DE LOGIN</Label>
      <Content>
        <form onSubmit={handleSubmit(handleSignup)}>
          <LabelFields htmlFor="email">E-mail</LabelFields>
          <C.Input
            type="text"
            placeholder="Digite o seu E-mail"
            {...register('emailConf')}
          />
          {errors.email && <C.labelError>{errors.email.message}</C.labelError>}
          <LabelFields htmlFor="email">Confirme o E-mail</LabelFields>
          <C.Input
            type="text"
            placeholder="Confirme o seu E-mail"
            {...register('email')}
          />
          {errors.emailConf && (
            <C.labelError>{errors.emailConf.message}</C.labelError>
          )}{' '}
          <LabelFields htmlFor="email">Senha</LabelFields>
          <C.Input
            type="password"
            placeholder="Digite a sua senha"
            {...register('password')}
          />
          {errors.password && (
            <C.labelError>{errors.password.message}</C.labelError>
          )}
          <C.Button type="submit">Registrar</C.Button>{' '}
        </form>{' '}
        <C.LabelSignin>
          Já tem uma conta?
          <Strong>
            <Link to="/signin">&nbsp;Entre</Link>
          </Strong>
        </C.LabelSignin>
      </Content>
    </Container>
  )
}
