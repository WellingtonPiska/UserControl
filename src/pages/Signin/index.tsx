import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Container, ContainerUnderScreen, FormImage } from './styles.ts'
import SigninImage from '../../assets/SigninImage.svg'

import useAuth from '../../hooks/useAuth'
import { LoginFormFields } from './interface'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSignin } from './schema'
import { toast } from 'react-toastify'
import {
  ContainerForAll,
  FormContainer,
  IconPassword,
  InputContainerForPassword,
  InputGroup,
  Input,
  InputBox,
  Button,
  RegisterButton,
  FormHeader,
  Title,
  TitleUnderline,
  Strong,
  Img,
  StyledErrorMessage,
} from './styles'

export function Signin() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

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

  const ErrorMessage: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    return (
      <StyledErrorMessage
        style={{ visibility: children ? 'visible' : 'hidden' }}
      >
        {children}
      </StyledErrorMessage>
    )
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <ContainerForAll>
      <Container>
        <FormImage>
          <Img src={SigninImage} />
          {/* <Img src="../../assets/SigninImage.svg.svg" alt="" /> */}
        </FormImage>
        <FormContainer>
          <form onSubmit={handleSubmit(handleLogin)} style={{ width: '90%' }}>
            <FormHeader>
              <Title>
                Entrar
                <TitleUnderline />
              </Title>
            </FormHeader>

            <InputGroup>
              <InputBox>
                <label>E-mail</label>
                <Input
                  type="email"
                  placeholder="Digite o seu E-mail"
                  {...register('email')}
                />
                <ErrorMessage>
                  {errors.email && errors.email.message}
                </ErrorMessage>
              </InputBox>

              <InputBox style={{ marginTop: '10px' }}>
                <label>Senha</label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <Input
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder="Digite a sua Senha"
                    {...register('password')}
                  />
                  <InputContainerForPassword>
                    <IconPassword onClick={togglePasswordVisibility}>
                      {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                    </IconPassword>
                  </InputContainerForPassword>
                </div>
                <ErrorMessage>
                  {errors.password && errors.password.message}
                </ErrorMessage>
              </InputBox>
            </InputGroup>

            <RegisterButton style={{ marginTop: '0px' }}>
              <Button type="submit">Entrar</Button>
            </RegisterButton>

            <ContainerUnderScreen>
              <label>
                Ainda não tem uma conta?{' '}
                <Strong>
                  <Link to="/signup">&nbsp;Criar</Link>
                </Strong>
              </label>
            </ContainerUnderScreen>
          </form>
        </FormContainer>
      </Container>
    </ContainerForAll>
  )
}
