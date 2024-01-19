import * as yup from 'yup'

export const validationRegister = yup.object().shape({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .min(8, 'Mínimo de 8 caracteres')
    .max(30, 'Máximo de 30 caracteres'),

  email: yup
    .string()
    .email('E-mail inválido')
    .required('Email é obrigatório')
    .max(50, 'Máximo de 50 caracteres'),

  username: yup
    .string()
    .required('Nome de Usuário é obrigatório')
    .min(8, 'Mínimo de 8 caracteres')
    .max(30, 'Máximo de 30 caracteres'),
  gender: yup.string().required('Sexo é obrigatório'),
  message: yup.string().required(),
})
