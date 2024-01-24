import { createGlobalStyle, styled } from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: 0 auto;
  padding: 20px 20px 539px 500px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  max-width: 1397px;
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
  padding-right: 250px;
`

export const Table = styled.table`
  width: 85%;
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

export const ToastContainer = createGlobalStyle`
  .Toastify__toast-container {
    z-index: 9999;
  }
`

// TOP BAR

export const TopBarButton = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4169e1;
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
  width: 97.9%;
  height: 52px;
  box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);

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

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
`

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`
