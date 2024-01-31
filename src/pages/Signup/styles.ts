import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 98vh;
  flex-direction: column;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  gap: 20px;
`

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
`

export const labelError = styled.label`
  min-height: 20px; /* Ajuste para a altura da mensagem de erro */
  font-size: 12px;
  color: red;
`

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`

export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 89%;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f0f2f5;
  border: none;
  margin-bottom: 10px;
`

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #046ee5;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
`
export const LabelFields = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #676767;
`

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ContainerHalfScreen = styled.div`
  width: 50%;
`
export const ContainerUnderScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`
