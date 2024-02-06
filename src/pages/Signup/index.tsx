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
    // formState: { errors },
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
              </InputBox>

              <InputBox>
                <label>Nome</label>
                <Input
                  type="text"
                  placeholder="Digite o seu Nome"
                  {...register('name')}
                />
              </InputBox>

              <InputBox>
                <label>Sobrenome</label>
                <Input
                  type="text"
                  placeholder="Digite o seu Sobrenome"
                  {...register('lastName')}
                />
              </InputBox>

              <InputBox>
                <label>Data de Nascimento</label>
                <Input
                  type="date"
                  placeholder="Digite a sua Data de Nascimento"
                  {...register('dateOfBirth')}
                />
              </InputBox>

              <InputBox>
                <label>E-mail</label>
                <Input
                  type="text"
                  placeholder="Digite o seu E-mail"
                  {...register('email')}
                />
              </InputBox>

              <InputBox>
                <label>Confirme o E-mail</label>
                <Input
                  type="text"
                  placeholder="Confirme o seu E-mail"
                  {...register('emailConf')}
                />
              </InputBox>

              <InputBox>
                <label>Senha</label>
                <Input
                  type="password"
                  placeholder="Digite a sua senha"
                  {...register('password')}
                />
              </InputBox>

              <InputBox>
                <label>Confirme a sua senha</label>
                <Input
                  type="password"
                  placeholder="Digite a sua senha"
                  {...register('passwordConf')}
                />
              </InputBox>

              <RegisterButton>
                <Button>Registrar</Button>
              </RegisterButton>
            </InputGroup>

            <ContainerUnderScreen>
              <label>
                Já tem uma conta?{' '}
                <Strong>
                  <Link to="/signin">&nbsp;Entre</Link>
                </Strong>
              </label>
            </ContainerUnderScreen>
          </form>
        </FormContainer>
      </Container>
    </ContainerForAll>
  )
}
