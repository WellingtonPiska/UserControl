import React, { useEffect, useState } from 'react'
import { ContactFormData } from './interface'
import {
  BackLink,
  ListContainer,
  ListTitle,
  Spacer,
  Table,
  TableCell,
  TableHeaderCell,
  TableRow,
  TopBar,
} from './styles'

export function List() {
  const [formDataList, setFormDataList] = useState<ContactFormData[]>([])

  useEffect(() => {
    const savedFormData = localStorage.getItem('formDataList')
    if (savedFormData) {
      setFormDataList(JSON.parse(savedFormData))
    }
  }, [])

  return (
    <ListContainer>
      <TopBar>
        <Spacer /> {/* Espaçador para empurrar o BackLink para a direita */}
        <BackLink href="/register">Página de registro</BackLink>
      </TopBar>

      <ListTitle>Lista de Registros</ListTitle>

      <Table>
        <thead>
          <TableRow>
            <TableHeaderCell>Nome</TableHeaderCell>
            <TableHeaderCell>E-mail</TableHeaderCell>
            <TableHeaderCell>Usuário</TableHeaderCell>
            <TableHeaderCell>Sexo</TableHeaderCell>
            <TableHeaderCell>Mensagem</TableHeaderCell>
          </TableRow>
        </thead>
        <tbody>
          {formDataList.map((formData, index) => (
            <TableRow key={index}>
              <TableCell>{formData.name}</TableCell>
              <TableCell>{formData.email}</TableCell>
              <TableCell>{formData.username}</TableCell>
              <TableCell>{formData.gender}</TableCell>
              <TableCell>{formData.message}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </ListContainer>
  )
}
