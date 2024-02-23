export const formatCep = (value: string) => {
  const numericValue = value.replace(/\D/g, '')
  if (numericValue.length <= 5) {
    return numericValue
  } else if (numericValue.length <= 8) {
    return `${numericValue.slice(0, 5)}-${numericValue.slice(5)}`
  } else {
    return `${numericValue.slice(0, 5)}-${numericValue.slice(5, 8)}`
  }
}
