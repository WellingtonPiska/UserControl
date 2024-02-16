import * as yup from 'yup'

export const validationRegister = yup.object().shape({
  type: yup.string().required('Tipo é obrigatório'),
  cnpj: yup
    .string()
    .required('CNPJ é obrigatório')
    .length(18, 'O CNPJ deve ter 18 caracteres'),

  stateRegistration: yup
    .string()
    .required('Inscrição Estadual é obrigatória')
    .max(10, 'A Inscrição Estadual deve ter no máximo 10 caracteres'),

  corporateReason: yup
    .string()
    .required('Razão Social é obrigatória')
    .min(2, 'A Razão Social deve ter no mínimo 2 caracteres')
    .max(30, 'A Razão Social deve ter no máximo 30 caracteres'),

  fantasyName: yup
    .string()
    .required('Nome Fantasia é obrigatório')
    .min(2, 'O Nome Fantasia deve ter no mínimo 2 caracteres')
    .max(30, 'O Nome Fantasia deve ter no máximo 30 caracteres'),

  email: yup
    .string()
    .email('E-mail inválido')
    .required('Email é obrigatório')
    .max(50, 'O E-mail deve ter no máximo 50 caracteres'),

  telephone: yup
    .string()
    .required('Telefone é obrigatório')
    .max(15, 'O Telefone deve ter 15 caracteres'),

  phoneNumber: yup
    .string()
    .max(15, 'O Número de Celular deve ter 15 caracteres'),

  cep: yup
    .string()
    .required('CEP é obrigatório')
    .max(10, 'O CEP deve ter 10 caracteres'),

  address: yup.string().required('Endereço é obrigatório'),
  neighborhood: yup.string().required('Bairro é obrigatório'),
  state: yup.string().required('Estado é obrigatório'),
  city: yup.string().required('Cidade é obrigatório'),
  country: yup.string().required('País é obrigatório'),

  addressNumber: yup
    .number()
    .required('Número é obrigatório')
    .positive('O Número do Endereço deve ser positivo'),

  complement: yup
    .string()
    .max(40, 'O Complemento deve ter no máximo 40 caracteres'),

  dateRegister: yup.date().notRequired(),
})
