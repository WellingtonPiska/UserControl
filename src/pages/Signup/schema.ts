import * as yup from 'yup'

export const validationSignup = yup.object().shape({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório')
    .max(50, 'Máximo de 50 caracteres'),
  emailConf: yup
    .string()
    .oneOf([yup.ref('email')], 'Os e-mails não são iguais')
    .required('Confirmação de e-mail é obrigatória'),

  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'Mínimo de 6 caracteres')
    .max(30, 'Máximo de 30 caracteres'),
})
