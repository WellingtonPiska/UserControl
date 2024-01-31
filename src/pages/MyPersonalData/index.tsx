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
  password: string
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
          password: userData.password,
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
          setValue(key, data[key as keyof Root])
        }
      })
    }
  }, [setValue])

  return (
    <Container>
      <Title>Dados Pessoais</Title>
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
        <LabelFields>Senha</LabelFields>
        <Input {...register('password')} readOnly />
      </ContainerInputs>
    </Container>
  )
}
