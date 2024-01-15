import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { ContactFormData } from './interface'
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
import Select, { SingleValue } from 'react-select'
import { toast } from 'react-toastify'

export function Update() {
  const { id } = useParams() // Obtenha o ID do item a ser atualizado
  const navigate = useNavigate() // Use o navigation para redirecionar após a atualização

  const getInitialFormData = () => {
    const savedFormData = localStorage.getItem(`formData_${id}`)

    return savedFormData
      ? JSON.parse(savedFormData)
      : {
          name: '',
          email: '',
          username: '',
          message: '',
          gender: '',
        }
  }

  const [formData, setFormData] = useState<ContactFormData>(getInitialFormData)

  useEffect(() => {
    const jsonFormDataList = localStorage.getItem(`formDataList`)

    // console.log(jsonFormDataList)

    if (jsonFormDataList && id !== undefined) {
      const parsedFormData = JSON.parse(jsonFormDataList)

      const itemById = parsedFormData.find(
        (item: ContactFormData) => item.id === id,
      )

      if (itemById) {
        setFormData(itemById)
      } else {
        toast.error('Nenhum item encontrado com o id: ' + id, {
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
  }, [id])

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
      const updatedItem = { ...foundItem, ...formData }

      // substituir o objeto no array original
      parsedListStorage[index] = updatedItem

      // fazer a atualização do localStorage com a lista atualizada
      localStorage.setItem('formDataList', JSON.stringify(parsedListStorage))

      console.log(foundItem, 'foundItem')
    } else {
      toast.error('Não foi possível fazer a edição', {
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
  }

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

  const handleSubmit = (formEvent: FormEvent) => {
    formEvent.preventDefault()
    localStorage.setItem(`formData_${id}`, JSON.stringify(formData))
    navigate('/') // redirecionamento

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
        <BackLink href="/">Página de Listagem</BackLink>
      </TopBar>

      <Title>Edição</Title>
      <Form onSubmit={handleSubmit}>
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
        <Button onSubmit={handleSubmit} type="submit">
          Salvar
        </Button>
      </Form>
    </FormWrapper>
  )
}
