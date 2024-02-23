import { styled } from 'styled-components'

export const ContainerForAll = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: auto;
  background-color: #e6f2ff;
`

export const Container = styled.div`
  width: 80%;
  height: 70vh;
  display: flex;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);
`
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 3rem;
`
export const FormHeader = styled.div`
  margin-bottom: 3rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 3rem;
`
export const Title = styled.div`
  position: relative;
  text-align: center;
  font-weight: 600;
`

export const TitleUnderline = styled.div`
  content: '';
  display: block;
  width: 5rem;
  height: 0.3rem;
  background-color: #046ee5;
  margin: 0 auto;
  position: absolute;
  border-radius: 10px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0;
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.1rem;
  width: 21%;
`

export const Input = styled.input`
  margin: 0.6rem 0;
  padding: 0.8rem 4.4rem 0.8rem 0.8rem;
  //border: none;
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

  &[type='date'] {
    padding-right: 1rem; // Aumente o padding-right para inputs do tipo 'date'
    -webkit-appearance: none;
    appearance: none;
    /* Adicione aqui quaisquer outros estilos específicos para inputs de data */
  }
`

export const RegisterButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Button = styled.button`
  width: 100%;
  margin-top: 2.5rem;
  border: none;
  background-color: #046ee5;
  padding: 0.62rem;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.93rem;
  font-weight: 500;
  color: #fff;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`

export const ContainerUnderScreen = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
`
export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;

    &:hover {
      color: #00050a;
    }
  }
`

export const StyledErrorMessage = styled.p`
  color: red;
  font-size: 13px;
  height: 15px;
  margin-top: 2px;
  padding: 0;
  display: flex;
  align-items: center;
  visibility: hidden; // Invisível por padrão
  margin-bottom: 10px; // Espaço reservado, ajuste conforme necessário
`
export const InputContainerForPassword = styled.div`
  position: relative; /* Alterado para relative */
  margin-top: 4px;
`
export const IconPassword = styled.span`
  position: absolute;
  top: 50%;
  right: 16px; /* Ajuste baseado no tamanho do seu input e ícone */
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`
