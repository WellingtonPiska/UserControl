export interface IMyPersonalData {
  email: string
  password: string
  cpf: string
  name: string
  lastName: string
  dateOfBirth: Date
}

export interface User {
  email: string
  password: string
  cpf: string
  name: string
  lastName: string
  dateOfBirth: Date | string
}
