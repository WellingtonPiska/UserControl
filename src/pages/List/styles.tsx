import { styled } from 'styled-components'

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

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
`
