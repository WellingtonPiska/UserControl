import { styled } from 'styled-components'

interface ButtonPaginationNumberProps {
  isCurrentPage?: boolean
}

export const ListContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 20px 20px;
  margin-left: 240px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const ListTitle = styled.h2`
  text-align: center; /* Centralizar o título */
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 30px;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableHeadContainer = styled.div`
  width: 100%;
  overflow-y: hidden; // Evita rolagem no cabeçalho
`
export const TableContainer = styled.div`
  height: 532px;
  overflow-y: auto;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
`

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
`

export const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
`

export const TableHeaderCell = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #007bff;
  color: #fff;
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  position: sticky;
  top: 0;
  z-index: 1;
`

export const BackLink = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: #046ee5;
  border: none;
  color: #fff;
  padding: 0.4rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  &:hover {
    background-color: #0056b3;
  }
`

export const ActionsHeader = styled.th`
  width: 40px;
  text-align: left;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #007bff;
  color: #fff;
  position: sticky;
  top: 0;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`

// TOP BAR

export const TopBarExternal = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #1e90ff;
  color: #fff;
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
  height: 77px;
  box-shadow: -2px 6px 4px 0 rgba(0, 0, 0, 0.47);

  .icon-container {
    display: flex;
    align-items: center;
  }

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition:
      transform 0.3s ease,
      color 0.3s ease;

    &:hover {
      transform: scale(1.1);
      color: #007bff;
    }
  }
`

// ROUTER

export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const ContainerMiddle = styled.div`
  display: flex;
  height: 100%;
`

export const ContainerNameTopBar = styled.span`
  font-size: 15px;
`

export const PhraseToDelete = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
`

export const ButtonPagination = styled.button`
  display: inline-block;
  text-decoration: none;
  background-color: #046ee5;
  border: 1px solid #046ee5;
  color: #fff;
  padding: 0.4rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  &:hover {
    background-color: #0056b3;
  }
`

export const ButtonPaginationNumber = styled.button<ButtonPaginationNumberProps>`
  display: inline-block;
  text-decoration: none;
  background-color: ${(props) => (props.isCurrentPage ? '#046ee5' : '#fff')};
  border: 1px solid ${(props) => (props.isCurrentPage ? '#0358c7' : '#046ee5')};
  color: ${(props) => (props.isCurrentPage ? '#fff' : '#046ee5')};
  padding: 0.4rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  &:hover {
    background-color: ${(props) =>
      props.isCurrentPage ? '#0358c7' : '#0056b3'};
    border: 1px solid
      ${(props) => (props.isCurrentPage ? '#0358c7' : '#046ee5')};
    color: ${(props) => (props.isCurrentPage ? '#fff' : '#fff')};
  }
`

export const InputForSearch = styled.input`
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 1px 1px 6px #0000001c;
  font-size: 0.8rem;
  width: 100%;

  &:hover {
    background-color: #eeeeee75;
  }

  &:focus-visible {
    outline: 1px solid #6c63ff;
  }
`
