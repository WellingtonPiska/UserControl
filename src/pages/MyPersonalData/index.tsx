import {
  Container,
  ContainerInputs,
  Input,
  LabelFields,
  Title,
} from './styles.ts'
import { useEffect } from 'react'
import { User } from './interface.ts'
import { useForm } from 'react-hook-form'
export interface Root {
  email: string
  cpf: string
  name: string
  lastName: string
  dateOfBirth: Date | string
}
export function MyPersonalData() {
  const { register, setValue } = useForm()

  const formatDate = (dateString: Date | string): string => {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0') // Janeiro é 0
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const cpfMask = (value: string) => {
    return value
      .replace(/\D/g, '') // Remove tudo o que não é dígito
      .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após os três primeiros dígitos
      .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após os três dígitos seguintes
      .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Coloca hífen antes dos dois últimos dígitos
      .replace(/(-\d{2})\d+?$/, '$1') // Permite apenas dois dígitos após o hífen
  }
  const getMyPersonalData = () => {
    const usersDb = localStorage.getItem('users_db')
    const userToken = localStorage.getItem('user_token')

    if (usersDb && userToken) {
      const usersDbArray: User[] = JSON.parse(usersDb)
      const userTokenObj = JSON.parse(userToken)
      const userArrayIndex = usersDbArray.findIndex(
        (user) => user.email === userTokenObj.email,
      )

      if (userArrayIndex !== -1) {
        const userData = usersDbArray[userArrayIndex]
        const personalData: Root = {
          cpf: userData.cpf,
          lastName: userData.lastName,
          name: userData.name,
          email: userData.email,
          dateOfBirth: formatDate(userData.dateOfBirth),
        }

        return personalData
      }
    }
  }

  useEffect(() => {
    const data = getMyPersonalData()
    if (data) {
      Object.keys(data).forEach((key) => {
        if (key in data) {
          let value = data[key as keyof Root]
          if (key === 'dateOfBirth' && value instanceof Date) {
            value = formatDate(value)
          } else if (key === 'cpf' && typeof value === 'string') {
            value = cpfMask(value)
          }
          setValue(key, value)
        }
      })
    }
  }, [setValue])

  return (
    <Container>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Title>Dados Pessoais</Title>
      </div>
      <ContainerInputs>
        <LabelFields>CPF</LabelFields>
        <Input {...register('cpf')} readOnly />
        <LabelFields>Nome</LabelFields>
        <Input {...register('name')} readOnly />
        <LabelFields>Sobrenome</LabelFields>
        <Input {...register('lastName')} readOnly />
        <LabelFields>Data de Nascimento</LabelFields>
        <Input {...register('dateOfBirth')} readOnly />
        <LabelFields>E-mail</LabelFields>
        <Input {...register('email')} readOnly />
      </ContainerInputs>
    </Container>
  )
}
