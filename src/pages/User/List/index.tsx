import { useEffect, useState } from 'react'

import { MdDeleteForever } from 'react-icons/md'
import { toast } from 'react-toastify'
import { RxUpdate } from 'react-icons/rx'
import { CiLogout } from 'react-icons/ci'
import { RiKey2Line } from 'react-icons/ri'

import {
  ActionsHeader,
  BackLink,
  GlobalStyle,
  IconContainer,
  ListContainer,
  ListTitle,
  Table,
  TableCell,
  TableHeaderCell,
  TableRow,
  TopBar,
  TopBarExternal,
} from './styles'

import { useNavigate } from 'react-router'
import ModalDelete from '../../../components/ModalDelete'
import {
  ButtonContainer,
  ModalButton,
} from '../../../components/ModalDelete/styles'
import { ContactFormData, User } from '../interface'
import { PasswordChangeModal } from '../../../components/ChangePasswordModal'
import { Menu } from '../../Menu'

export function List() {
  const [formDataList, setFormDataList] = useState<ContactFormData[]>([])
  // estados para controlar os modais do deletar
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<string | null>(null)
  const navigate = useNavigate() // Use o navigation para redirecionar após a atualização

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('user_token')
    navigate('/')
  }

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

  const handlePasswordChangeClick = () => {
    setIsPasswordModalOpen(true)
  }

  const handlePassword = (
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string,
  ) => {
    const usersDb = localStorage.getItem('users_db')

    const userToken = localStorage.getItem('user_token')

    if (usersDb && userToken) {
      const usersDbArray: User[] = JSON.parse(usersDb)
      const userTokenObj = JSON.parse(userToken)
      const usersArrayIndex = usersDbArray.findIndex(
        (user) => user.email === userTokenObj.email,
      )

      if (usersArrayIndex !== -1) {
        if (usersDbArray[usersArrayIndex].password === currentPassword) {
          usersDbArray[usersArrayIndex].password = newPassword
          localStorage.setItem('users_db', JSON.stringify(usersDbArray))
        } else if (newPassword !== confirmNewPassword) {
          toast.error('As senhas precisam ser iguais!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          })
        } else {
          toast.error('A senha atual está incorreta', {
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
      }
    }
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
    <>
      <Menu />
      <GlobalStyle />
      <TopBarExternal>
        <div className="icon-container">
          <RiKey2Line onClick={handlePasswordChangeClick} />
          {/* Ícone de mudar senha */}
          <CiLogout onClick={() => handleLogout()} /> {/* Ícone de deslogar */}
        </div>
      </TopBarExternal>

      <PasswordChangeModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        onSubmit={handlePassword}
      />

      <ListContainer>
        <TopBar>
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
              <ModalButton onClick={() => setIsModalOpen(false)}>
                Não
              </ModalButton>
            </ButtonContainer>
          </ModalDelete>
        )}
      </ListContainer>
    </>
  )
}
