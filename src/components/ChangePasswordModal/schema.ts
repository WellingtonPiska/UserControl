import * as yup from 'yup'

export const validationChangePassword = yup.object().shape({
  oldPassword: yup
    .string()
    .required('A senha antiga é obrigatória')
    .min(6, 'Mínimo de 6 caracteres'),
  newPassword: yup
    .string()
    .required('A nova senha é obrigatória')
    .min(6, 'Mínimo de 6 caracteres'),
  confirmNewPassword: yup
    .string()
    .required('A confirmação é obrigatória')
    .min(6, 'Mínimo de 6 caracteres'),
})
