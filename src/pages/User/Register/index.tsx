import Select from 'react-select'
import { v4 as uuidv4 } from 'uuid'

import {
  BackLink,
  Button,
  Form,
  FormWrapper,
  Input,
  Label,
  Spacer,
  StyledErrorMessage,
  TextArea,
  Title,
  TopBar,
} from './styles'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { ContactFormDataRegister } from '../interface'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationRegister } from './schema'

export function Register() {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<ContactFormDataRegister>({
    resolver: yupResolver(validationRegister),
  })

  const genderOptions = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' },
  ]

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

  const onSubmit: SubmitHandler<ContactFormDataRegister> = async (
    data: ContactFormDataRegister,
  ) => {
    // Lógica para processar os dados, como enviar para o servidor ou realizar outras ações necessárias.
    // Aqui você pode adicionar a lógica de envio para o servidor, validação, etc.

    // Verificar se já existem dados no localStorage
    const existingData = localStorage.getItem('formDataList')
    const formDataListArray = existingData ? JSON.parse(existingData) : []

    // Adicionar um UUID ao formData
    const formDataWithId = { ...data, id: uuidv4() }

    // Adicionar o novo registro à lista de dados
    formDataListArray.push(formDataWithId)

    // Salvar a lista atualizada no localStorage
    localStorage.setItem('formDataList', JSON.stringify(formDataListArray))

    // Exibir mensagem de sucesso para o usuário
    toast.success('Formulário criado com sucesso!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })

    navigate('/list')
  }

  return (
    <FormWrapper>
      <TopBar>
        <Spacer /> {/* Espaçador para empurrar o BackLink para a direita */}
        <BackLink href="/list">Página de Listagem</BackLink>
      </TopBar>

      <Title>Registro</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">Nome:</Label>
        <Input type="text" id="name" {...register('name')} />
        <ErrorMessage>{errors.name && errors.name.message}</ErrorMessage>

        <Label htmlFor="email">E-mail:</Label>
        <Input type="email" id="email" {...register('email')} />
        <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>

        <Label htmlFor="username">Usuário:</Label>
        <Input type="username" id="username" {...register('username')} />
        <ErrorMessage>
          {errors.username && errors.username.message}
        </ErrorMessage>

        <Label htmlFor="gender">Sexo:</Label>

        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={genderOptions}
              styles={{
                container: (base) => ({ ...base, marginBottom: '16px' }),
              }}
              value={genderOptions.find(
                (option) => option.value === field.value,
              )}
              onChange={(val) => field.onChange(val ? val.value : '')}
            />
          )}
        />

        <Label htmlFor="message">Mensagem:</Label>
        <TextArea id="message" rows={4} {...register('message')} />
        <Button type="submit">Enviar</Button>
      </Form>
    </FormWrapper>
  )
}
