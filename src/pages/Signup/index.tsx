import {
  Container,
  ContainerForAll,
  FormContainer,
  FormHeader,
  InputBox,
  InputGroup,
  Input,
  Title,
  Strong,
  TitleUnderline,
  Button,
  RegisterButton,
  ContainerUnderScreen,
  StyledErrorMessage,
  IconPassword,
  InputContainerForPassword,
} from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import useAuth from '../../hooks/useAuth'
import { toast } from 'react-toastify'

import { SubmitHandler, useForm } from 'react-hook-form'
import { SignupFormFields, SignupFormFieldsScreen } from './interface'
import { validationSignup } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

export function Signup() {
  const navigate = useNavigate()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
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

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
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

  return (
    <ContainerForAll>
      <Container>
        <FormContainer>
          <form onSubmit={handleSubmit(handleSignup)}>
            <FormHeader>
              <Title>
                Cadastre-se
                <TitleUnderline />
              </Title>
            </FormHeader>

            <InputGroup>
              <InputBox>
                <label>CPF</label>
                <Input
                  type="text"
                  placeholder="Digite o seu CPF"
                  {...register('cpf')}
                  maxLength={11}
                />
                <ErrorMessage>{errors.cpf && errors.cpf.message}</ErrorMessage>
              </InputBox>

              <InputBox>
                <label>Nome</label>
                <Input
                  type="text"
                  placeholder="Digite o seu Nome"
                  {...register('name')}
                />
                <ErrorMessage>
                  {errors.name && errors.name.message}
                </ErrorMessage>
              </InputBox>

              <InputBox>
                <label>Sobrenome</label>
                <Input
                  type="text"
                  placeholder="Digite o seu Sobrenome"
                  {...register('lastName')}
                />
                <ErrorMessage>
                  {errors.lastName && errors.lastName.message}
                </ErrorMessage>
              </InputBox>

              <InputBox style={{}}>
                <label>Data de Nascimento</label>
                <Input
                  type="date"
                  placeholder="Digite a sua Data de Nascimento"
                  {...register('dateOfBirth')}
                />
                <ErrorMessage>
                  {errors.dateOfBirth && errors.dateOfBirth.message}
                </ErrorMessage>
              </InputBox>

              <InputBox>
                <label>E-mail</label>
                <Input
                  type="text"
                  placeholder="Digite o seu E-mail"
                  {...register('email')}
                />
                <ErrorMessage>
                  {errors.email && errors.email.message}
                </ErrorMessage>
              </InputBox>

              <InputBox>
                <label>Confirme o E-mail</label>
                <Input
                  type="text"
                  placeholder="Confirme o seu E-mail"
                  {...register('emailConf')}
                />
                <ErrorMessage>
                  {errors.emailConf && errors.emailConf.message}
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
                  <Input
                    type="password"
                    placeholder="Digite a sua senha"
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

              <InputBox>
                <label>Confirme a sua senha</label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <Input
                    type="password"
                    placeholder="Digite a sua senha"
                    {...register('passwordConf')}
                  />
                  <InputContainerForPassword>
                    <IconPassword onClick={togglePasswordVisibility}>
                      {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                    </IconPassword>
                  </InputContainerForPassword>
                </div>
                <ErrorMessage>
                  {errors.passwordConf && errors.passwordConf.message}
                </ErrorMessage>
              </InputBox>

              <RegisterButton style={{ marginTop: '60px' }}>
                <Button>Registrar</Button>
              </RegisterButton>
            </InputGroup>

            <ContainerUnderScreen>
              <label>
                Já tem uma conta?{' '}
                <Strong>
                  <Link to="/">&nbsp;Entre</Link>
                </Strong>
              </label>
            </ContainerUnderScreen>
          </form>
        </FormContainer>
      </Container>
    </ContainerForAll>
  )
}
