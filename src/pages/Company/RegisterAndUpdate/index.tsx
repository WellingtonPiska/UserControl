import {
  ContainerForAll,
  BackLink,
  Title,
  Form,
  InputGroup,
  InputBox,
  Input,
  Label,
  Button,
} from '../stylesForRegisterAndUpdate.ts'
import {
  SubmitHandler,
  useForm,
  Controller,
  UseFormSetValue,
} from 'react-hook-form'

import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'
import {
  ICompanyRegister,
  AddressInfo,
  ICompanyFormData,
} from '../interface.ts'
import { useNavigate } from 'react-router'
import Select from 'react-select'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationRegister } from './schema.ts'
import { useEffect } from 'react'
import { ErrorMessage } from '../../../components/ErrorMessage'

export function CompanyRegisterAndUpdate() {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ICompanyRegister>({
    resolver: yupResolver(validationRegister),
  })

  const companyTypeOptions = [
    { value: 'MEI', label: 'Micro Empreendedor Individual' },
    { value: 'EL', label: 'Empresa Limitada' },
    { value: 'EI', label: 'Empresa Individual' },
    { value: 'ASS', label: 'Associação' },
  ]

  const onSubmit: SubmitHandler<ICompanyFormData> = async (
    data: ICompanyFormData,
  ) => {
    navigate('/company')

    if (id !== undefined) {
      const listStorage = localStorage.getItem('companyData')

      if (listStorage) {
        const parsedListStorage = JSON.parse(listStorage)

        const index = parsedListStorage.findIndex(
          (item: ICompanyFormData) => item.id === id,
        )

        if (index !== -1) {
          const foundItem = parsedListStorage[index]
          const updatedItem = { ...foundItem, ...data }
          parsedListStorage[index] = updatedItem
          localStorage.setItem('companyData', JSON.stringify(parsedListStorage))

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
      }
    } else {
      const currentDate = new Date()
      const formattedDate = `${currentDate.getDate()}/${
        currentDate.getMonth() + 1
      }/${currentDate.getFullYear()}`

      const companyDataWithDate = {
        ...data,
        id: uuidv4(),
        dateRegister: formattedDate,
      }

      const existingData = localStorage.getItem('companyData')
      const companyDataListArray = existingData ? JSON.parse(existingData) : []

      companyDataListArray.push(companyDataWithDate)

      localStorage.setItem('companyData', JSON.stringify(companyDataListArray))

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

  const formatCNPJ = (cnpj: string) => {
    cnpj = cnpj.replace(/\D/g, '')
    return cnpj.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      '$1.$2.$3/$4-$5',
    )
  }

  const formatCep = (value: string) => {
    const numericValue = value.replace(/\D/g, '')
    if (numericValue.length <= 5) {
      return numericValue
    } else if (numericValue.length <= 8) {
      return `${numericValue.slice(0, 5)}-${numericValue.slice(5)}`
    } else {
      return `${numericValue.slice(0, 5)}-${numericValue.slice(5, 8)}`
    }
  }

  const formatPhoneNumber = (phoneNumber: string) => {
    const removeNotNumerics = phoneNumber.replace(/\D/g, '')

    if (removeNotNumerics.length === 11) {
      return removeNotNumerics.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    } else if (removeNotNumerics.length === 10) {
      return removeNotNumerics.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
    } else {
      return removeNotNumerics
    }
  }

  const getAddressInfo = async (cep: string) => {
    try {
      const response = await axios.get<AddressInfo>(
        `https://viacep.com.br/ws/${cep}/json/`,
      )
      return response.data
    } catch (error) {
      console.error('Erro ao obter informações de endereço:', error)
      return {} as AddressInfo
    }
  }

  const fillAddressFields = (
    addressInfo: AddressInfo,
    setValue: UseFormSetValue<ICompanyRegister>,
  ) => {
    const { uf, localidade, bairro, logradouro } = addressInfo
    setValue('country', 'Brasil')
    setValue('state', uf)
    setValue('city', localidade)
    setValue('neighborhood', bairro)
    setValue('address', logradouro)
  }

  const handleCEPChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, '') // Remove todos os caracteres não numéricos
    if (cep.length === 8) {
      try {
        const addressInfo = await getAddressInfo(cep)
        fillAddressFields(addressInfo, setValue)
      } catch (error) {
        console.error('Erro ao obter informações de endereço:', error)
      }
    }
  }

  useEffect(() => {
    if (id) {
      const storageData = localStorage.getItem('companyData')
      if (storageData) {
        const parsedData = JSON.parse(storageData)
        const itemToEdit = parsedData.find(
          (item: ICompanyFormData) => item.id === id,
        )
        if (itemToEdit) {
          reset(itemToEdit)
        }
      }
    }
  }, [id, reset])

  return (
    <ContainerForAll>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '50px',
        }}
      >
        <Title>Registro</Title>
        <BackLink href="/company">Página de Listagem</BackLink>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputBox style={{ width: '30%' }}>
            <Label htmlFor="type">Tipo</Label>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={companyTypeOptions}
                  isSearchable={false}
                  styles={{
                    container: (base) => ({
                      ...base,
                      width: '100%',
                    }),
                    control: (base) => ({
                      ...base,
                      height: '25px',
                      border: '1px solid #ccc',
                      padding: '0.1rem',
                      borderRadius: '10px',
                      marginTop: '10px',
                      boxShadow: '1px 1px 6px #0000001c',
                      fontSize: '0.8rem',
                      fontFamily: 'Roboto',
                      fontWeight: 400,
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
                  value={companyTypeOptions.find(
                    (option) => option.value === field.value,
                  )}
                  onChange={(val) => field.onChange(val ? val.value : '')}
                />
              )}
            />
          </InputBox>

          <InputBox style={{ width: '30%' }}>
            <Label htmlFor="cnpj">CNPJ</Label>
            <Input
              type="text"
              id="cnpj"
              {...register('cnpj')}
              onChange={(e) => {
                e.target.value = formatCNPJ(e.target.value)
              }}
              maxLength={14}
            />
            <ErrorMessage>{errors.cnpj && errors.cnpj.message}</ErrorMessage>
          </InputBox>

          <InputBox style={{ width: '30%' }}>
            <Label htmlFor="stateRegistration">Inscrição Estadual</Label>
            <Input
              type="text"
              id="stateRegistration"
              {...register('stateRegistration')}
            />
            <ErrorMessage>
              {errors.stateRegistration && errors.stateRegistration.message}
            </ErrorMessage>
          </InputBox>

          <InputBox style={{ width: '48%' }}>
            <Label htmlFor="corporateReason">Razão Social</Label>
            <Input
              type="text"
              id="corporateReason"
              {...register('corporateReason')}
            />
            <ErrorMessage>
              {errors.corporateReason && errors.corporateReason.message}
            </ErrorMessage>
          </InputBox>

          <InputBox style={{ width: '48%' }}>
            <Label htmlFor="fantasyName">Nome Fantasia</Label>
            <Input type="text" id="fantasyName" {...register('fantasyName')} />
            <ErrorMessage>
              {errors.fantasyName && errors.fantasyName.message}
            </ErrorMessage>
          </InputBox>

          <InputBox style={{ width: '30%' }}>
            <Label htmlFor="email">E-mail</Label>
            <Input type="text" id="email" {...register('email')} />
            <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>
          </InputBox>

          <InputBox style={{ width: '30%' }}>
            <Label htmlFor="telephone">Telefone</Label>
            <Input
              type="text"
              id="telephone"
              {...register('telephone')}
              onChange={(e) => {
                e.target.value = formatPhoneNumber(e.target.value)
              }}
              maxLength={11}
            />
            <ErrorMessage>
              {errors.telephone && errors.telephone.message}
            </ErrorMessage>
          </InputBox>

          <InputBox style={{ width: '30%' }}>
            <Label htmlFor="phoneNumber">Celular</Label>
            <Input
              type="text"
              id="phoneNumber"
              {...register('phoneNumber')}
              onChange={(e) => {
                e.target.value = formatPhoneNumber(e.target.value)
              }}
              maxLength={11}
            />
            <ErrorMessage>
              {errors.phoneNumber && errors.phoneNumber.message}
            </ErrorMessage>
          </InputBox>

          <InputBox style={{ width: '100%' }}>
            <Label htmlFor="cep">CEP</Label>
            <Input
              type="text"
              id="cep"
              {...register('cep')}
              onChange={(e) => {
                const maskedCep = formatCep(e.target.value)
                handleCEPChange(e)
                e.target.value = maskedCep
                setValue('cep', maskedCep)
              }}
            />
            <ErrorMessage>{errors.cep && errors.cep.message}</ErrorMessage>
          </InputBox>

          <InputBox style={{ width: '23%' }}>
            <Label htmlFor="country">País</Label>
            <Input
              type="text"
              id="country"
              {...register('country')}
              readOnly
              style={{ backgroundColor: '#f2f2f2' }}
            />
          </InputBox>

          <InputBox style={{ width: '23%' }}>
            <Label htmlFor="state">Estado</Label>
            <Input
              type="text"
              id="state"
              {...register('state')}
              readOnly
              style={{ backgroundColor: '#f2f2f2' }}
            />
          </InputBox>

          <InputBox style={{ width: '23%' }}>
            <Label htmlFor="city">Cidade</Label>
            <Input
              type="text"
              id="city"
              {...register('city')}
              readOnly
              style={{ backgroundColor: '#f2f2f2' }}
            />
          </InputBox>

          <InputBox style={{ width: '23%' }}>
            <Label htmlFor="neighborhood">Bairro</Label>
            <Input
              type="text"
              id="neighborhood"
              {...register('neighborhood')}
              readOnly
              style={{ backgroundColor: '#f2f2f2' }}
            />
          </InputBox>

          <InputBox style={{ width: '50%' }}>
            <Label htmlFor="address">Endereço</Label>
            <Input
              type="text"
              id="address"
              {...register('address')}
              readOnly
              style={{ backgroundColor: '#f2f2f2' }}
            />
          </InputBox>

          <InputBox style={{ width: '10%' }}>
            <Label htmlFor="addressNumber">Número</Label>
            <Input
              type="text"
              id="addressNumber"
              {...register('addressNumber')}
            />
          </InputBox>

          <InputBox style={{ width: '33%' }}>
            <Label htmlFor="complement">Complemento</Label>
            <Input type="text" id="complement" {...register('complement')} />
          </InputBox>
        </InputGroup>

        <Button type="submit">Registrar</Button>
      </Form>
    </ContainerForAll>
  )
}
