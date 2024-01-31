import * as C from './styles'
import {
  Container,
  ContainerColumn,
  ContainerHalfScreen,
  ContainerUnderScreen,
  ContainerWrap,
  Content,
  Label,
  LabelFields,
  Strong,
} from './styles'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { toast } from 'react-toastify'

import { SubmitHandler, useForm } from 'react-hook-form'
import { SignupFormFields, SignupFormFieldsScreen } from './interface'
import { validationSignup } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'

export function Signup() {
  const navigate = useNavigate()

  const auth = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormFieldsScreen>({
    resolver: yupResolver(validationSignup),
  })

  const handleSignup: SubmitHandler<SignupFormFields> = async (data) => {
    if (auth) {
      const res = auth.signup(data)

      if (res) {
        console.error(res)
      }

      toast.success('Registro efetuado com sucesso!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
      navigate('/')
    }
  }

  return (
    <Container>
      <Label>SISTEMA DE REGISTRO</Label>
      <Content>
        <form onSubmit={handleSubmit(handleSignup)}>
          <ContainerWrap style={{ display: 'flex', flexWrap: 'wrap' }}>
            <ContainerHalfScreen style={{ width: '50%' }}>
              <ContainerColumn
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <LabelFields htmlFor="cpf">CPF</LabelFields>
                <C.Input
                  type="text"
                  placeholder="Digite o seu CPF"
                  {...register('cpf')}
                  maxLength={11}
                />
                {errors.cpf && (
                  <C.labelError>{errors.cpf.message}</C.labelError>
                )}{' '}
              </ContainerColumn>
              <ContainerColumn
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <LabelFields htmlFor="name">Nome</LabelFields>
                <C.Input
                  type="text"
                  placeholder="Digite o seu Nome"
                  {...register('name')}
                />
                {errors.name && (
                  <C.labelError>{errors.name.message}</C.labelError>
                )}{' '}
              </ContainerColumn>
              <ContainerColumn
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <LabelFields htmlFor="Sobrenome">Sobrenome</LabelFields>
                <C.Input
                  type="text"
                  placeholder="Digite o seu Sobrenome"
                  {...register('lastName')}
                />
                {errors.lastName && (
                  <C.labelError>{errors.lastName.message}</C.labelError>
                )}{' '}
              </ContainerColumn>
              <ContainerColumn
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <LabelFields htmlFor="dateOfBirth">
                  Data de Nascimento
                </LabelFields>
                <C.Input
                  type="date"
                  placeholder="Digite a sua Data de Nascimento"
                  {...register('dateOfBirth')}
                />
                {errors.dateOfBirth && (
                  <C.labelError>{errors.dateOfBirth.message}</C.labelError>
                )}
              </ContainerColumn>
            </ContainerHalfScreen>
            <ContainerHalfScreen style={{ width: '50%' }}>
              <LabelFields htmlFor="email">E-mail</LabelFields>
              <C.Input
                type="text"
                placeholder="Digite o seu E-mail"
                {...register('email')}
              />
              {errors.email && (
                <C.labelError>{errors.email.message}</C.labelError>
              )}
              <LabelFields htmlFor="emailConf">Confirme o E-mail</LabelFields>
              <C.Input
                type="text"
                placeholder="Confirme o seu E-mail"
                {...register('emailConf')}
              />
              {/* {errors.emailConf && ( */}
              {/*  <C.labelError>{errors.emailConf.message}</C.labelError> */}
              {/* )}{' '} */}
              <LabelFields htmlFor="email">Senha</LabelFields>
              <C.Input
                type="password"
                placeholder="Digite a sua senha"
                {...register('password')}
              />
              {/* {errors.password && ( */}
              {/*  <C.labelError>{errors.password.message}</C.labelError> */}
              {/* )}{' '} */}
            </ContainerHalfScreen>
          </ContainerWrap>
          <ContainerUnderScreen
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '10px',
            }}
          >
            <C.Button type="submit">Registrar</C.Button>{' '}
            <C.LabelSignin>
              Já tem uma conta?
              <Strong>
                <Link to="/signin">&nbsp;Entre</Link>
              </Strong>
            </C.LabelSignin>
          </ContainerUnderScreen>
        </form>{' '}
      </Content>
    </Container>
  )
}
