import * as yup from 'yup'

export const validationSignin = yup.object().shape({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('Email é obrigatório')
    .max(50, 'Máximo de 50 caracteres'),

  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'Mínimo de 6 caracteres')
    .max(30, 'Máximo de 30 caracteres'),
})
