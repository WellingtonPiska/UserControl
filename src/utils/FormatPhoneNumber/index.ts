export const formatPhoneNumber = (phoneNumber: string) => {
  const removeNotNumerics = phoneNumber.replace(/\D/g, '')

  if (removeNotNumerics.length === 11) {
    return removeNotNumerics.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  } else if (removeNotNumerics.length === 10) {
    return removeNotNumerics.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
  } else {
    return removeNotNumerics
  }
}
