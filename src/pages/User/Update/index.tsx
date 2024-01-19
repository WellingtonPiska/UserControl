import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
  BackLink,
  Form,
  FormWrapper,
  Input,
  Label,
  Spacer,
  Title,
  TopBar,
  TextArea,
  Button,
} from './styles'
import Select from 'react-select'
import { toast } from 'react-toastify'
import { ContactFormData } from '../interface'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { ErrorMessage } from '../Register/styles'

export function Update() {
  const { id } = useParams() // Obtenha o ID do item a ser atualizado
  const navigate = useNavigate() // Use o navigation para redirecionar após a atualização
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  useEffect(() => {
    const jsonFormDataList = localStorage.getItem(`formDataList`)
    if (jsonFormDataList && id !== undefined) {
      const parsedFormData = JSON.parse(jsonFormDataList)
      const itemById = parsedFormData.find(
        (item: ContactFormData) => item.id === id,
      )

      if (itemById) {
        reset(itemById) // Carregar os dados iniciais no formulário
      } else {
        toast.error(
          'Erro ao carregar os dados do formulário. Por favor, tente novamente.',
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          },
        )
        navigate('/list')
      }
    }
  }, [id, reset])

  const genderOptions = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' },
  ]

  const onSubmit: SubmitHandler<ContactFormData> = async (
    data: ContactFormData,
  ) => {
    navigate('/list') // redirecionamento

    // LÓGICA DA ALTERAÇÃO DO OBJETO ANTIGO PARA O NOVO

    // Pegando a lista do storage em JSON
    const listStorage = localStorage.getItem('formDataList')

    if (listStorage) {
      const parsedListStorage = JSON.parse(listStorage)

      const index = parsedListStorage.findIndex(
        (item: ContactFormData) => item.id === id,
      )

      if (index !== -1) {
        // obtenha o objeto encontrado
        const foundItem = parsedListStorage[index]

        // atualizar o objeto com os novos dados
        const updatedItem = { ...foundItem, ...data }

        // substituir o objeto no array original
        parsedListStorage[index] = updatedItem

        // fazer a atualização do localStorage com a lista atualizada
        localStorage.setItem('formDataList', JSON.stringify(parsedListStorage))

        console.log(foundItem, 'foundItem')
      }
    }

    console.log(handleSubmit)

    toast.success('Formulário alterado com sucesso!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  }

  return (
    <FormWrapper>
      <TopBar>
        <Spacer />
        <BackLink href="/list">Página de Listagem</BackLink>
      </TopBar>

      <Title>Edição</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">Nome:</Label>
        <Input
          type="text"
          id="name"
          {...register('name', { required: 'Nome é obrigatório' })}
        />

        <Label htmlFor="email">E-mail:</Label>
        <Input
          type="email"
          id="email"
          {...register('email', { required: 'Email é obrigatório' })}
        />
        <ErrorMessage hasError={!!errors.name}>
          {errors.name && errors.name.message}
        </ErrorMessage>

        <Label htmlFor="username">Usuário:</Label>
        <Input
          type="username"
          id="username"
          {...register('username', {
            required: 'Nome de Usuário é obrigatório',
          })}
        />
        <ErrorMessage hasError={!!errors.email}>
          {errors.email && errors.email.message}
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
        <Button type="submit">Salvar</Button>
      </Form>
    </FormWrapper>
  )
}
