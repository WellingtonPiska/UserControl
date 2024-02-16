import {
  ListContainer,
  ListTitle,
  BackLink,
  TableContainer,
  Table,
  TableRow,
  TableHeaderCell,
  IconContainer,
  TableCell,
  ActionsHeader,
  ButtonPaginationNumber,
  ButtonPagination,
  PhraseToDelete,
} from './styles.ts'
import { RxUpdate } from 'react-icons/rx'
import { MdDeleteForever } from 'react-icons/md'
import { useState, useEffect } from 'react'
import { ICompanyFormData } from '../interface.ts'
import ModalDelete from '../../../components/ModalDelete'
import {
  ButtonContainer,
  ModalButton,
} from '../../../components/ModalDelete/styles.tsx'
import { toast } from 'react-toastify'
import { CiSearch } from 'react-icons/ci'
import { InputForSearch } from '../../User/List/styles.tsx'
import { useNavigate } from 'react-router'

export function Company() {
  const [formDataCompanyList, setFormDataCompanyList] = useState<
    ICompanyFormData[]
  >([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<string | null>(null)

  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  useEffect(() => {
    const jsonFormDataList = localStorage.getItem('companyData')

    if (jsonFormDataList) {
      const parsedList = JSON.parse(jsonFormDataList) as ICompanyFormData[]
      setFormDataCompanyList(parsedList)
    }
  }, [])

  const [searchTerm, setSearchTerm] = useState('')
  const [filteredDataList, setFilteredDataList] = useState<ICompanyFormData[]>(
    [],
  )

  const navigate = useNavigate()

  const openDeleteModal = (id: string) => {
    setItemToDelete(id)
    setIsModalOpen(true)
  }

  const handleDelete = () => {
    if (itemToDelete !== null) {
      const jsonFormDataList = localStorage.getItem('companyData')

      if (jsonFormDataList) {
        const formDataListArray = jsonFormDataList
          ? (JSON.parse(jsonFormDataList) as ICompanyFormData[])
          : ([] as ICompanyFormData[])
        const newFormDataList = formDataListArray.filter(
          (item) => item.id !== itemToDelete,
        )
        setFormDataCompanyList(newFormDataList)
        localStorage.setItem('companyData', JSON.stringify(newFormDataList))

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

  const handleUpdate = (id: string) => {
    if (id !== null) {
      navigate(`/company/update/${id}`)
    }
  }

  const indexOfLastItem = (currentPage + 1) * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = formDataCompanyList.slice(
    indexOfFirstItem,
    indexOfLastItem,
  )
  const totalPages = Math.ceil(formDataCompanyList.length / itemsPerPage)

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

  useEffect(() => {
    const filteredList = formDataCompanyList.filter(
      (formData) =>
        // formData.fantasyName &&
        // formData.fantasyName.toLowerCase().includes(searchTerm.toLowerCase()),
        formData.fantasyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formData.cnpj.includes(searchTerm) ||
        formData.corporateReason
          .toLowerCase()
          .includes(searchTerm.toLowerCase()),
    )
    setFilteredDataList(filteredList)
  }, [searchTerm, formDataCompanyList])

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
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
        <ListTitle>Lista de Empresas</ListTitle>
        <BackLink href="/company/register">Página de registro</BackLink>
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
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
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
              <TableHeaderCell>CNPJ</TableHeaderCell>
              <TableHeaderCell>Razão Social</TableHeaderCell>
              <TableHeaderCell>Nome Fantasia</TableHeaderCell>
              <TableHeaderCell style={{ width: '250px' }}>
                Data de Cadastro
              </TableHeaderCell>
              <ActionsHeader>Ações</ActionsHeader>
            </TableRow>
          </thead>
          <tbody>
            {searchTerm.trim() !== ''
              ? filteredDataList.map((formData, index) => (
                  <TableRow key={index}>
                    <TableCell>{formData.cnpj}</TableCell>
                    <TableCell>{formData.corporateReason}</TableCell>
                    <TableCell>{formData.fantasyName}</TableCell>
                    <TableCell>{formData.dateRegister}</TableCell>
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
                    <TableCell>{formData.cnpj}</TableCell>
                    <TableCell>{formData.corporateReason}</TableCell>
                    <TableCell>{formData.fantasyName}</TableCell>
                    <TableCell>{formData.dateRegister}</TableCell>
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
          Mostrando de 1 até {formDataCompanyList.length} registros
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
