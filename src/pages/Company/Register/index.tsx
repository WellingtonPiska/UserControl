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
} from './styles.ts'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'
import { ICompanyRegister } from '../interface.ts'
import { useNavigate } from 'react-router'
import Select from 'react-select'

export function CompanyRegister() {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<ICompanyRegister>({})

  const companyTypeOptions = [
    { value: 'MEI', label: 'Micro Empreendedor Individual' },
    { value: 'EL', label: 'Empresa Limitada' },
    { value: 'EI', label: 'Empresa Individual' },
    { value: 'ASS', label: 'Associação' },
  ]

  const onSubmit: SubmitHandler<ICompanyRegister> = async (
    data: ICompanyRegister,
  ) => {
    // Verificar se já existem dados no localStorage
    const existingData = localStorage.getItem('companyData')
    const formDataListArray = existingData ? JSON.parse(existingData) : []

    // Adicionar um UUID ao formData
    const formDataWithId = { ...data, id: uuidv4() }

    // Adicionar o novo registro à lista de dados
    formDataListArray.push(formDataWithId)

    // Salvar a lista atualizada no localStorage
    localStorage.setItem('formDataList', JSON.stringify(formDataListArray))

    // Exibir mensagem de sucesso para o usuário
    toast.success('Empresa criada com sucesso!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })

    navigate('/company')
  }

  return (
    <ContainerForAll>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
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
                      marginBottom: '0.6rem',
                      width: '100%',
                    }),
                    control: (base) => ({
                      ...base,
                      height: '44px',
                      border: '1px solid #ccc',
                      padding: '0.1rem',
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
            <Input type="text" id="cnpj" {...register('cnpj')} />
          </InputBox>

          <InputBox style={{ width: '30%' }}>
            <Label htmlFor="stateRegistration">Inscrição Estadual</Label>
            <Input
              type="text"
              id="stateRegistration"
              {...register('stateRegistration')}
            />
          </InputBox>

          <InputBox style={{ width: '48%' }}>
            <Label htmlFor="corporateReason">Razão Social</Label>
            <Input
              type="text"
              id="corporateReason"
              {...register('corporateReason')}
            />
          </InputBox>

          <InputBox style={{ width: '48%' }}>
            <Label htmlFor="fantasyName">Nome Fantasia</Label>
            <Input type="text" id="fantasyName" {...register('fantasyName')} />
          </InputBox>

          <InputBox style={{ width: '30%' }}>
            <Label htmlFor="email">E-mail</Label>
            <Input type="text" id="email" {...register('email')} />
          </InputBox>

          <InputBox style={{ width: '30%' }}>
            <Label htmlFor="telephone">Telefone</Label>
            <Input type="text" id="telephone" {...register('telephone')} />
          </InputBox>

          <InputBox style={{ width: '30%' }}>
            <Label htmlFor="phoneNumber">Celular</Label>
            <Input type="text" id="phoneNumber" {...register('phoneNumber')} />
          </InputBox>

          <InputBox style={{ width: '100%' }}>
            <Label htmlFor="cep">CEP</Label>
            <Input type="text" id="cep" {...register('cep')} />
          </InputBox>

          <InputBox style={{ width: '23%' }}>
            <Label htmlFor="country">País</Label>
            <Input type="text" id="country" {...register('country')} />
          </InputBox>

          <InputBox style={{ width: '23%' }}>
            <Label htmlFor="state">Estado</Label>
            <Input type="text" id="state" {...register('state')} />
          </InputBox>

          <InputBox style={{ width: '23%' }}>
            <Label htmlFor="city">Cidade</Label>
            <Input type="text" id="city" {...register('city')} />
          </InputBox>

          <InputBox style={{ width: '23%' }}>
            <Label htmlFor="neighborhood">Bairro</Label>
            <Input
              type="text"
              id="neighborhood"
              {...register('neighborhood')}
            />
          </InputBox>

          <InputBox style={{ width: '50%' }}>
            <Label htmlFor="address">Endereço</Label>
            <Input type="text" id="address" {...register('address')} />
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
