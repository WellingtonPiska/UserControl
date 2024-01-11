import * as yup from 'yup'

// Schema de Validação com Yup
export const validationSchema = yup.object({
  name: yup.string().required('Nome é obrigatório').max(50),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
})
