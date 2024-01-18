import { useState, ChangeEvent } from 'react'
import Select, { SingleValue } from 'react-select'
import { v4 as uuidv4 } from 'uuid'

import {
  BackLink,
  Button,
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
import { SubmitHandler, useForm } from 'react-hook-form'
import { ContactFormDataRegister } from '../interface'

export function Register() {
  const initialFormData: ContactFormDataRegister = {
    name: '',
    email: '',
    username: '',
    message: '',
    gender: '',
  }

  const navigate = useNavigate()
  const { handleSubmit } = useForm<ContactFormDataRegister>()

  const [formData, setFormData] =
    useState<ContactFormDataRegister>(initialFormData)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const genderOptions = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' },
  ]

  const handleChange = (
    inputChangeEvent: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = inputChangeEvent.target

    const newValue = name === 'username' ? value.toLowerCase() : value

    setFormData({
      ...formData,
      [name]: newValue,
    })
  }

  const handleSelectChange = (
    selectedOption: SingleValue<{ value: string; label: string }>,
  ) => {
    if (selectedOption) {
      // Verifica se selectedOption não é null
      setFormData({
        ...formData,
        gender: selectedOption.value,
      })
    }
  }

  const onSubmit: SubmitHandler<ContactFormDataRegister> = (
    data: ContactFormDataRegister,
  ) => {
    // formEvent.preventDefault()

    console.log(data)

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

    // Buscar dados antigos
    const jsonFormDataList = localStorage.getItem('formDataList')
    const formDataListArray = jsonFormDataList
      ? JSON.parse(jsonFormDataList)
      : []

    // Adicionar um UUID ao formData
    const formDataWithId = { ...formData, id: uuidv4() }

    // Adicionar novo registro ao array
    formDataListArray.push(formDataWithId)

    // Salvar o array atualizado no localStorage
    localStorage.setItem('formDataList', JSON.stringify(formDataListArray))

    setFormData(initialFormData)
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
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <Label htmlFor="email">E-mail:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Label htmlFor="username">Usuário:</Label>
        <Input
          type="username"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <Label htmlFor="gender">Sexo:</Label>
        <Select
          id="gender"
          options={genderOptions}
          onChange={handleSelectChange}
          value={genderOptions.find(
            (option) => option.value === formData.gender,
          )}
          styles={{ container: (base) => ({ ...base, marginBottom: '16px' }) }}
        />

        <Label htmlFor="message">Mensagem:</Label>
        <TextArea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </FormWrapper>
  )
}
