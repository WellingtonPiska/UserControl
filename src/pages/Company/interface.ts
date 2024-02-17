export interface ICompanyRegister {
  type: string
  cnpj: string
  stateRegistration: string
  corporateReason: string
  fantasyName: string
  email: string
  telephone: string
  phoneNumber?: string
  cep: string
  address: string
  neighborhood: string
  addressNumber: number
  state: string
  city: string
  country: string
  complement?: string
  dateRegister?: Date
}

export interface ICompanyFormData {
  id?: string
  type: string
  cnpj: string
  stateRegistration: string
  corporateReason: string
  fantasyName: string
  email: string
  telephone: string
  phoneNumber?: string
  cep: string
  addressNumber: number
  address: string
  neighborhood: string
  complement?: string
  state: string
  city: string
  country: string
  dateRegister?: Date
}

export interface AddressInfo {
  uf: string
  localidade: string
  bairro: string
  logradouro: string
}
