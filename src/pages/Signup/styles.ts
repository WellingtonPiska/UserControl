import { styled } from 'styled-components'

export const labelError = styled.label`
  min-height: 20px; /* Ajuste para a altura da mensagem de erro */
  font-size: 12px;
  color: red;
`

export const ContainerForAll = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6f2ff;
`

export const Container = styled.div`
  width: 50%;
  height: 80vh;
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
  margin-bottom: 4rem;
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
`

export const Input = styled.input`
  margin: 0.6rem 0;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 6px #0000001c;
  font-size: 0.8rem;

  &:hover {
    background-color: #eeeeee75;
  }

  &:focus-visible {
    outline: 1px solid #6c63ff;
  }
`

export const GlobalStylesForSignup = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
`

export const RegisterButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
export const Button = styled.div`
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
