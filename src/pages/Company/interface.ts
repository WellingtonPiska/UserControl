export interface ICompanyRegister {
  type: string
  cnpj: string
  stateRegistration: string
  corporateReason: string
  fantasyName: string
  email: string
  telephone: string
  phoneNumber: string
  cep: string
  addressNumber: number
  address: string
  neighborhood: string
  complement: string
  state: string
  city: string
  country: string
}

export interface ICompanyFormData {
  id: string
  type: string
  cnpj: string
  stateRegistration: string
  corporateReason: string
  fantasyName: string
  email: string
  telephone: string
  phoneNumber: string
  cep: string
  addressNumber: number
  address: string
  neighborhood: string
  complement: string
  state: string
  city: string
  country: string
}

export interface AddressInfo {
  uf: string
  localidade: string
  bairro: string
  logradouro: string
}
