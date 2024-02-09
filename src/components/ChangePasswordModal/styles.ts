import styled from 'styled-components'

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 100%;
`

export const ModalContainer = styled.div`
  background-color: white;
  width: 55%;
  height: 50%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza na horizontal */
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`

export const Input = styled.input`
  margin: 0.6rem 0;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 10px;
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

export const InputContainerForPassword = styled.div`
  position: relative;
  display: flex;
`

export const IconPassword = styled.span`
  position: absolute;
  right: 25px; // Ajuste conforme necessário para alinhar o ícone
  cursor: pointer;
  height: 100%;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  font-size: 22px;

  &:hover {
    color: #0056b3;
  }
`

export const Button = styled.button`
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
  margin-top: 12px;

  &:hover {
    background-color: #0056b3;
  }
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
  width: 100%;
`

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  margin-bottom: 30px;
`
