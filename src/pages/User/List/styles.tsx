import { createGlobalStyle, styled } from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 20px 20px;
  margin-left: 240px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow-x: auto;
  height: 94.5%;
`

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;
  justify-content: space-between;
  align-items: center;
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
  align-content: center;
  border: none;
  text-align: center;
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px 6px;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 17px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
  height: 25px;
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
  gap: 10px; // Espaçamento entre os ícones

  svg {
    width: 24px; // Tamanho do ícone
    height: 24px; // Tamanho do ícone
    cursor: pointer; // Muda o cursor para indicar que é clicável
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1); // Efeito de zoom ao passar o mouse
    }
  }
`

// TOP BAR

export const TopBarExternal = styled.div`
  display: flex;
  justify-content: flex-end; // Alinha o conteúdo à direita
  align-items: center;
  background-color: #1e90ff;
  color: #fff;
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box; // Inclui padding e borda na largura e altura do elemento
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
