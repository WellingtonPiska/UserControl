import * as yup from 'yup'
import { toast } from 'react-toastify'
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
  cpf: yup
    .string()
    .required('CPF é obrigatório')
    .test('valida-cpf', 'CPF inválido', (value) => isValidCPF(value)),
  name: yup.string().required('Nome é obrigatório'),
  lastName: yup.string().required('Sobrenome é obrigatório'),
  dateOfBirth: yup.date().required('Data de Nascimento é obrigatório'),
})

function isValidCPF(cpf: string) {
  cpf = cpf.replace(/[\s.-]*/gim, '')
  if (
    !cpf ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  ) {
    toast.error('Verifique seu CPF, alguma informação está incorreta!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
    return false
  }
  let sum = 0
  let rest
  for (let i = 1; i <= 9; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i)
  rest = (sum * 10) % 11
  if (rest === 10 || rest === 11) rest = 0
  if (rest !== parseInt(cpf.substring(9, 10))) return false
  sum = 0
  for (let i = 1; i <= 10; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i)
  rest = (sum * 10) % 11
  if (rest === 10 || rest === 11) rest = 0
  return rest === parseInt(cpf.substring(10, 11))
}
