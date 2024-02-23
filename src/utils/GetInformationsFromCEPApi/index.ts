import axios from 'axios'
import { AddressInfo, ICompanyRegister } from '../../pages/Company/interface.ts'
import { UseFormSetValue } from 'react-hook-form'

export const getAddressInfo = async (cep: string) => {
  try {
    const response = await axios.get<AddressInfo>(
      `https://viacep.com.br/ws/${cep}/json/`,
    )
    return response.data
  } catch (error) {
    console.error('Erro ao obter informações de endereço:', error)
    return {} as AddressInfo
  }
}

export const fillAddressFields = (
  addressInfo: AddressInfo,
  setValue: UseFormSetValue<ICompanyRegister>,
) => {
  const { uf, localidade, bairro, logradouro } = addressInfo
  setValue('country', 'Brasil')
  setValue('state', uf)
  setValue('city', localidade)
  setValue('neighborhood', bairro)
  setValue('address', logradouro)
}
