import React, { useEffect, useState } from 'react'

import { MdDeleteForever } from 'react-icons/md'
import { toast } from 'react-toastify'
import { RxUpdate } from 'react-icons/rx'

import { ContactFormData } from './interface'

import {
  ActionsHeader,
  BackLink,
  IconContainer,
  ListContainer,
  ListTitle,
  Spacer,
  Table,
  TableCell,
  TableHeaderCell,
  TableRow,
  TopBar,
} from './styles'
import ModalDelete from '../../components/ModalDelete'
import {
  ButtonContainer,
  ModalButton,
} from '../../components/ModalDelete/styles'
import { useNavigate } from 'react-router'

export function List() {
  const [formDataList, setFormDataList] = useState<ContactFormData[]>([])
  // estados para controlar os modais do deletar
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<string | null>(null)
  const navigate = useNavigate() // Use o navigation para redirecionar após a atualização

  console.log(isModalOpen, 'modal open')

  useEffect(() => {
    const jsonFormDataList = localStorage.getItem('formDataList')

    if (jsonFormDataList) {
      setFormDataList(JSON.parse(jsonFormDataList))
    }
  }, [])

  const openDeleteModal = (id: string) => {
    setItemToDelete(id)
    setIsModalOpen(true)
  }

  const handleUpdate = (id: string) => {
    if (id !== null) {
      // Redireciona para a página de edição com o ID do registro (index)
      navigate(`/update/${id}`)
    }
  }

  const handleDelete = () => {
    if (itemToDelete !== null) {
      const jsonFormDataList = localStorage.getItem('formDataList')

      if (jsonFormDataList) {
        const formDataListArray = jsonFormDataList
          ? (JSON.parse(jsonFormDataList) as ContactFormData[])
          : ([] as ContactFormData[])
        const newFormDataList = formDataListArray.filter(
          (item) => item.id !== itemToDelete,
        )
        setFormDataList(newFormDataList)
        localStorage.setItem('formDataList', JSON.stringify(newFormDataList))

        toast.success('Excluido com sucesso!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      }
      setIsModalOpen(false)
      setItemToDelete(null)
    }
  }

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
            <ActionsHeader>Ações</ActionsHeader>
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
              <TableCell>
                <IconContainer>
                  <RxUpdate onClick={() => handleUpdate(formData.id)} />
                  <MdDeleteForever
                    onClick={() => openDeleteModal(formData.id)}
                  />
                </IconContainer>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {isModalOpen && (
        <ModalDelete onClose={() => setIsModalOpen(false)}>
          <p>Tem certeza de que deseja excluir este registro?</p>
          <ButtonContainer>
            <ModalButton onClick={handleDelete}>Sim</ModalButton>
            <ModalButton onClick={() => setIsModalOpen(false)}>Não</ModalButton>
          </ButtonContainer>
        </ModalDelete>
      )}
    </ListContainer>
  )
}
