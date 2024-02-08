import { createGlobalStyle, styled, css } from 'styled-components'

interface ButtonPaginationNumberProps {
  isCurrentPage: boolean
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
  height: 532px; // Altura máxima antes de ativar a rolagem
  overflow-y: auto; // Ativa a rolagem vertical quando necessário
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2; /* Cor de fundo para linhas pares */
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
  width: 40px; // Largura fixa para acomodar ambos os botões
  text-align: left;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #007bff;
  color: #fff;
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

  // Estilizar os ícones
  svg {
    width: 24px; // Tamanho do ícone
    height: 24px; // Tamanho do ícone
    cursor: pointer; // Muda o cursor para indicar que é clicável
    transition:
      transform 0.3s ease,
      color 0.3s ease; // Transições de transformação e cor

    &:hover {
      transform: scale(1.1); // Efeito de zoom ao passar o mouse
      color: #007bff; // Cor ao passar o mouse
    }
  }
`

// Alteração de senha
export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%
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
  background-color: #fff;
  border: 1px solid #046ee5;
  color: #046ee5;
  padding: 0.4rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  &:hover {
    background-color: #0056b3;
  }

  ${(props) =>
    props.isCurrentPage &&
    css`
      background-color: #046ee5;
      color: #fff;
      border: 1px solid #0358c7;

      &:hover {
        background-color: #0358c7;
      }
    `}
`
