import Select from 'react-select'
import { v4 as uuidv4 } from 'uuid'

import {
  FormWrapper,
  BackLink,
  Title,
  Form,
  Label,
  Input,
  TextArea,
  Button,
  StyledErrorMessage,
} from '../stylesForRegisterAndUpdate.ts'
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Title>Registro</Title>
        <BackLink href="/list">Página de Listagem</BackLink>
      </div>

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
              isSearchable={false}
              styles={{
                container: (base) => ({
                  ...base,
                  marginBottom: '0.6rem',
                  width: '100%',
                }),
                control: (base) => ({
                  ...base,
                  height: '44px',
                  border: '1px solid #ccc',
                  padding: '0.3rem',
                  borderRadius: '10px',
                  marginTop: '6px',
                  boxShadow: '1px 1px 6px #0000001c',
                  fontSize: '0.8rem',
                  backgroundColor: '#fbfbfd',
                  '&:hover': {
                    backgroundColor: '#eeeeee75',
                  },
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: '#fbfbfd',
                }),
                option: (base, { isFocused }) => ({
                  ...base,
                  backgroundColor: isFocused ? '#f0f0f0' : '#fbfbfd',
                  color: 'black',
                }),
              }}
              value={genderOptions.find(
                (option) => option.value === field.value,
              )}
              onChange={(val) => field.onChange(val ? val.value : '')}
            />
          )}
        />

        <Label htmlFor="message" style={{ marginTop: '20px' }}>
          Mensagem:
        </Label>
        <TextArea id="message" rows={4} {...register('message')} />
        <Button type="submit">Registrar</Button>
      </Form>
    </FormWrapper>
  )
}
