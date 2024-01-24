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
  font-weight: 600;
`

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // Isso adiciona um espaçamento entre os botões
  margin-top: 20px; // Isso adiciona uma margem acima do contêiner dos botões
`

export const ModalButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  background-color: #007bff; // Exemplo de cor de fundo
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3; // Exemplo de cor ao passar o mouse
  }
`
