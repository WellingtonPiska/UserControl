import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { ContactFormData } from './interface'
import Select, { SingleValue } from 'react-select'
import {
  Button,
  Form,
  FormWrapper,
  Input,
  Label,
  TextArea,
  Title,
} from './styles'

export function Register() {
  const initialFormData: ContactFormData = {
    name: '',
    email: '',
    username: '',
    message: '',
    gender: '',
  }

  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [formDataList, setFormDataList] = useState<ContactFormData[]>([]) // Adicione formDataList ao estado

  const genderOptions = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' },
  ]

  useEffect(() => {
    const savedFormData = localStorage.getItem('formData')
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData))
    }
  }, [])

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

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  const handleSubmit = (formEvent: FormEvent) => {
    formEvent.preventDefault()

    // Adicione o novo registro a formDataList
    const updatedFormDataList = [...formDataList, formData]
    localStorage.setItem('formDataList', JSON.stringify(updatedFormDataList))

    // Limpar o localStorage do registro atual
    localStorage.removeItem('formData')
    setFormData(initialFormData)
    setFormDataList(updatedFormDataList)
  }

  return (
    <FormWrapper>
      <Title>Registro</Title>
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
        <Button type="submit">Enviar</Button>
      </Form>
    </FormWrapper>
  )
}
