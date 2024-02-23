import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { HiOutlineKey } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Container, ContainerUnderScreen, FormImage } from './styles.ts'
import SigninImage from '../../assets/SigninImage.svg'
import { Input } from '../../components/Input'

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
  InputBox,
  RegisterButton,
  FormHeader,
  Title,
  TitleUnderline,
  Strong,
  Img,
} from './styles'
import { ErrorMessage } from '../../components/ErrorMessage'
import { Button } from '../../components/Button'

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

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <ContainerForAll>
      <Container>
        <FormImage>
          <Img src={SigninImage} />
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

                <div
                  style={{
                    position: 'absolute',
                    top: '35%',
                    left: '10px',
                    color: 'gray',
                    transform: 'translateY(20%)',
                  }}
                >
                  <AiOutlineUser />
                </div>
                <Input
                  type="email"
                  placeholder="Digite o seu E-mail"
                  {...register('email')}
                  style={{ paddingLeft: '34px' }}
                />
                <ErrorMessage>
                  {errors.email && errors.email.message}
                </ErrorMessage>
              </InputBox>

              <InputBox>
                <label>Senha</label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '35%',
                      left: '10px',
                      color: 'gray',
                      transform: 'translateY(10%)',
                    }}
                  >
                    <HiOutlineKey />
                  </div>

                  <Input
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder="Digite a sua Senha"
                    {...register('password')}
                    style={{ paddingLeft: '34px' }}
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
