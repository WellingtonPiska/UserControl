import Select from 'react-select'
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'

import {
  FormWrapper,
  BackLink,
  Title,
  Form,
  Label,
  TextArea,
} from '../stylesForRegisterAndUpdate.ts'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { ContactFormDataRegister, ContactFormData } from '../interface'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationRegister } from './schema'
import { useParams } from 'react-router-dom'
import { ErrorMessage } from '../../../components/ErrorMessage'

export function RegisterAndUpdate() {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormDataRegister>({
    resolver: yupResolver(validationRegister),
  })

  const genderOptions = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' },
  ]

  useEffect(() => {
    if (id) {
      const storageData = localStorage.getItem('formDataList')
      if (storageData) {
        const parsedData = JSON.parse(storageData)
        const itemToEdit = parsedData.find(
          (item: ContactFormData) => item.id === id,
        )
        if (itemToEdit) {
          reset(itemToEdit)
        }
      }
    }
  }, [id, reset])

  const onSubmit: SubmitHandler<ContactFormData> = async (
    data: ContactFormData,
  ) => {
    navigate('/list')

    if (id !== undefined) {
      // Atualização
      const listStorage = localStorage.getItem('formDataList')

      if (listStorage) {
        const parsedListStorage = JSON.parse(listStorage)

        const index = parsedListStorage.findIndex(
          (item: ContactFormData) => item.id === id,
        )

        if (index !== -1) {
          const foundItem = parsedListStorage[index]
          const updatedItem = { ...foundItem, ...data }
          parsedListStorage[index] = updatedItem
          localStorage.setItem(
            'formDataList',
            JSON.stringify(parsedListStorage),
          )
        }
      }

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
    } else {
      const existingData = localStorage.getItem('formDataList')
      const formDataListArray = existingData ? JSON.parse(existingData) : []

      const formDataWithId = { ...data, id: uuidv4() }
      formDataListArray.push(formDataWithId)
      localStorage.setItem('formDataList', JSON.stringify(formDataListArray))

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
    }
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
