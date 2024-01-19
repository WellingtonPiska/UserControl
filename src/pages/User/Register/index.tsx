import Select from 'react-select'
import { v4 as uuidv4 } from 'uuid'

import {
  BackLink,
  Button,
  ErrorMessage,
  Form,
  FormWrapper,
  Input,
  Label,
  Spacer,
  TextArea,
  Title,
  TopBar,
} from './styles'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { ContactFormDataRegister } from '../interface'

export function Register() {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<ContactFormDataRegister>()

  const genderOptions = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' },
  ]

  const onSubmit: SubmitHandler<ContactFormDataRegister> = async (
    data: ContactFormDataRegister,
  ) => {
    // Exibir os dados do formulário no console
    console.log(data)

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

    // Redirecionar o usuário para a página de listagem após o registro bem-sucedido
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
        <Input
          type="text"
          id="name"
          {...register('name', { required: 'Nome é obrigatório' })}
        />
        <ErrorMessage hasError={!!errors.name}>
          {errors.name && errors.name.message}
        </ErrorMessage>

        <Label htmlFor="email">E-mail:</Label>
        <Input
          type="email"
          id="email"
          {...register('email', { required: 'Email é obrigatório' })}
        />
        <ErrorMessage hasError={!!errors.email}>
          {errors.email && errors.email.message}
        </ErrorMessage>

        <Label htmlFor="username">Usuário:</Label>
        <Input
          type="username"
          id="username"
          {...register('username', {
            required: 'Nome de Usuário é obrigatório',
          })}
        />
        <ErrorMessage hasError={!!errors.username}>
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
              onChange={(val) => field.onChange(val ? val.value : '')} // ajuste aqui
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
