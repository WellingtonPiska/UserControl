import { styled } from 'styled-components'

// export const ListContainer = styled.div`
//   width: 80%;
//   margin: 0 auto;
//   padding: 20px;
//   background-color: #f5f5f5;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   max-width: 720px;
//   overflow-x: auto; /* Adicionando scroll horizontal se necessário */
// `

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  max-width: 720px;
  overflow-x: auto;
`

export const Spacer = styled.div`
  flex: 1;
`

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px; // Espaço entre a barra superior e o título
`

export const ListTitle = styled.h2`
  /* font-size: 24px;
  margin-bottom: 20px;
  text-align: center; Centralizar o título */

  margin: 0 auto 20px;
  text-align: center; /* Centralizar o título */
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2; /* Cor de fundo para linhas pares */
  }
`

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`

export const TableHeaderCell = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #007bff;
  color: #fff;
  text-align: left;
`

export const BackLink = styled.a`
  display: inline-block;
  margin-bottom: 20;
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px 6px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`