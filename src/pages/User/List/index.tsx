import { useEffect, useState } from 'react'

import { MdDeleteForever } from 'react-icons/md'
import { toast } from 'react-toastify'
import { RxUpdate } from 'react-icons/rx'
import { CiSearch } from 'react-icons/ci'

import {
  ActionsHeader,
  BackLink,
  ButtonPagination,
  ButtonPaginationNumber,
  IconContainer,
  InputForSearch,
  ListContainer,
  ListTitle,
  PhraseToDelete,
  Table,
  TableCell,
  TableContainer,
  TableHeaderCell,
  TableRow,
} from './styles'

import { useNavigate } from 'react-router'
import ModalDelete from '../../../components/ModalDelete'
import {
  ButtonContainer,
  ModalButton,
} from '../../../components/ModalDelete/styles'
import { ContactFormData } from '../interface'

export function List() {
  const [formDataList, setFormDataList] = useState<ContactFormData[]>([])
  // estados para controlar os modais do deletar
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<string | null>(null)
  const navigate = useNavigate() // Use o navigation para redirecionar após a atualização
  // Paginacao
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  // search
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredDataList, setFilteredDataList] = useState<ContactFormData[]>(
    [],
  )

  useEffect(() => {
    const jsonFormDataList = localStorage.getItem('formDataList')

    if (jsonFormDataList) {
      const parsedList = JSON.parse(jsonFormDataList) as ContactFormData[]
      setFormDataList(parsedList)
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

  const indexOfLastItem = (currentPage + 1) * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = formDataList.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(formDataList.length / itemsPerPage)

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setItemsPerPage(Number(event.target.value))
    setCurrentPage(0)
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

  const getPageNumbers = (currentPage: number, totalPages: number) => {
    const pages = []
    const maxPagesToShow = 4

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(currentPage + 1, totalPages - 1)

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      if (currentPage < totalPages - 2) {
        pages.push('...')
      }

      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers(currentPage, totalPages)

  // Search

  useEffect(() => {
    // Atualizar a lista filtrada sempre que o termo de pesquisa ou a lista original mudar
    const filteredList = formDataList.filter((formData) =>
      formData.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredDataList(filteredList)
  }, [searchTerm, formDataList])

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Aqui você pode realizar ações adicionais, se necessário
  }

  return (
    <ListContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ListTitle>Lista de Registros</ListTitle>
        <BackLink href="/register">Página de registro</BackLink>
      </div>

      <div
        style={{
          display: 'flex',
          marginTop: '16px',
          alignItems: 'center',
          marginBottom: '14px',
        }}
      >
        <select
          id="itemsPerPage"
          onChange={handleItemsPerPageChange}
          value={itemsPerPage}
          style={{
            padding: '4px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: 'white',
            cursor: 'pointer',
            outline: 'none',
            transition: 'border-color 0.3s ease-in-out',
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <label htmlFor="itemsPerPage" style={{ marginLeft: '8px' }}>
          Itens por página{' '}
        </label>

        <div style={{ marginLeft: '1150px', position: 'relative' }}>
          <form
            onSubmit={handleSearchSubmit}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <InputForSearch
              type="text"
              placeholder="Pesquisar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <CiSearch
              style={{
                color: 'gray',
                position: 'absolute',
                right: '10px',
              }}
            />
          </form>
        </div>
      </div>

      <TableContainer>
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
            {searchTerm.trim() !== ''
              ? filteredDataList.map((formData, index) => (
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
                ))
              : currentItems.map((formData, index) => (
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
      </TableContainer>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          Mostrando de 1 até {formDataList.length} registros
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ButtonPagination
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
            style={{
              borderTopLeftRadius: '8px',
              borderBottomLeftRadius: '8px',
            }}
          >
            Anterior
          </ButtonPagination>
          {pageNumbers.map((number, index) => (
            <ButtonPaginationNumber
              key={index}
              onClick={() =>
                typeof number === 'number' && setCurrentPage(number - 1)
              }
              disabled={number === '...'}
              className={number === currentPage + 1 ? 'currentPage' : ''}
            >
              {number}
            </ButtonPaginationNumber>
          ))}
          <ButtonPagination
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
            style={{
              borderTopRightRadius: '8px',
              borderBottomRightRadius: '8px',
            }}
          >
            Próximo
          </ButtonPagination>
        </div>
      </div>

      {isModalOpen && (
        <ModalDelete onClose={() => setIsModalOpen(false)}>
          <PhraseToDelete>
            Tem certeza de que deseja excluir este registro?
          </PhraseToDelete>
          <ButtonContainer>
            <ModalButton onClick={handleDelete}>Sim</ModalButton>
            <ModalButton onClick={() => setIsModalOpen(false)}>Não</ModalButton>
          </ButtonContainer>
        </ModalDelete>
      )}
    </ListContainer>
  )
}
