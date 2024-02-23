export const formatCPF = (value: string) => {
  return value
    .replace(/\D/g, '') // Remove tudo o que não é dígito
    .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após os três primeiros dígitos
    .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após os três dígitos seguintes
    .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Coloca hífen antes dos dois últimos dígitos
    .replace(/(-\d{2})\d+?$/, '$1') // Permite apenas dois dígitos após o hífen
}
