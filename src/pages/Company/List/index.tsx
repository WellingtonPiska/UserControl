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
} from './styles.ts'
import { RxUpdate } from 'react-icons/rx'
import { MdDeleteForever } from 'react-icons/md'

export function Company() {
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
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <IconContainer>
                  <RxUpdate />
                  <MdDeleteForever />
                </IconContainer>
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
      </TableContainer>
    </ListContainer>
  )
}
