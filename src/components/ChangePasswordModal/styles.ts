import styled from 'styled-components'

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
  z-index: 100;
`

export const ModalContainer = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`

export const Input = styled.input`
  margin-top: 10px;
  outline: none;
  padding: 16px 20px;
  width: calc(100% - 50px); // subtraindo o padding lateral
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 25px;

  background-color: #f0f2f5;
  border: none;
`

export const Button = styled.button`
  margin: 20px auto 10px 780px;
  //width: calc(100% - 90px); // Ajusta a largura para ser igual à do input
  display: block;
  padding: 12px 40px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  &:hover {
    background-color: #0056b3;
  }
`

export const ModalTitle = styled.h2`
  font-size: 30px;
  text-align: right; // Alinha o texto ao centro
  // Adicione aqui outros estilos que você deseja aplicar ao título
`

export const Label = styled.label`
  margin-bottom: 8px;
  margin-left: 10px;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`

export const StyledCloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }

  svg {
    font-size: 30px;
  }
`

export const ContainerCloseButton = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px; /* Adicione algum espaçamento se necessário */

  .titleChangePassword {
    font-size: 28px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    margin-top: 0;
  }
`
