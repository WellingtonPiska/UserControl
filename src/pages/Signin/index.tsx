import { useNavigate, Link } from 'react-router-dom'
import * as C from './styles'
import { SubmitHandler, useForm } from 'react-hook-form'

import useAuth from '../../hooks/useAuth'
import { LoginFormFields } from './interface'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSignin } from './schema'
import { toast } from 'react-toastify'

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
      console.log(res, 'aaa')

      if (res) {
        return
      }

      toast.success('Login efetuado com sucesso!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
      navigate('/home')
    }
  }

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <form onSubmit={handleSubmit(handleLogin)}>
          {' '}
          <C.LabelFields htmlFor="email">E-mail</C.LabelFields>
          <C.Input
            type="email"
            placeholder="Digite o seu E-mail"
            {...register('email')}
          />
          {errors.email && <C.labelError>{errors.email.message}</C.labelError>}
          <C.LabelFields htmlFor="password">Senha</C.LabelFields>
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
